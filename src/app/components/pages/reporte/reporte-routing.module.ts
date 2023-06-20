import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ReporteComponent} from "./reporte.component";

const routes: Routes = [{ path: '', component: ReporteComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReporteRoutingModule { }
