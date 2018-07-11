import { Component, OnInit } from '@angular/core';
import { RegisterService }   from './register.service';
import { Router }            from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userName: String;
  password: String;
  confirmPassword: String;

  constructor(private service: RegisterService, private router: Router) { }

  ngOnInit() {
  }

  register() {
    if(this.password != null && this.userName != null && this.password == this.confirmPassword) {
      let registerInfo = {
        name: this.userName,
        password :this.password
      }
      this.service.register(registerInfo).then(data => {
        if(data["status"] == 200) {
          this.router.navigateByUrl("/login");
        }
      }).catch(err => {
        console.log(err);
      })
    }
  }

}
