import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

import {TableLineasComponent} from "./tableLineas.component";
import {TableLineasRoutingModule} from "./tableLineas-routing.module";
import {ButtonModule} from "primeng/button";
import {TableModule } from 'primeng/table';
import {InputTextModule} from "primeng/inputtext";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    TableLineasComponent,
  ],
  imports: [
    CommonModule,
    TableLineasRoutingModule,
    ButtonModule,
    TableModule,
    InputTextModule,
    FormsModule,
  ],
  providers: [],
  exports: [
    TableLineasComponent,
  ],
  bootstrap: []
})

export class TableLineasModule { }
