import { Component, Input, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormGroupDirective,
} from '@angular/forms';
import { ListQuestion } from '../../interfaces/question.interface';

@Component({
  selector: 'app-card-question',
  templateUrl: './card-question.component.html',
  styleUrls: ['./card-question.component.scss'],
})
export class CardQuestionComponent implements OnInit {
  @Input() id: number = 0;

  @Input() titleQuestion: string = '';

  @Input() listQuestion: ListQuestion[] = [];

  @Input('validateQuestion') set changeValidateQuestion(newValidateQuestion: boolean) {
    if (newValidateQuestion) this.onValidateQuestion()
  }

  formCard!: FormGroup;

  isCorrect: boolean = false;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly rootFormGroup: FormGroupDirective
  ) { }

  ngOnInit(): void {
    this.FormGroupInit();
  }

  private FormGroupInit(): void {
    this.formCard = this.formBuilder.group(
      this.listQuestion
        .map((question) => ({
          [question.control]: new FormControl(),
        }))
        .reduce((result, currentObject) => {
          return Object.assign(result, currentObject);
        }, {})
    );

    this.rootFormGroup.form.addControl(String(this.id), this.formCard);
  }

  private onValidateQuestion(): void {
    this.isCorrect = this.listQuestion.map(question => {
      if (!!this.formCard.getRawValue()[question.control] && question.isTrue) this.formCard.get(question.control)?.disable()
      return question
    }).every(question =>
      !!this.formCard.getRawValue()[question.control] === !!question.isTrue
    )
  }
}
