import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {

  questionsAnswer: string[] = [
    "answer1",
    "answer2",
    "answer3",
    "answer4",
    "answer1",
  ]
  selectedAnswer: string[] = ['answer3', 'answer2', 'answer1', 'answer3', 'answer2'];
  selectedQuestion1: string = 'answer1';
  selectedQuestion2: string = 'answer1';
  selectedQuestion3: string = 'answer1';
  selectedQuestion4: string = 'answer1';
  selectedQuestion5: string = 'answer1';

  // progressValue: number = 33;

  // Final Secion variables
  imagePath = 'assets/logos/correct.png';
  titleMsg = 'Felicidades haz aprobado las preguntas';
  bodyMsg = '¡Felicitaciones! Has respondido correctamente a la mayoría de las preguntas';
  correctAnswer = 0;
  incorrectAnswer = 0;
  ROUTE_PATH_INTRODUCTION = "/introduccion/main";



  constructor(
    private router: Router,
    private location: Location
  ) { }

  ngOnInit(): void {
  }

  getAnswers = (): void => {
    this.selectedAnswer.forEach( (item, index) => {
      let elem1 = item,
          elem2 = this.questionsAnswer[index];
      if(elem1 == elem2){
        this.correctAnswer ++;
      }else{
        this.incorrectAnswer ++;
      }
    })
  }

  showMessage = (): void => {
    console.log(this.correctAnswer);
    console.log(this.incorrectAnswer);

    if(this.correctAnswer < this.incorrectAnswer){
      this.titleMsg = 'Lo sentimos no haz aprobado las preguntas';
      this.bodyMsg = '¡No te desanimes! Sigue practicando y mejorarás';
      this.imagePath = 'assets/logos/incorrect.png';

      Swal.fire(
        this.titleMsg,
        this.bodyMsg,
        'error'
      )
      return;
    }
    Swal.fire(
      this.titleMsg,
      this.bodyMsg,
      'success'
    )
  }

  onClick = (): void => {
    /* switch(question){
      case 0:{
        this.selectedAnswer[question] = this.selectedQuestion1;
        this.questionNum1.nativeElement.style.display = 'none';
        this.questionNum2.nativeElement.style.display = '';
        this.progressValue += 33;
        break;
      }
      case 1:{
        this.selectedAnswer[question] = this.selectedQuestion2;
        this.questionNum2.nativeElement.style.display = 'none';
        this.questionNum3.nativeElement.style.display = '';
        this.progressValue += 33;
        break;
      }
      case 2:{
        this.selectedAnswer[question] = this.selectedQuestion3;
        console.log(this.selectedAnswer);
        this.progressValue += 1;
        this.questionNum3.nativeElement.style.display = 'none';
        this.progressBar.nativeElement.style.display = 'none';
        this.showMessage();
        break;
      }
    } */
    this.selectedQuestion1 === this.selectedAnswer[0] ? this.correctAnswer ++ : this.incorrectAnswer++;
    this.selectedQuestion2 === this.selectedAnswer[1] ? this.correctAnswer ++ : this.incorrectAnswer++;
    this.selectedQuestion3 === this.selectedAnswer[2] ? this.correctAnswer ++ : this.incorrectAnswer++;
    this.selectedQuestion4 === this.selectedAnswer[3] ? this.correctAnswer ++ : this.incorrectAnswer++;
    this.selectedQuestion5 === this.selectedAnswer[4] ? this.correctAnswer ++ : this.incorrectAnswer++;
    this.showMessage();
  }

  back = (): void => {
    this.location.back();
  }
}
