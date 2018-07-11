import { Component, OnInit } from '@angular/core';
import { QuestionService }   from './question.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  availableQuestions: Array<any>;
  availableAnswers: Array<any>;
  currentUser: String;
  newAnswer: String;
  newQuestion: String;
  selectedQuestion: any;
  isAnswering :boolean;
  updateQuestionValue: String;

  constructor(private service: QuestionService) {
    this.availableAnswers = null;
    this.availableQuestions = null;
    this.isAnswering = false;
    this.currentUser = localStorage.getItem('userName');
  }

  ngOnInit() {
    this.getAllQuestions();
  }

  getAllQuestions() {
    return new Promise((resolve, reject) => {
      this.service.getAllQuestions().then(result => {
        this.availableQuestions = result["data"]["data"];
      })
    })
  }

  displayAnswers(selectedItem) {
    this.selectedQuestion = selectedItem;
    this.updateQuestionValue = this.selectedQuestion.question;
    return new Promise((resolve, reject) => {
      this.service.getAnswerForQuestion(selectedItem.id).then(response => {
        this.availableAnswers = response["data"]["data"];
      })
    })
  }

  enableAnswer() {
    this.isAnswering = true;
  }

  addAnswer() {
    let answer = {
      questionId: this.selectedQuestion["id"],
      userId: localStorage.getItem("userId"),
      answer: this.newAnswer
    }
    return new Promise((resolve, reject) => {
      this.service.addNewAnswer(answer).then(response => {
        if(response["status"] == 200) {
          this.isAnswering = false;
          this.displayAnswers(this.selectedQuestion);
        }
      })
    })
  }

  editQuestion() {
    let updatedQuestion = {
      userId: localStorage.getItem("userId"),
      question :this.updateQuestionValue
    }
    return new Promise((resolve, reject) => {
      this.service.updateQuestion(updatedQuestion, this.selectedQuestion.id).then(response => {
        if(response["status"] == 200) {
          this.getAllQuestions();
        }
      })
    })
  }

  addQuestion() {
    let question = {
      userId: localStorage.getItem("userId"),
      question :this.newQuestion
    }
    return new Promise((resolve, reject) => {
      this.service.addQuestion(question).then(response => {
        if(response["status"] == 200) {
          this.getAllQuestions();
        }
      })
    })
  }

}
