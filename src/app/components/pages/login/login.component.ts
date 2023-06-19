import { Component, OnInit } from '@angular/core';
import {AdminService} from "../../service/admin.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  constructor(
    private adminService: AdminService,
  ) {
  }


  async ngOnInit(){
    const a = (await this.adminService.getAdmins());
    console.log(a);
  }







}
