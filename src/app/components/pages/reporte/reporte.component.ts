import {Component, OnInit} from '@angular/core';
import {PrimeNGConfig, MessageService, Message, ConfirmationService} from 'primeng/api';

@Component({
  selector: 'app-reporte',
  templateUrl: './reporte.component.html',
  styleUrls: ['./reporte.component.css'],
  providers: [MessageService, ConfirmationService ]
})
export class ReporteComponent implements OnInit{

  constructor(private messageService: MessageService) {
  }

  lineas: any[] =[{label: 'Linea A', value: 9},
                  {label: 'Linea 9', value: 9},];
  estaciones: any[] = [{label: 'Pantitlan', value: 1},{label: 'Puebla', value: 2},{label: 'CD.Deportiva', value: 3},];
  tipoReporte: any[] =[{label: 'Falla técnica', value: 1},{label: 'Afluencia máxima', value: 2},];
  tiempo: any;

  ngOnInit() {
   }

   imprimeMensaje(){
     this.messageService.add({key:"success", severity: 'success', summary: 'Correcto', detail: "La linea ha sido generada con éxito"});
   }

}
