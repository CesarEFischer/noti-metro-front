import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

import {RegisterComponent} from "./register.component";
import {RegisterRoutingModule} from "./register-routing.module";

import {ButtonModule} from "primeng/button";
import {TableModule } from 'primeng/table';
import {InputTextModule} from "primeng/inputtext";
import {FormsModule} from "@angular/forms";
import {RadioButtonModule} from "primeng/radiobutton";
import {DialogModule} from "primeng/dialog";
import {CheckboxModule} from "primeng/checkbox";
import {ToastModule} from "primeng/toast";
import {ImageModule} from "primeng/image";


@NgModule({
  declarations: [
    RegisterComponent,
  ],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    ButtonModule,
    TableModule,
    InputTextModule,
    FormsModule,
    RadioButtonModule,
    DialogModule,
    CheckboxModule,
    ToastModule,
    ImageModule,
  ],
  providers: [],
  exports: [
    RegisterComponent,
  ],
  bootstrap: []
})

export class RegisterModule { }
