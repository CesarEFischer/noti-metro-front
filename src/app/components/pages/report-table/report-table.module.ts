import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

import {ReportTableComponent} from "./report-table.component";
import {ReportTableRoutingModule} from "./report-table-routing.module";

import {ButtonModule} from "primeng/button";
import {TableModule } from 'primeng/table';
import {InputTextModule} from "primeng/inputtext";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    ReportTableModule,
  ],
  imports: [
    CommonModule,
    ReportTableRoutingModule,
    ButtonModule,
    TableModule,
    InputTextModule,
    FormsModule,
  ],
  providers: [],
  exports: [
    ReportTableModule,
  ],
  bootstrap: []
})

export class ReportTableModule { }
