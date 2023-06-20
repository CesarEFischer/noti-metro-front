import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

import {AdminComponent} from "./admin.component";
import {AdminRoutingModule} from "./admin-routing.module";
import {ButtonModule} from "primeng/button";
import {TableModule } from 'primeng/table';
import {InputTextModule} from "primeng/inputtext";

@NgModule({
  declarations: [
    AdminComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ButtonModule,
    TableModule,
    InputTextModule,
  ],
  providers: [],
  exports: [
    AdminComponent,
  ],
  bootstrap: []
})

export class AdminModule { }
