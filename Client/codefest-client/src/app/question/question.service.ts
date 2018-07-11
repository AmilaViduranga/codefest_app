import { Injectable }     from '@angular/core';
import { BaseService }    from '../base.service';
import { APIInfo }        from '../Url.Statics';

@Injectable()
export class QuestionService {
  constructor(private base: BaseService, private  apiInfo: APIInfo) { }

  addQuestion(question) {
    return new Promise((resolve, reject) => {
      this.base.post(this.apiInfo.question, question).then(response => {
        resolve(response);
      }).catch(err => {
        reject(err);
      })
    })
  }

  getAllQuestions() {
    return new Promise((resolve, reject) => {
      this.base.get(this.apiInfo.question, null).then(response => {
        resolve(response);
      }).catch(err => {
        reject(err);
      })
    })
  }

  getSingleQuestion(questionId) {
    return new Promise((resolve, reject) => {
      this.base.get(this.apiInfo.question + "/" + questionId, null).then(response => {
        resolve(response);
      }).catch(err => {
        reject(err);
      })
    })
  }

  updateQuestion(questionInstance, questionId) {
    return new Promise((resolve, reject) => {
      this.base.put(this.apiInfo.question + "/" + questionId, questionInstance).then(response => {
        resolve(response);
      }).catch(err => {
        reject(err);
      })
    })
  }

  getAnswerForQuestion(questionId) {
    return new Promise((resolve, reject) => {
      this.base.get(this.apiInfo.answer + "/" + questionId, null).then(response => {
        resolve(response);
      }).catch(err => {
        reject(err);
      })
    })
  }

  addNewAnswer(newAnswer) {
    return new Promise((resolve, reject) => {
      this.base.post(this.apiInfo.answer, newAnswer).then(response => {
        resolve(response);
      }).catch(err => {
        reject(err);
      })
    })
  }
}
