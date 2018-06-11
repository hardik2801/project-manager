import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'app-login-signup',
  templateUrl: './login-signup.component.html',
  styleUrls: ['./login-signup.component.css']
})
export class LoginSignupComponent implements OnInit {
  currentRoute; loading; placeholderString;
  email_ip; password_ip; name_ip; resp; loggedIn; token; loggedOut;
  constructor(public _router: Router, private apiService: ApiService, public toastr: ToastsManager, vcr: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vcr);
  }

  navigate(route) {
    if (route === 'signup') {
      this.currentRoute = 'signup';
    } else {
      this.currentRoute = 'login';
    }
  }

  login() {
    if (this.email_ip && this.password_ip) {
      this.loading = true;
      this.apiService.login(this.email_ip, this.password_ip).subscribe((response) => {
        this.resp = response;
      }, (error) => {
        console.log('Error :: ' + error);
      },
        () => {
          this.loading = false;
          if (!this.resp.status) {
            this.toastr.error(this.resp.message);
          } else if (this.resp.status) {
            // console.log(this.resp);
            localStorage.setItem('jwtToken', this.resp.data.token);
            localStorage.setItem('userId', this.resp.data.user._id);
            this.loggedOut = false;
            localStorage.setItem('logged_in_user', this.resp.data.user.name);
            this._router.navigate(['my-profile/' + this.resp.data.user._id]);
          }
        });
    } else {
      this.toastr.error('Please enter email and password!');
    }
  }

  signup() {
    const emailTest = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

    if(!emailTest.test(this.email_ip)) {
      this.toastr.error('Please enter valid Email Address');
      return;
    }

    if (this.email_ip && this.password_ip) {
      this.loading = true;
      this.apiService.signup(this.email_ip, this.password_ip, this.name_ip).subscribe((response) => {
        this.resp = response;
      }, (error) => {
        console.log('Error :: ' + error);
      },
        () => {
          this.loading = false;
          console.log(this.resp);
          if (!this.resp.status) {
            this.toastr.error(this.resp.message);
          } else if (this.resp.status) {
            this.toastr.success('New User Created');
            this.email_ip = '';
            this.password_ip = '';
            this.currentRoute = 'login';
            this._router.navigate(['my-profile']);
          }
        });
    } else {
      this.toastr.error('Please enter email and password!');
    }
  }

  ngOnInit() {
    this.loggedIn = localStorage.getItem('userId');
    this.token = localStorage.getItem('jwtToken');
    if (this.loggedIn && this.token) {
      this._router.navigate(['my-profile/' + this.loggedIn]);
    }

    this.loading = false;
    this.currentRoute = 'login';
    this.email_ip = '';
    this.password_ip = '';
  }
}
