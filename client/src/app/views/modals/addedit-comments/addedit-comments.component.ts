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

  task; taskName; noComment; taskId; commentId;
  resp; commentMessage; newComment; oldComment;

  constructor(private apiService: ApiService, public toastr: ToastsManager, vcr: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vcr);
  }

  open() {
    if (this.incomingData) {
      this.task = this.incomingData;
      this.taskName = this.incomingData.name;
      this.taskId = this.incomingData._id;
    }
    this.modal.open();
  }

  close() {
    this.modalClosed.emit(this.task);
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
    this.commentId = comment._id;
    this.commentMessage = comment.message;
    this.oldComment = true;
  }

  deleteComment(comment) {
    this.apiService.deleteComment(this.projectId, this.taskId, comment._id).subscribe((response) => {
      this.resp = response;
    }, (error) => {
      console.log('Error :: ' + error);
    },
      () => {
        console.log(this.resp, 'on delete');
        if (!this.resp.status) {
          this.toastr.error('Some Error Occured, Please Try Again');
        } else if (this.resp.status) {
          this.resp.data.tasks.forEach((task) => {
            if (task._id == this.taskId) {
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
      this.apiService.editComment(this.projectId, this.taskId, this.commentId ,this.commentMessage).subscribe((response) => {
        this.resp = response;
      }, (error) => {
        console.log('Error :: ' + error);
      },
        () => {
          console.log(this.resp, 'in edit');
          if (!this.resp.status) {
            this.toastr.error('Some Error Occured, Please Try Again');
          } else if (this.resp.status) {
            this.resp.data.tasks.forEach((task) => {
              if (task._id == this.taskId) {
                this.task = task;
              }
            });
            this.cancel();
            this.toastr.success('Comment Updated');
          }
        });
    } else {
      this.apiService.addComment(this.projectId, this.taskId, this.commentMessage).subscribe((response) => {
        this.resp = response;
      }, (error) => {
        console.log('Error :: ' + error);
      },
        () => {
          console.log(this.resp, 'on add');
          if (!this.resp.status) {
            this.toastr.error('Some Error Occured, Please Try Again');
          } else if (this.resp.status) {
            this.resp.data.tasks.forEach((task) => {
              if (task._id == this.taskId) {
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
