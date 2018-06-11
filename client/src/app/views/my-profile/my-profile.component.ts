import { Component, OnInit, ViewContainerRef, ViewChild } from '@angular/core';
import { RouterStateParamsService } from 'ng-router-state-params';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { NewprojectComponent } from '../modals/newproject/newproject.component';
import { AddEditTaskComponent } from '../modals/add-edit-task/add-edit-task.component';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {
  userId; resp; loading; projectModalData; showingTasks; taskModalData;
  name; email; projects; showingProjects; tasks; projectName; projectId;

  @ViewChild(NewprojectComponent) newProjectModal: NewprojectComponent;
  @ViewChild(AddEditTaskComponent) addEditTask: AddEditTaskComponent;

  constructor(public routerStateParamsService: RouterStateParamsService, private apiService: ApiService, public _router: Router, public toastr: ToastsManager, vcr: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vcr);
  }

  getUserData() {
    this.apiService.getUser(this.userId).subscribe((response) => {
      this.resp = response;
    }, (error) => {
      console.log('Error :: ' + error);
    },
      () => {
        this.loading.projects = false;
        if (!this.resp.status) {
          this._router.navigate(['login/']);
        } else if (this.resp.status) {
          this.projects = this.resp.data.projects;
          this.name = this.resp.data.name;
        }
      });
  }

  projectModal(type) {
    this.projectModalData = type;
    setTimeout(() => {
      this.newProjectModal.open();
    }, 0);
  }

  taskModal(task) {
    this.taskModalData = task;
    setTimeout(() => {
      this.addEditTask.open();
    }, 0);
  }

  deleteProject(project) {
    this.apiService.deleteProject(project._id, this.userId).subscribe((response) => {
      this.resp = response;
    }, (error) => {
      console.log('Error :: ' + error);
    },
      () => {
        if (!this.resp.status) {
          this.toastr.error('Some Error Occured, Please Try Again');
        } else if (this.resp.status) {
          var index = this.projects.findIndex((oldProjects) => { return oldProjects._id == project._id });
          if (index > -1) {
            this.projects.splice(index, 1);
          }
          this.toastr.success('Project Deleted');
        }
      });
  }

  deleteTask(task) {
    this.apiService.deleteTask(task.name, this.projectId).subscribe((response) => {
      this.resp = response;
    }, (error) => {
      console.log('Error :: ' + error);
    },
      () => {
        if (!this.resp.status) {
          this.toastr.error('Some Error Occured, Please Try Again');
        } else if (this.resp.status) {
          this.tasks = this.resp.data[0].tasks;
          this.toastr.success('Task Deleted');
        }
      });
  }

  closeModal(new_project) {
    if (new_project) {
      if (new_project.operation == 'edited') {
        var index = this.projects.findIndex((project) => { return project._id == new_project._id });
        this.projects[index] = new_project;
      } else {
        this.projects.push(new_project);
      }
    }
  }

  closeTaskModal(new_project) {
    if (new_project) {
      if (new_project.operation == 'edited') {
      console.log(new_project.tasks, 'new tasks');
        this.tasks = new_project.tasks;
      }
    }
  }

  showTasks(project) {
    this.showingProjects = false;

    this.apiService.getTasks(project._id).subscribe((response) => {
      this.resp = response;
    }, (error) => {
      console.log('Error :: ' + error);
    },
      () => {
        if (!this.resp.status) {
          this.toastr.error('Some Error Occured! Please Try Again :(');
        } else if (this.resp.status) {
          this.loading.tasks = false;
          this.showingTasks = true;
          this.tasks = this.resp.data.tasks;
          this.projectName = this.resp.data.name;
          this.projectId = this.resp.data._id;
        }
      });
  }

  goBack() {
    this.showingTasks = false;
    this.showingProjects = true;
  }

  ngOnInit() {
    this.userId = this.routerStateParamsService.getParams().source.value.id;
    this.loading = {
      projects: true,
      tasks: false
    };
    this.showingProjects = true;
    this.showingTasks = false;
    this.projects = [];
    this.tasks = [];
    this.projectId = null;
    this.name = null;
    this.getUserData();
  }

}
