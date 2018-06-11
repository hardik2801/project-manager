import { Component, OnInit, ViewChild, Input, Output, ViewContainerRef, EventEmitter } from '@angular/core';
import { BsModalComponent } from 'ng2-bs3-modal';
import { ApiService } from '../../../services/api.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'app-newproject',
  templateUrl: './newproject.component.html',
  styleUrls: ['./newproject.component.css']
})
export class NewprojectComponent implements OnInit {
  @ViewChild(BsModalComponent) modal: BsModalComponent;


  @Input() incomingData: any;
  @Input() userId: any;
  @Output('modalClosed')
  modalClosed = new EventEmitter<any>();

  projectName; noName; resp;

  constructor(private apiService: ApiService, public toastr: ToastsManager, vcr: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vcr);
  }

  open() {
    if (this.incomingData) {
      this.projectName = this.incomingData.name;
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
    this.projectName = null;
    this.noName = false;
    this.modal.close();
  }

  isEmptyOrSpaces(str) {
    if (str == undefined || str == null)
      return true;

    if (str.trim('').length == 0)
      return true;

    return false;
  }

  onSubmit() {
    if (!this.isEmptyOrSpaces(this.projectName)) {
      this.noName = false;
      if (this.incomingData) {
        this.apiService.editProject(this.incomingData._id, this.projectName).subscribe((response) => {
          this.resp = response;
        }, (error) => {
          console.log('Error :: ' + error);
        },
          () => {
            if (!this.resp.status) {
              this.toastr.error('Some Error Occured, Please Try Again');
            } else if (this.resp.status) {
              this.toastr.success('Project Updated');
              this.close(this.resp.data, 'edited');
            }
          });
      } else {
        this.apiService.addNewProject(this.projectName, this.userId).subscribe((response) => {
          this.resp = response;
        }, (error) => {
          console.log('Error :: ' + error);
        },
          () => {
            if (!this.resp.status) {
              this.toastr.error('Some Error Occured, Please Try Again');
            } else if (this.resp.status) {
              this.toastr.success('New Project Created');
              this.close(this.resp.data, null);
            }
          });
      }
    } else {
      this.noName = true;
      return;
    }
  }


  ngOnInit() {
    this.noName = false;
  }

}
