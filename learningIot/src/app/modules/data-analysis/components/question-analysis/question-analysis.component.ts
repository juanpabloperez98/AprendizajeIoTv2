import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { QUESTION_DATA } from '../../constant/question.constant';
import Swal from 'sweetalert2';
import { Location } from '@angular/common';


@Component({
  selector: 'app-question-analysis',
  templateUrl: './question-analysis.component.html',
  styleUrls: ['./question-analysis.component.scss'],
})
export class QuestionAnalysisComponent implements OnInit {
  formQuestion!: FormGroup;

  QUESTION_DATA = QUESTION_DATA;

  private controlNameCorrect: string[] = [
    'collect1',
    'communication1',
    'normalization2',
    'cleaning2',
    'imputation2',
    'surveys3',
    'sensors3',
    'identify4',
    'regression5',
    'clustering5',
  ];

  validateIsCorrect: boolean = false;

  constructor(private readonly formBuilder: FormBuilder, private location: Location) { }

  ngOnInit(): void {
    this.formQuestion = this.formBuilder.group({});
  }

  validateAnswers(): void {
    this.validateIsCorrect = true;
    setTimeout(() => {
      this.validateIsCorrect = false;
    }, 500);
    let responseCorrect = 0;
    let responseError = 0;
    Object.keys(this.formQuestion.getRawValue()).forEach((group) => {
      const listQuestion = (this.formQuestion as any).getRawValue()[group];
      Object.keys(listQuestion).forEach((question) => {
        if (
          listQuestion[question] &&
          this.controlNameCorrect.includes(question)
        )
          responseCorrect++;
        else if (listQuestion[question])
          responseError++;

      });
    });

    if (responseCorrect >= this.controlNameCorrect.length && responseError === 0) {
      Swal.fire(
        'Felicidades haz aprobado las preguntas',
        '¡Felicitaciones! Has respondido correctamente a la mayoría de las preguntas',
        'success'
      );
      return;
    }

    Swal.fire(
      'Lo sentimos no haz aprobado las preguntas',
      `Tienes ${responseCorrect >= 0 ? responseCorrect : 0} respuestas buenas y ${responseError} respuestas incorrectas <br>
      ¡No te desanimes! Sigue practicando y mejorarás
      `,
      'error'
    );
  }

  back(){
    this.location.back();
  }
}
