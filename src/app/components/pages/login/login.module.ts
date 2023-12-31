import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

import {LoginComponent} from "./login.component";
import {LoginRoutingModule} from "./login-routing.module";
import {ButtonModule} from "primeng/button";
import {TableModule } from 'primeng/table';
import {InputTextModule} from "primeng/inputtext";
import {FormsModule} from "@angular/forms";
import {ToastModule} from "primeng/toast";
import {PasswordModule} from "primeng/password";

@NgModule({
  declarations: [
    LoginComponent,
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ButtonModule,
    TableModule,
    InputTextModule,
    FormsModule,
    ToastModule,
    PasswordModule,
  ],
  providers: [],
  exports: [
    LoginComponent,
  ],
  bootstrap: []
})

export class LoginModule { }
