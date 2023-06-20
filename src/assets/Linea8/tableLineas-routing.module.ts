import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TableLineasComponent} from "./tableLineas.component";

const routes: Routes = [{ path: '', component: TableLineasComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TableLineasRoutingModule { }
