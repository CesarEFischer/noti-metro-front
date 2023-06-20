import { Component, OnInit } from '@angular/core';
import {AdminService} from "../../service/admin.service";
import {RegisterService} from "../../service/register.service";
import {ConfirmationService, MessageService} from "primeng/api";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [MessageService, ConfirmationService ]
})
export class LoginComponent implements OnInit{

  constructor(
    private adminService: AdminService,
    private userService: RegisterService,
    private messageService: MessageService,
    private router: Router
  ) {
  }

  correo: any;
  contrasena: any;


  async ngOnInit(){

  }

  async logIn(){
    try{
      const data = {email: this.correo, contrasena: this.contrasena };
      const rol: any = (await this.adminService.getRol(data));
      const result = (rol.result == 0) ? (await this.userService.logIn(data)) : (await this.adminService.logIn(data));
      // @ts-ignore
      if(result?.result)
        this.router.navigateByUrl('/home');

    }catch (e) {
      const error: any = e;
      console.log(e);
      this.messageService.add({ key: 'success', severity: 'error', summary: 'Error', detail: error.error.message ? error.error.message : 'Error al iniciar sesión' });

    }
  }







}
