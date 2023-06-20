import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AdminService } from '../../service/admin.service';
import { HttpClient } from '@angular/common/http';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  image_size: number = 120;
  // Línea 1, Observatorio - Pantitlán
  datos_linea_1: any[] = [
    { id: 1, estacion: "Observatorio" },
    { id: 2, estacion: "Tacubaya" },
    { id: 3, estacion: "Juanacatlán" },
    { id: 4, estacion: "Chapultepec" },
    { id: 5, estacion: "Sevilla" },
    { id: 6, estacion: "Insurgentes" },
    { id: 7, estacion: "Cuauhtémoc" },
    { id: 8, estacion: "Balderas" },
    { id: 9, estacion: "Salto del Agua" },
    { id: 10, estacion: "Isabel la Católica" },
    { id: 11, estacion: "Pino Suárez" },
    { id: 12, estacion: "Merced" },
    { id: 13, estacion: "Candelaria" },
    { id: 14, estacion: "San Lázaro" },
    { id: 15, estacion: "Moctezuma" },
    { id: 16, estacion: "Balbuena" },
    { id: 17, estacion: "Boulevard Puerto Aéreo" },
    { id: 18, estacion: "Gómez Farías" },
    { id: 19, estacion: "Zaragoza" },
    { id: 20, estacion: "Pantitlán" }
  ];
// Línea 2, Cuatro Caminos - Tasqueña
datos_linea_2: any[] = [
  { id: 21, estacion: "Cuatro Caminos" },
  { id: 22, estacion: "Panteones" },
  { id: 23, estacion: "Tacuba" },
  { id: 24, estacion: "Cuitláhuac" },
  { id: 25, estacion: "Popotla" },
  { id: 26, estacion: "Colegio Militar" },
  { id: 27, estacion: "Normal" },
  { id: 28, estacion: "San Cosme" },
  { id: 29, estacion: "Revolución" },
  { id: 30, estacion: "Hidalgo" },
  { id: 31, estacion: "Bellas Artes" },
  { id: 32, estacion: "Allende" },
  { id: 33, estacion: "Zócalo" },
  { id: 34, estacion: "Pino Suárez" },
  { id: 35, estacion: "San Antonio Abad" },
  { id: 36, estacion: "Chabacano" },
  { id: 37, estacion: "Viaducto" },
  { id: 38, estacion: "Xola" },
  { id: 39, estacion: "Villa de Cortés" },
  { id: 40, estacion: "Nativitas" },
  { id: 41, estacion: "Portales" },
  { id: 42, estacion: "Ermita" },
  { id: 43, estacion: "General Anaya" },
  { id: 44, estacion: "Tasqueña" }
];



// Línea 3, Indios Verdes - Universidad
datos_linea_3: any[] = [
  { id: 45, estacion: "Indios Verdes" },
  { id: 46, estacion: "Deportivo 18 de Marzo" },
  { id: 47, estacion: "Potrero" },
  { id: 48, estacion: "La Raza" },
  { id: 49, estacion: "Tlatelolco" },
  { id: 50, estacion: "Guerrero" },
  { id: 51, estacion: "Hidalgo" },
  { id: 52, estacion: "Juárez" },
  { id: 53, estacion: "Balderas" },
  { id: 54, estacion: "Niños Héroes" },
  { id: 55, estacion: "Hospital General" },
  { id: 56, estacion: "Centro Médico" },
  { id: 57, estacion: "Etiopía/Plaza de la Transparencia" },
  { id: 58, estacion: "Eugenia" },
  { id: 59, estacion: "División del Norte" },
  { id: 60, estacion: "Zapata" },
  { id: 61, estacion: "Coyoacán" },
  { id: 62, estacion: "Viveros/Derechos Humanos" },
  { id: 63, estacion: "Miguel Ángel de Quevedo" },
  { id: 64, estacion: "Copilco" },
  { id: 65, estacion: "Universidad" }
];

// Línea 4, Martín Carrera - Santa Anita
datos_linea_4: any[] = [
  { id: 66, estacion: "Martín Carrera" },
  { id: 67, estacion: "Talismán" },
  { id: 68, estacion: "Bondojito" },
  { id: 69, estacion: "Consulado" },
  { id: 70, estacion: "Canal del Norte" },
  { id: 71, estacion: "Morelos" },
  { id: 72, estacion: "Candelaria" },
  { id: 73, estacion: "Fray Servando" },
  { id: 74, estacion: "Jamaica" },
  { id: 75, estacion: "Santa Anita" }
];

// Línea 5, Politécnico - Pantitlán
datos_linea_5: any[] = [
  { id: 76, estacion: "Politécnico" },
  { id: 77, estacion: "Instituto del Petróleo" },
  { id: 78, estacion: "Autobuses del Norte" },
  { id: 79, estacion: "La Raza" },
  { id: 80, estacion: "Misterios" },
  { id: 81, estacion: "Valle Gómez" },
  { id: 82, estacion: "Consulado" },
  { id: 83, estacion: "Eduardo Molina" },
  { id: 84, estacion: "Aragón" },
  { id: 85, estacion: "Oceanía" },
  { id: 86, estacion: "Terminal Aérea" },
  { id: 87, estacion: "Hangares" },
  { id: 88, estacion: "Pantitlán" }
];

// Línea 6, El Rosario - Martín Carrera
datos_linea_6: any[] = [
  { id: 89, estacion: "El Rosario" },
  { id: 90, estacion: "Tezozómoc" },
  { id: 91, estacion: "Azcapotzalco" },
  { id: 92, estacion: "Ferrería/Arena Ciudad de México" },
  { id: 93, estacion: "Norte 45" },
  { id: 94, estacion: "Vallejo" },
  { id: 95, estacion: "Instituto del Petróleo" },
  { id: 96, estacion: "Lindavista" },
  { id: 97, estacion: "Deportivo 18 de Marzo" },
  { id: 98, estacion: "La Villa-Basílica" },
  { id: 99, estacion: "Martín Carrera" }
];

// Línea 7, El Rosario - Barranca del Muerto
datos_linea_7: any[] = [
  { id: 100, estacion: "El Rosario" },
  { id: 101, estacion: "Aquiles Serdán" },
  { id: 102, estacion: "Camarones" },
  { id: 103, estacion: "Refinería" },
  { id: 104, estacion: "Tacuba" },
  { id: 105, estacion: "San Joaquín" },
  { id: 106, estacion: "Polanco" },
  { id: 107, estacion: "Auditorio" },
  { id: 108, estacion: "Constituyentes" },
  { id: 109, estacion: "Tacubaya" },
  { id: 110, estacion: "San Pedro de los Pinos" },
  { id: 111, estacion: "San Antonio" },
  { id: 112, estacion: "Mixcoac" },
  { id: 113, estacion: "Barranca del Muerto" }
];  

// Línea 8, Garibaldi - Constitución de 1917
datos_linea_8: any[] = [
  { id: 114, estacion: "Garibaldi" },
  { id: 115, estacion: "Bellas Artes" },
  { id: 116, estacion: "San Juan de Letrán" },
  { id: 117, estacion: "Salto del Agua" },
  { id: 118, estacion: "Doctores" },
  { id: 119, estacion: "Obrera" },
  { id: 120, estacion: "Chabacano" },
  { id: 121, estacion: "La Viga" },
  { id: 122, estacion: "Santa Anita" },
  { id: 123, estacion: "Coyuya" },
  { id: 124, estacion: "Iztacalco" },
  { id: 125, estacion: "Apatlaco" },
  { id: 126, estacion: "Aculco" },
  { id: 127, estacion: "Escuadrón 201" },
  { id: 128, estacion: "Atlalilco" },
  { id: 129, estacion: "Iztapalapa" },
  { id: 130, estacion: "Cerro de la Estrella" },
  { id: 131, estacion: "UAM-I" },
  { id: 132, estacion: "Constitución de 1917" }
];

// Línea 9, Tacubaya - Pantitlán
datos_linea_9: any[] = [
  { id: 133, estacion: "Tacubaya" },
  { id: 134, estacion: "Patriotismo" },
  { id: 135, estacion: "Chilpancingo" },
  { id: 136, estacion: "Centro Médico" },
  { id: 137, estacion: "Lázaro Cárdenas" },
  { id: 138, estacion: "Chabacano" },
  { id: 139, estacion: "Jamaica" },
  { id: 140, estacion: "Mixiuhca" },
  { id: 141, estacion: "Velódromo" },
  { id: 142, estacion: "Ciudad Deportiva" },
  { id: 143, estacion: "Puebla" },
  { id: 144, estacion: "Pantitlán" }
];

// Línea A, Pantitlán - La Paz
datos_linea_a: any[] = [
  { id: 145, estacion: "Pantitlán" },
  { id: 146, estacion: "Agrícola Oriental" },
  { id: 147, estacion: "Canal de San Juan" },
  { id: 148, estacion: "Tepalcates" },
  { id: 149, estacion: "Guelatao" },
  { id: 150, estacion: "Peñón Viejo" },
  { id: 151, estacion: "Acatitla" },
  { id: 152, estacion: "Santa Martha" },
  { id: 153, estacion: "Los Reyes" },
  { id: 154, estacion: "La Paz" }
];

// Línea B, Buenavista - Ciudad Azteca
datos_linea_b: any[] = [
  { id: 155, estacion: "Buenavista" },
  { id: 156, estacion: "Guerrero" },
  { id: 157, estacion: "Garibaldi" },
  { id: 158, estacion: "Lagunilla" },
  { id: 159, estacion: "Tepito" },
  { id: 160, estacion: "Morelos" },
  { id: 161, estacion: "San Lázaro" },
  { id: 162, estacion: "Ricardo Flores Magón" },
  { id: 163, estacion: "Romero Rubio" },
  { id: 164, estacion: "Oceanía" },
  { id: 165, estacion: "Deportivo Oceanía" },
  { id: 166, estacion: "Bosque de Aragón" },
  { id: 167, estacion: "Villa de Aragón" },
  { id: 168, estacion: "Nezahualcóyotl" },
  { id: 169, estacion: "Impulsora" },
  { id: 170, estacion: "Río de los Remedios" },
  { id: 171, estacion: "Muzquiz" },
  { id: 172, estacion: "Ecatepec" },
  { id: 173, estacion: "Olímpica" },
  { id: 174, estacion: "Plaza Aragón" },
  { id: 175, estacion: "Ciudad Azteca" }
];

// Línea 12, Mixcoac - Tláhuac
datos_linea_12: any[] = [
  { id: 176, estacion: "Mixcoac" },
  { id: 177, estacion: "Insurgentes Sur" },
  { id: 178, estacion: "Hospital 20 de Noviembre" },
  { id: 179, estacion: "Zapata" },
  { id: 180, estacion: "Parque de los Venados" },
  { id: 181, estacion: "Eje Central" },
  { id: 182, estacion: "Ermita" },
  { id: 183, estacion: "Mexicaltzingo" },
  { id: 184, estacion: "Atlalilco" },
  { id: 185, estacion: "Culhuacán" },
  { id: 186, estacion: "San Andrés Tomatlán" },
  { id: 187, estacion: "Lomas Estrella" },
  { id: 188, estacion: "Calle 11" },
  { id: 189, estacion: "Periférico Oriente" },
  { id: 190, estacion: "Tezonco" },
  { id: 191, estacion: "Olivos" },
  { id: 192, estacion: "Nopalera" },
  { id: 193, estacion: "Zapotitlán" },
  { id: 194, estacion: "Tlaltenco" },
  { id: 195, estacion: "Tláhuac" }
];
ngOnInit() {
  this.selectedOption = null; // o asignar un valor inicial adecuado
}


selectedReport :any;

  adminsData:any[]=[];
  nuevoadmin:any[]=[];
  cols: any[] = [];
  apellido_paterno: string ='';
  apellido_materno: string ='';
  tiempo: number =0;
  correo: string ='';
  contrasena: string ='';
  numLinea: any;
  dato:any;
  selectedOption: any; // Variable para almacenar el valor seleccionado
  tipoReporte = 0;
  id_estacion :any;
  total_reportes :number=0;
  tiempo_total:number=0;


  constructor(private modalService: NgbModal, private adminService: AdminService) {}
  openModal(content: any) {
    this.modalService.open(content);
  }
  valorLinea(numero: any){
this.numLinea = numero;
  }
  

  obtenerOpcionesPorLinea(): any[] {
    // Aquí puedes implementar la lógica para obtener las opciones por línea
    // Por ejemplo:
    if (this.numLinea === 1) {
      return this.datos_linea_1;
    } else if (this.numLinea === 2) {
      return this.datos_linea_2;
    }else if (this.numLinea === 3) {
      return this.datos_linea_3;
    }else if (this.numLinea === 4) {
      return this.datos_linea_4;
    }else if (this.numLinea === 5) {
      return this.datos_linea_5;
    } else if (this.numLinea === 6) {
      return this.datos_linea_6;
    } else if (this.numLinea === 7) {
      return this.datos_linea_7;
    } else if (this.numLinea === 8) {
      return this.datos_linea_8;
    } else if (this.numLinea === 9) {
      return this.datos_linea_9;
    } else if (this.numLinea === 'A') {
      return this.datos_linea_a;
    } else if (this.numLinea === 'B') {
      return this.datos_linea_b;
    } else if (this.numLinea === 12) {
      return this.datos_linea_12;
    } 

    else {
      return [];
    }
  }
  Reportar(){
    
    if(this.selectedReport=="Falla tecnica"){
      this.tipoReporte = 1;
    }else {this.tipoReporte=2}
    const reportData = {
      id_estacion: this.selectedOption,
      tiempo: this.tiempo,
      status: 1,
      tipo_reporte:this.tipoReporte
      

    };
    this.adminService.nuevoReporte(reportData as any).then((data: any) => {
      alert('¡Se ha reportado con éxito!');

      this.modalService.dismissAll;
      
      
     
    })
    .catch((error) => {
      alert('¡Algo ha salido mal!');
      console.error('Error al Insertar el Reporte:', error);
      this.modalService.dismissAll;
    });


    


  }
  datosAfluencia(){
    const opcion ={
      id_estacion:this.selectedOption
    };
    
    this.adminService.getAfluencia(opcion).then((data: any) => {
      this.tiempo_total=data.data;

      this.modalService.dismissAll;
      
      
     
    })
    .catch((error) => {
      alert('¡Algo ha salido mal!');
      console.error('Error al verificar la afluencia:', error);
      this.modalService.dismissAll;
    });
  }


}
