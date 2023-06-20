import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { RegisterComponent } from './components/pages/register/register.component';

const routes: Routes = [
  {
    path: "login",
    loadChildren: () =>
      import("./components/pages/login/login.module").then(
        (m) => m.LoginModule
      ),
  },
  {
    path: "register",
    loadChildren: () =>
      import("./components/pages/register/register.module").then(
        (m) => m.RegisterModule
      ),
  },
  {
    path: "main",
    component: MainPageComponent
  },
  {
    path: "reports",
    loadChildren: () => 
      import("./components/pages/report-table/report-table-routing.module").then(
        (m) => m.ReportTableRoutingModule
      )
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
