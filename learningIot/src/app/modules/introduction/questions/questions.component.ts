import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { Location } from '@angular/common';



@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {

  selectedAnswer: string[] = ['answer3','answer2','answer3','answer3','answer2'];
  selectedQuestion1: string = 'answer1';
  selectedQuestion2: string = 'answer1';
  selectedQuestion3: string = 'answer1';
  selectedQuestion4: string = 'answer1';
  selectedQuestion5: string = 'answer1';

  list_correct: boolean[] = [
    false,
    false,
    false,
    false,
    false
  ]

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
    private location: Location) { }

  ngOnInit(): void {
  }

  showMessage = (correctAnswer:number, incorrectAnswer:number): void => {
    if(correctAnswer != 5){
      this.titleMsg = 'Lo sentimos no haz aprobado las preguntas';
      this.bodyMsg = `
      Tienes ${correctAnswer} respuestas buenas y ${incorrectAnswer} respuestas incorrectas <br>
      '¡No te desanimes! Sigue practicando y mejorarás'
      `;
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
    ).then((result) => {
      if (result.isConfirmed) {
        this.router.navigate(['/fundamentos/main']);
      }
    })
  }

  onClick = (): void => {
    let correctAnswer = 0,
    incorrectAnswer = 0;

    if(this.selectedQuestion1 === this.selectedAnswer[0]){
      correctAnswer ++
      this.list_correct[0] = true;
    }else{
      incorrectAnswer++
      this.list_correct[0] = false;
    }
    if(this.selectedQuestion2 === this.selectedAnswer[1]){
      correctAnswer ++
      this.list_correct[1] = true;
    }else{
      incorrectAnswer++
      this.list_correct[1] = false;
    }
    if(this.selectedQuestion3 === this.selectedAnswer[2]){
      correctAnswer ++
      this.list_correct[2] = true;
    }else{
      incorrectAnswer++
      this.list_correct[2] = false;
    }
    if(this.selectedQuestion4 === this.selectedAnswer[3]){
      correctAnswer ++
      this.list_correct[3] = true;
    }else{
      incorrectAnswer++
      this.list_correct[3] = false;
    }
    if(this.selectedQuestion5 === this.selectedAnswer[4]){
      correctAnswer ++
      this.list_correct[4] = true;
    }else{
      incorrectAnswer++
      this.list_correct[4] = false;
    }

    // this.selectedQuestion1 === this.selectedAnswer[0] ? correctAnswer ++ : incorrectAnswer++;
    // this.selectedQuestion2 === this.selectedAnswer[1] ? correctAnswer ++ : incorrectAnswer++;
    // this.selectedQuestion3 === this.selectedAnswer[2] ? correctAnswer ++ : incorrectAnswer++;
    // this.selectedQuestion4 === this.selectedAnswer[3] ? correctAnswer ++ : incorrectAnswer++;
    // this.selectedQuestion5 === this.selectedAnswer[4] ? correctAnswer ++ : incorrectAnswer++;
    this.showMessage(correctAnswer, incorrectAnswer);
  }

  back = (): void => {
    this.location.back();
  }

}
