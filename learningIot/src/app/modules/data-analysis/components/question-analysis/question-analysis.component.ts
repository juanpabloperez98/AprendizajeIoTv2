import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { QUESTION_DATA } from '../../constant/question.constant';
import Swal from 'sweetalert2';

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

  constructor(private readonly formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formQuestion = this.formBuilder.group({});
  }

  validateAnswers(): void {
    let responseCorrect = 0;
    let responseError = 0;
    Object.keys(this.formQuestion.value).forEach((group) => {
      const listQuestion = (this.formQuestion as any).value[group];
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

    if (responseError <= 0) {
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
}
