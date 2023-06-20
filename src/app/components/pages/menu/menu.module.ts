import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

import {MenuComponent} from "./menu.component";
import {menuRoutingModule} from "./menu-routing.module";
import {ButtonModule} from "primeng/button";
import {TableModule } from 'primeng/table';
import {InputTextModule} from "primeng/inputtext";
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MenuComponent,
  ],
  imports: [
    CommonModule,
    menuRoutingModule,
    ButtonModule,
    TableModule,
    InputTextModule,
    FormsModule,
  ],
  providers: [],
  exports: [
    MenuComponent,
  ],
  bootstrap: []
})

export class menuModule { }
