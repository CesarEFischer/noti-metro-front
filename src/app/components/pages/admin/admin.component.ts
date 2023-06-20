import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AdminService } from '../../service/admin.service';

 


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent{
 


  adminsData:any[]=[];
  cols: any[] = [];


  constructor(private http: HttpClient,private adminService: AdminService,) {}

  ngOnInit() {
    this.cols = [
      { field: 'id', header: 'ID' },
      { field: 'nombre', header: 'Nombre' },
      { field: 'correo', header: 'Correo' }
      
    ];
    this.getAdminsData();
  }

  getAdminsData() {
    this.adminService.getAdmins()
      .then((data: any) => {
        this.adminsData = data.result ? (Array.isArray(data.data) ? data.data : []) : [];
        console.log('Datos de administradores:', this.adminsData);
      })
      .catch((error) => {
        console.error('Error al obtener los administradores:', error);
      });
  }
}
