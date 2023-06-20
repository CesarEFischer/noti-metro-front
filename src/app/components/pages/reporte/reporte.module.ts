import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

import {ReporteComponent} from "./reporte.component";
import {ReporteRoutingModule} from "./reporte-routing.module";

import {ButtonModule} from "primeng/button";
import {TableModule } from 'primeng/table';
import {InputTextModule} from "primeng/inputtext";
import {DropdownModule} from "primeng/dropdown";
import {DialogModule} from "primeng/dialog";
import {ToastModule} from "primeng/toast";

@NgModule({
  declarations: [
    ReporteComponent,
  ],
  imports: [
    CommonModule,
    ReporteRoutingModule,
    ButtonModule,
    TableModule,
    InputTextModule,
    DropdownModule,
    DialogModule,
    ToastModule,
  ],
  providers: [],
  exports: [
    ReporteComponent,
  ],
  bootstrap: []
})

export class ReporteModule { }
