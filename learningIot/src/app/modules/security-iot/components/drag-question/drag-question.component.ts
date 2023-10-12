import { Component, Input } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { OrderList } from '../../interfaces/question.interface';

@Component({
  selector: 'app-drag-question',
  templateUrl: './drag-question.component.html',
  styleUrls: ['./drag-question.component.scss'],
})
export class DragQuestionComponent {
  @Input() title: string = '';

  @Input() orderList!: OrderList;

  responseCorrect: Record<string, boolean> = {};

  constructor() { }

  onDrop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.orderList.question, event.previousIndex, event.currentIndex);
  }

  validateResponse(): void {
    this.responseCorrect = {}
    const filterCorrect = this.orderList.question.filter((question, index) => this.orderList.response[index] === question)
    filterCorrect.forEach(correct => {
      this.responseCorrect[correct] = true
    })
  }
}
