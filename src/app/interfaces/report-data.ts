// Esta interfáz contendrá solo algunos elementos de los datos listados
// en el backend: database/migrations/2023_05_30_230453_create_reportes_table.php
export interface ReportData {
	linea: string,
	hora: string,
	titulo: string,
	descripcion: string
}
