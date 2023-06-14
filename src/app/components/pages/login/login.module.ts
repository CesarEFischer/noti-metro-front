import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

import {LoginComponent} from "./login.component";
import {LoginRoutingModule} from "./login-routing.module";
import {ButtonModule} from "primeng/button";
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [
    LoginComponent,
  ],
    imports: [
        CommonModule,
        LoginRoutingModule,
        ButtonModule,
        TableModule,
    ],
  providers: [],
  exports: [
    LoginComponent,
  ],
  bootstrap: []
})

export class LoginModule { }
