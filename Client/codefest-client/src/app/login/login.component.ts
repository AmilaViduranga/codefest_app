import { Component, OnInit } from '@angular/core';
import { LoginService }      from './login.service';
import { Router }              from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userName: String;
  password: String;

  constructor(private service: LoginService, private router: Router) {

  }

  ngOnInit() {
  }

  loginToSystem() {
    let authInfo = {
      name: this.userName,
      password: this.password
    }
    this.service.login(authInfo).then(result => {
      if(result["status"] == 200) {
        localStorage.setItem("userName", result["data"]["user"]["name"]);
        localStorage.setItem("userId", result["data"]["user"]["id"]);
        this.router.navigateByUrl("/question");
      }
    }).catch(err => {
      console.log(err);
    })
  }

}
