import { Component, OnInit } from '@angular/core';
import {AdminService} from "../../service/admin.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  private adminService: AdminService | undefined;

  constructor( adminService: AdminService ) {}

  async ngOnInit(){
    let a = (await this.adminService?.getAdmins());
    console.log(`a is... ${a}`);
  }


}
