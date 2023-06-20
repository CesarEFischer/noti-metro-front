import { Component } from '@angular/core';
import { ReportData } from 'src/app/interfaces/report-data';

@Component({
  selector: 'app-report-table',
  templateUrl: './report-table.component.html',
  styleUrls: ['./report-table.component.css']
})
export class ReportTableComponent {
  user_reports: ReportData[] = [
    {
      linea: "Linea A",
      hora: "2:00",
      descripcion: "problema en algo...",
      titulo: "Problema en línea A"
    },
    {
      linea: "Linea B",
      hora: "2:15",
      descripcion: "problema en algo más...",
      titulo: "Problema en línea B"
    },
    {
      linea: "Linea 5",
      hora: "1:15",
      descripcion: "Otro problema...",
      titulo: "Arbol caído"
    }
  ];
}
