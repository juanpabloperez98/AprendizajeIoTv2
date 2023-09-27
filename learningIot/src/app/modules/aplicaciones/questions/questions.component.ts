import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { HighlightService } from '../../../services/highlight.service';

@Component({
  selector: 'presentation2-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {

  @ViewChild('questionNum1', { static: false }) questionNum1!: ElementRef;
  @ViewChild('questionNum2', { static: false }) questionNum2!: ElementRef;
  @ViewChild('questionNum3', { static: false }) questionNum3!: ElementRef;
  @ViewChild('finalSection', { static: false }) finalSection!: ElementRef;
  @ViewChild('progressBar', { static: false }) progressBar!: ElementRef;

  questionsAnswer: string[] = [
    "answer1",
    "answer2",
    "answer3",
  ]
  selectedAnswer: string[] = ['answer1','answer1','answer1'];
  selectedQuestion1: string = 'answer1';
  selectedQuestion2: string = 'answer1';
  selectedQuestion3: string = 'answer1';

  progressValue: number = 33;

  // Final Secion variables
  imagePath = 'assets/logos/correct.png';
  titleMsg = 'Felicidades haz aprobado las preguntas';
  bodyMsg = '¡Felicitaciones! Has respondido correctamente a la mayoría de las preguntas';
  correctAnswer = 0;
  incorrectAnswer = 0;
  ROUTE_PATH_INTRODUCTION = "/aplicaciones/main";



  constructor() { }

  ngAfterViewInit() {
    // this.questionNum1.nativeElement.style.display = 'none';
    this.progressBar.nativeElement.style.display = 'none';
    this.finalSection.nativeElement.style.display = 'none';
    this.questionNum2.nativeElement.style.display = 'none';
    this.questionNum3.nativeElement.style.display = 'none';
  }

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
    this.getAnswers();
    if(this.correctAnswer < this.incorrectAnswer){
      this.titleMsg = 'Lo sentimos no haz aprobado las preguntas';
      this.bodyMsg = '¡No te desanimes! Sigue practicando y mejorarás';
      this.imagePath = 'assets/logos/incorrect.png';
    }
    this.finalSection.nativeElement.style.display = '';
  }

  onClick = (question: number): void => {
    switch(question){
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
    }
  }

  CODE1:string=
  `
  void setup() {
    // Configuración inicial
    pinMode(13, INPUT);
  }
  void loop() {
    int horaDeseada = 18; // Hora deseada (6 PM) en formato de hora militar
    int horaLimite=23;// Hora deseada (11 PM) en formato de hora militar

    if (hour() >= horaDeseada && hour() < horaDeseada ) {
      digitalWrite(13, HIGH); // Enciende la luz
    } else {
      digitalWrite(13, LOW); // Apaga la luz
    }
  }


`;
top:number = 16;






}
