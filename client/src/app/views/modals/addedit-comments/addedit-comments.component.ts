import { Component, OnInit, ViewChild, Input, Output, ViewContainerRef, EventEmitter } from '@angular/core';
import { BsModalComponent } from 'ng2-bs3-modal';
import { ApiService } from '../../../services/api.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'app-addedit-comments',
  templateUrl: './addedit-comments.component.html',
  styleUrls: ['./addedit-comments.component.css']
})
export class AddeditCommentsComponent implements OnInit {
  @ViewChild(BsModalComponent) modal: BsModalComponent;

  @Input() incomingData: any;
  @Input() projectId: any;
  @Output('modalClosed')
  modalClosed = new EventEmitter<any>();

  task; taskName; noComment; oldMsg;
  resp; commentMessage; newComment; oldComment;

  constructor(private apiService: ApiService, public toastr: ToastsManager, vcr: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vcr);
  }

  open() {
    if (this.incomingData) {
      this.task = this.incomingData;
      this.taskName = this.incomingData.name;
    }
    this.modal.open();
  }

  close(data, operation) {
    if (data) {
      data.operation = operation;
      this.modalClosed.emit(data);
    } else {
      this.modalClosed.emit(null);
    }
    this.noComment = false;
    this.cancel();
    this.modal.close();
  }

  isEmptyOrSpaces(str) {
    if (str == undefined || str == null)
      return true;

    if (str.trim('').length == 0)
      return true;

    return false;
  }

  addComment() {
    this.newComment = true;
  }

  editComment(comment) {
    this.oldMsg = comment.message;
    this.commentMessage = comment.message;
    this.oldComment = true;
  }

  deleteComment(comment) {
    this.apiService.deleteComment(this.projectId, this.commentMessage, this.taskName).subscribe((response) => {
      this.resp = response;
    }, (error) => {
      console.log('Error :: ' + error);
    },
      () => {
        if (!this.resp.status) {
          this.toastr.error('Some Error Occured, Please Try Again');
        } else if (this.resp.status) {
          this.resp.data.tasks.forEach((task) => {
            if (task.name == this.taskName) {
              this.task = task;
            }
          });
          this.toastr.success('Comment Deleted');
        }
      });
  }

  cancel() {
    this.newComment = false;
    this.commentMessage = null;
    this.oldComment = false;
  }

  onSubmit() {
    if (this.isEmptyOrSpaces(this.commentMessage)) {
      this.noComment = true;
      return;
    }
    if (this.oldComment) {
      this.apiService.editComment(this.taskName, this.projectId, this.oldMsg, this.commentMessage).subscribe((response) => {
        this.resp = response;
      }, (error) => {
        console.log('Error :: ' + error);
      },
        () => {
          if (!this.resp.status) {
            this.toastr.error('Some Error Occured, Please Try Again');
          } else if (this.resp.status) {
            this.resp.data.tasks.forEach((task) => {
              if (task.name == this.taskName) {
                this.task = task;
              }
            });
            this.cancel();
            this.toastr.success('Comment Updated');
          }
        });
    } else {
      this.apiService.addComment(this.projectId, this.commentMessage, this.taskName).subscribe((response) => {
        this.resp = response;
      }, (error) => {
        console.log('Error :: ' + error);
      },
        () => {
          if (!this.resp.status) {
            this.toastr.error('Some Error Occured, Please Try Again');
          } else if (this.resp.status) {
            this.resp.data.tasks.forEach((task) => {
              if (task.name == this.taskName) {
                this.task = task;
              }
            });
            this.toastr.success('New Comment Added');
          }
        });
    }

  }


  ngOnInit() {
    this.task = {
      name: null,
      deadline: null,
      priority: null,
      status: null,
      comments: []
    }
    this.newComment = false;
    this.oldComment = false;
    this.commentMessage = null;
    this.noComment = false;
  }

}
