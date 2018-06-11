import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-router/app-router.module';
import { ApiService } from './services/api.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterStateParamsService } from 'ng-router-state-params';
import { AppComponent } from './app.component';
import { LoginSignupComponent } from './views/login-signup/login-signup.component';
import { MyProfileComponent } from './views/my-profile/my-profile.component';
import {ToastModule} from 'ng2-toastr/ng2-toastr';
import { NewprojectComponent } from './views/modals/newproject/newproject.component';
import { BsModalModule } from 'ng2-bs3-modal';
import { AddEditTaskComponent } from './views/modals/add-edit-task/add-edit-task.component';
import { AngularDateTimePickerModule } from 'angular2-datetimepicker';
import { AddeditCommentsComponent } from './views/modals/addedit-comments/addedit-comments.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginSignupComponent,
    MyProfileComponent,
    NewprojectComponent,
    AddEditTaskComponent,
    AddeditCommentsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    ToastModule.forRoot(),
    BsModalModule,
    AngularDateTimePickerModule
  ],
  providers: [
    ApiService,
    RouterStateParamsService,
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    NewprojectComponent
  ]
})
export class AppModule { }
