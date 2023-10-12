import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import Swal from 'sweetalert2';

import { LIST_DRAG_SECURITY } from '../../constant/question.constant';
import { DragQuestionComponent } from '../drag-question/drag-question.component';

@Component({
  selector: 'app-security-question',
  templateUrl: './security-question.component.html',
  styleUrls: ['./security-question.component.scss'],
})
export class SecurityQuestionComponent implements OnInit {
  @ViewChild(DragQuestionComponent) dragComponent!: DragQuestionComponent

  LIST_DRAG_SECURITY = [...LIST_DRAG_SECURITY];

  constructor(private readonly router: Router) { }

  ngOnInit(): void { }

  validateAnswers(): void {
    this.dragComponent.validateResponse()

    const validation: Record<string, boolean> = {
      question1: this.validateArray(0),
      question2: this.validateArray(1),
      question3: this.validateArray(2),
      question4: this.validateArray(3),
      question5: this.validateArray(4),
    };

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

    const subject1 = this.countResponse(0)
    const subject2 = this.countResponse(1)
    const subject3 = this.countResponse(2)
    const subject4 = this.countResponse(3)
    const subject5 = this.countResponse(4)

    Swal.fire(
      'Lo sentimos no haz aprobado el cuestionario',
      `Aun hay respuestas incorrectas.<br/>
      <ul style='text-align: start'>
        <li>Tema 1: tienes ${subject1[0]} correctas y ${subject1[1]} incorrectas.</li>
        <li>Tema 2: tienes ${subject2[0]} correctas y ${subject2[1]} incorrectas.</li>
        <li>Tema 3: tienes ${subject3[0]} correctas y ${subject3[1]} incorrectas.</li>
        <li>Tema 4: tienes ${subject4[0]} correctas y ${subject4[1]} incorrectas.</li>
        <li>Tema 5: tienes ${subject5[0]} correctas y ${subject5[1]} incorrectas.</li>
      </ul>
      ¡No te desanimes! Sigue practicando y mejorarás`,
      'error'
    );
  }

  private validateArray(index: number): boolean {
    return this.LIST_DRAG_SECURITY[index].orderList.question.some(
      (question, indQ) =>
        this.LIST_DRAG_SECURITY[index].orderList.response[indQ] === question
    );
  }

  private countResponse(index: number): [number, number] {
    let correct: number = 0
    let error: number = 0;

    const LIST_DRAG = this.LIST_DRAG_SECURITY[index].orderList
    LIST_DRAG.question.forEach((question, index) => {
      if (LIST_DRAG.response[index] === question) correct++;
      else error++;
    })
    return [correct, error]
  }
}
