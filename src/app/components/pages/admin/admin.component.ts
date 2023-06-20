import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AdminService } from '../../service/admin.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';


 


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent{
 


  adminsData:any[]=[];
  nuevoadmin:any[]=[];
  cols: any[] = [];
  apellido_paterno: string ='';
  apellido_materno: string ='';
  nombre: string ='';
  correo: string ='';
  contrasena: string ='';


  constructor(private http: HttpClient,
    private adminService: AdminService,
    private modalService: NgbModal,) {}

  ngOnInit() {
    this.cols = [
      { field: 'id', header: 'ID' },
      { field: 'nombre', header: 'Nombre' },
      { field: 'correo', header: 'Correo' },
      { field: 'Fecha_Alta', header: 'Fecha_Alta' }
      
    ];
    this.getAdminsData();
  }

  getAdminsData() {
    this.adminService.getAdmins()
      .then((data: any) => {
        this.adminsData = data.result ? (Array.isArray(data.data) ? data.data : []) : [];
      })
      .catch((error) => {
        console.error('Error al obtener los administradores:', error);
      });
  }

  openModal(content: any) {
    this.modalService.open(content);
  }

  confirmar(){
    const adminData = {
      apellido_paterno: this.apellido_paterno,
      apellido_materno: this.apellido_materno,
      nombre: this.nombre,
      correo: this.correo,
      contrasena: this.contrasena
    };
    this.adminService.nuevoAdmin(adminData as any).then((data: any) => {
      this.modalService.dismissAll;
      
     
    })
    .catch((error) => {
      console.error('Error al obtener Insertar al Usuario:', error);
      this.modalService.dismissAll;
    });


    


  }
}
