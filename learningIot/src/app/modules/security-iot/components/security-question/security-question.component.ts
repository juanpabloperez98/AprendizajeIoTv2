import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import Swal from 'sweetalert2';

import { LIST_DRAG_SECURITY } from '../../constant/question.constant';

@Component({
  selector: 'app-security-question',
  templateUrl: './security-question.component.html',
  styleUrls: ['./security-question.component.scss'],
})
export class SecurityQuestionComponent implements OnInit {
  LIST_DRAG_SECURITY = [...LIST_DRAG_SECURITY];

  constructor(private readonly router: Router) {}

  ngOnInit(): void {}

  validateAnswers(): void {
    const validation: Record<string, boolean> = {
      question1: this.validateArray(0),
      question2: this.validateArray(1),
      question3: this.validateArray(2),
      question4: this.validateArray(3),
      question5: this.validateArray(4),
    };

    console.log(validation);

    if (Object.values(validation).every((question) => question)) {
      Swal.fire(
        'Felicidades haz aprobado las preguntas',
        '¡Felicitaciones! Has respondido correctamente a la mayoría de las preguntas',
        'success'
      ).then((result) => {
        if (result.isConfirmed) {
          this.router.navigate(['/security']);
        }
      });
      return;
    }
    Swal.fire(
      'Lo sentimos no haz aprobado el cuestionario',
      `Aun hay respuestas incorrectas.
        ¡No te desanimes! Sigue practicando y mejorarás
        `,
      'error'
    );
  }

  private validateArray(index: number): boolean {
    return this.LIST_DRAG_SECURITY[index].orderList.question.some(
      (question, indQ) =>
        this.LIST_DRAG_SECURITY[index].orderList.response[indQ] === question
    );
  }
}
