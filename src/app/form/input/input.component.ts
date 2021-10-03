import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {DialogData} from "../show-form/show-form.component";
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {



  form = this._fb.group({
    name: ['' ],
    label: ['' ],
    value: [''],
    type: ['' ],
    multi: ['' ],
    class: [''],
    required: [''],
    validators: this._fb.group({
      min: [''],
      max: [''],
      required: [''],
      requiredTrue: [''],
      email: [''],
      minLength: [''],
      maxLength: [''],
      pattern: [''],
      nullValidators: ['']
    })

  })
  constructor(
    private _fb: FormBuilder,
    public dialogRef: MatDialogRef<InputComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}
  onNoClick(): void {
    this.dialogRef.close();
  }
  submit() {
    this.dialogRef.close(this.form.value);
  }
}
