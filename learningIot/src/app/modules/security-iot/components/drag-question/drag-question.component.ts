import { Component, Input, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { OrderList } from '../../interfaces/question.interface';

@Component({
  selector: 'app-drag-question',
  templateUrl: './drag-question.component.html',
  styleUrls: ['./drag-question.component.scss'],
})
export class DragQuestionComponent implements OnInit {
  @Input() title: string = '';

  @Input() orderList!: OrderList;

  @Input() isFirstLoad: boolean = false;

  constructor() { }

  ngOnInit(): void { }

  onDrop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.orderList.question, event.previousIndex, event.currentIndex);
  }
}
