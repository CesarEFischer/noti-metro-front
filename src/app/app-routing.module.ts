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
  {
    path: "admin",
    loadChildren: () =>
      import("./components/pages/admin/admin.module").then(
        (m) => m.AdminModule
      ),
  },
  {
    path: "lineas",
    loadChildren: () =>
      import("./components/pages/tableLineas/tableLineas.module").then(
        (m) => m.TableLineasModule
      ),
  },
  {
    path: "menu",
    loadChildren: () =>
      import("./components/pages/menu/menu.module").then(
        (m) => m.menuModule
      ),
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
