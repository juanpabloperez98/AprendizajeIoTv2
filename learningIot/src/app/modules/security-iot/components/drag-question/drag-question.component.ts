import { Component, Input, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-drag-question',
  templateUrl: './drag-question.component.html',
  styleUrls: ['./drag-question.component.scss'],
})
export class DragQuestionComponent implements OnInit {
  @Input() title: string = '';

  @Input() questions: string[] = [];

  constructor() {}

  ngOnInit(): void {}

  onDrop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.questions, event.previousIndex, event.currentIndex);
  }
}
