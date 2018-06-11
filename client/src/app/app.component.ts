import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  token; loggedOut;
  title = 'app';

constructor(public _router: Router) {

}

logout() {
  localStorage.clear();
  this.loggedOut = true;
  this._router.navigate(['login/']);
}

  ngOnInit() {
    this.token = localStorage.getItem('jwtToken');
    if (!this.token) {
      this.loggedOut = true;
    }
  }

}
