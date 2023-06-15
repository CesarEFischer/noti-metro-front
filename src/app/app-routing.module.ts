import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
