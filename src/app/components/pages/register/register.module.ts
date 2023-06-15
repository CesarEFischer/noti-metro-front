import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

import {RegisterComponent} from "./register.component";
import {RegisterRoutingModule} from "./register-routing.module";

import {ButtonModule} from "primeng/button";
import {TableModule } from 'primeng/table';
import {InputTextModule} from "primeng/inputtext";
import {FormsModule} from "@angular/forms";

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
  ],
  providers: [],
  exports: [
    RegisterComponent,
  ],
  bootstrap: []
})

export class RegisterModule { }
