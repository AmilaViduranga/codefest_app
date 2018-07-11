import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map'

@Injectable()
export class APIInfo {
  liveApi: String;
  login: String;
  register: String;
  question: String;
  answer: String;

  constructor() {
    this.liveApi = 'http://localhost:8080/';
    this.login = this.liveApi + "user/login";
    this.register = this.liveApi + "user";
    this.question = this.liveApi + "question";
    this.answer = this.liveApi + "answer";
  }
}
