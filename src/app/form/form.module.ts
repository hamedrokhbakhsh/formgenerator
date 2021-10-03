import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowFormComponent } from './show-form/show-form.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import { InputComponent } from './input/input.component';
import {MatDialogModule} from "@angular/material/dialog";



@NgModule({
  declarations: [
    ShowFormComponent,
    InputComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    MatDialogModule
  ],
  exports: [
    ShowFormComponent
  ]
})
export class FormModule { }
