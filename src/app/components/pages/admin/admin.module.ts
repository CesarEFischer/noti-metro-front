import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

import {AdminComponent} from "./admin.component";
import {AdminRoutingModule} from "./admin-routing.module";
import {ButtonModule} from "primeng/button";
import {TableModule } from 'primeng/table';
import {InputTextModule} from "primeng/inputtext";
import { FormsModule } from '@angular/forms';

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
    FormsModule,
  ],
  providers: [],
  exports: [
    AdminComponent,
  ],
  bootstrap: []
})

export class AdminModule { }
