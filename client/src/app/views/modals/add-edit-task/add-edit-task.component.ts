import { Component, OnInit, ViewChild, Input, Output, ViewContainerRef, EventEmitter } from '@angular/core';
import { BsModalComponent } from 'ng2-bs3-modal';
import { ApiService } from '../../../services/api.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'app-add-edit-task',
  templateUrl: './add-edit-task.component.html',
  styleUrls: ['./add-edit-task.component.css']
})
export class AddEditTaskComponent implements OnInit {
  @ViewChild(BsModalComponent) modal: BsModalComponent;

  resp;

  @Input() incomingData: any;
  @Input() projectId: any;
  @Output('modalClosed')
  modalClosed = new EventEmitter<any>();

  task; noName; taskName;

  settings = {
    bigBanner: false,
    timePicker: false,
    format: 'dd-MM-yyyy',
    defaultOpen: false
  }

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
    if (new Date(this.task.deadline).getTime() < new Date().getTime()) {
      this.toastr.error('Deadline cannot be in the past');
      return;
    }

    if (this.incomingData) {
      this.apiService.editTask(this.task, this.projectId).subscribe((response) => {
        this.resp = response;
      }, (error) => {
        console.log('Error :: ' + error);
      },
        () => {
          if (!this.resp.status) {
            this.toastr.error('Some Error Occured, Please Try Again');
          } else if (this.resp.status) {
            this.toastr.success('Task Updated');
            this.close(this.resp.data, 'edited');
          }
        });
    } else {
      this.apiService.addNewTask(this.task, this.projectId).subscribe((response) => {
        this.resp = response;
      }, (error) => {
        console.log('Error :: ' + error);
      },
        () => {
          if (!this.resp.status) {
            this.toastr.error('Some Error Occured, Please Try Again');
          } else if (this.resp.status) {
            this.toastr.success('New task Added');
            this.close(this.resp.data, 'edited');
          }
        });
    }
    
  }


  ngOnInit() {
    this.task = {
      name: null,
      deadline: null, 
      priority: null,
      status: null
    }
    this.noName = false;
  }

}