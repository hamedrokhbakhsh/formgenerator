import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormGroup} from "@angular/forms";
import {animate, state, style, transition, trigger} from "@angular/animations";
import {InputComponent} from "../input/input.component";
import {MatDialog} from "@angular/material/dialog";

export interface DialogData {
  animal: string;
  name: string;
}


interface JsonFormValidators {
  min?: number;
  max?: number;
  required?: boolean;
  requiredTrue?: boolean;
  email?: boolean;
  minLength?: boolean;
  maxLength: boolean;
  pattern?: string;
  nullValidators?: boolean;
}

interface JsonFormControlOptions {
  min?: number;
  max?: number;
  required?: boolean;
  step?: string;
  icon?: string
}

interface JsonFormControls {
  name: string;
  label: string;
  value: string;
  type: string;
  class: string;
  multi?: boolean
  data?: IList[];
  options?: JsonFormControlOptions;
  required: boolean;
  validators: JsonFormValidators;
}


interface IList{
  value: string;
  label: string
}

export interface JsonFormData {
  controls: JsonFormControls;
}

@Component({
  selector: 'app-show-form',
  templateUrl: './show-form.component.html',
  styleUrls: ['./show-form.component.scss'],
  animations: [
    trigger('fadein', [
      state('in', style({
        opacity: 1
      })),
      transition('* => in', [
        animate('1s')
      ]),
    ])
  ]
})
export class ShowFormComponent implements OnInit {


  form = this._fb.group({
    name: [''],
    action: [''],
    controls: this._fb.array(
     []
    )
  })

  openDialog(): void {
    const dialogRef = this.dialog.open(InputComponent, {
      width: '550px'
    });

    dialogRef.afterClosed().subscribe(data => {
      this.addControl(data)
    })
  }
  constructor(private _fb: FormBuilder , public dialog: MatDialog) { }

  get controls(): FormArray  {
    return this.form.get('controls') as FormArray;
  }

  ngOnInit(): void {
  }
  submitted() {
    console.log(this.form.value);
  }
  newInput(data: any): FormGroup {
    return this._fb.group({
      name: [data.name],
      label: [data.label],
      value: [data.value],
      type: [data.type],
      multi: [data.multi],
      class: [data.class],
      required: [data.required],
      validators: this._fb.group({
        min: [data.validators.min],
        max: [data.validators.max],
        required: [data.validators.required],
        requiredTrue: [data.validators.requiredTrue],
        email: [data.validators.email],
        minLength: [data.validators.minLength],
        maxLength: [data.validators.maxLength],
        pattern: [data.validators.pattern],
        nullValidators: [data.validators.nullValidators]
      })
    })
  }
  addControl(data: any) {
    this.controls.push(this.newInput(data));
  }
}
