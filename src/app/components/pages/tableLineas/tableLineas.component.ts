import { Component } from '@angular/core';

@Component({
  selector: 'app-tableLineas',
  templateUrl: './tableLineas.component.html',
  styleUrls: ['./tableLineas.component.css']
})
export class TableLineasComponent {
  lineas = [
    {
      nombre: 'Pantitlán',
      imagen: 'assets/Linea1/pantitlan.png'
    },
    {
      nombre: 'Zaragoza',
      imagen: 'assets/Linea1/zaragoza.png'
    },
    {
      nombre: 'Balbuena',
      imagen: 'assets/Linea1/balbuena.png'
    },
    {
      nombre: 'Balderas',
      imagen: 'assets/Linea1/balderas.png'
    },
    {
      nombre: 'Boulevard Puerto Aéreo',
      imagen: 'assets/Linea1/blvdptaereo.png'
    },
    {
      nombre: 'Candelaria',
      imagen: 'assets/Linea1/candelaria.png'
    },
    {
      nombre: 'Chapultepec',
      imagen: 'assets/Linea1/chapultepec.png'
    },
    {
      nombre: 'Cuauhtemoc',
      imagen: 'assets/Linea1/cuahutemoc.png'
    },
    {
      nombre: 'Insurgentes',
      imagen: 'assets/Linea1/insurgentes.png'
    },
    {
      nombre: 'Isabel la católica',
      imagen: 'assets/Linea1/isabel.png'
    },
    {
      nombre: 'Merced',
      imagen: 'assets/Linea1/merced.png'
    },
    {
      nombre: 'Moctezuma',
      imagen: 'assets/Linea1/moctezuma.png'
    },
    {
      nombre: 'Observatorio',
      imagen: 'assets/Linea1/observatorio.png'
    },
    {
      nombre: 'Pino Suárez',
      imagen: 'assets/Linea1/pinosuarez.png'
    },
    {
      nombre: 'Salto del agua',
      imagen: 'assets/Linea1/saltodelagua.png'
    },
    {
      nombre: 'San Lázaro',
      imagen: 'assets/Linea1/sanlazaro.png'
    },
    {
      nombre: 'Tacubaya',
      imagen: 'assets/Linea1/tacubaya.png'
    },
    {
      nombre: 'Bellas artes',
      imagen: 'assets/Linea2/bellasartes.png'
    },
    {
      nombre: 'Chabacano',
      imagen: 'assets/Linea2/chabacano.png'
    },
    {
      nombre: 'Colegio militar',
      imagen: 'assets/Linea2/colegio-militar.png'
    },
    {
      nombre: 'Cuatro caminos',
      imagen: 'assets/Linea2/cuatrocaminos.png'
    },
    {
      nombre: 'Cuitlahuac',
      imagen: 'assets/Linea2/cuitlahuac.png'
    },
    {
      nombre: 'Ermita',
      imagen: 'assets/Linea2/ermita.png'
    },
    {
      nombre: 'General Anaya',
      imagen: 'assets/Linea2/generalanaya.png'
    },
    {
      nombre: 'Hidalgo',
      imagen: 'assets/Linea2/hidalgo.png'
    },
    {
      nombre: 'Nativitas',
      imagen: 'assets/Linea2/nativitas.png'
    },
    {
      nombre: 'Panteones',
      imagen: 'assets/Linea2/pantenones.png'
    },
    {
      nombre: 'Popotla',
      imagen: 'assets/Linea2/popotla.png'
    },
    {
      nombre: 'Portales',
      imagen: 'assets/Linea2/portales.png'
    },
    {
      nombre: 'Revolución',
      imagen: 'assets/Linea2/revolucion.png'
    },
    {
      nombre: 'San Antonio Abad',
      imagen: 'assets/Linea2/sanantonioabad.png'
    },
    {
      nombre: 'Tacuba',
      imagen: 'assets/Linea2/tacuba.png'
    },
    {
      nombre: 'Tasqueña',
      imagen: 'assets/Linea2/tasqueña.png'
    },
    {
      nombre: 'Viaducto',
      imagen: 'assets/Linea2/viaducto.png'
    },
    {
      nombre: 'Villa de Cortés',
      imagen: 'assets/Linea2/villadecortes.png'
    },
    {
      nombre: 'Xola',
      imagen: 'assets/Linea2/xola.png'
    },
    {
      nombre: 'Zócalo',
      imagen: 'assets/Linea2/zocalo.png'
    },
    {
      nombre: 'Deportivo 18 de Marzo',
      imagen: 'assets/Linea3/18marzo.png'
    },
    {
      nombre: 'Balderas',
      imagen: 'assets/Linea3/balderas.png'
    },
    {
      nombre: 'Centro médico',
      imagen: 'assets/Linea3/centromedico.png'
    },
    {
      nombre: 'Copilco',
      imagen: 'assets/Linea3/copilco.png'
    },
    {
      nombre: 'Coyoacan',
      imagen: 'assets/Linea3/coyoacan.png'
    },
    {
      nombre: 'Etiopía/plaza de la transparencia',
      imagen: 'assets/Linea3/etiopia-plaza.png'
    },
    {
      nombre: 'Eugenia',
      imagen: 'assets/Linea3/eugenia.png'
    },
    {
      nombre: 'Guerrero',
      imagen: 'assets/Linea3/guerrero.png'
    },
    {
      nombre: 'Hidalgo',
      imagen: 'assets/Linea3/hidalgo.png'
    },
    {
      nombre: 'Hospital General',
      imagen: 'assets/Linea3/hospitalgeneral.png'
    },
    {
      nombre: 'Indios Verdes',
      imagen: 'assets/Linea3/indiosverdes.png'
    },
    {
      nombre: 'Juárez',
      imagen: 'assets/Linea3/juarez.png'
    },
    {
      nombre: 'La raza',
      imagen: 'assets/Linea3/laraza.png'
    },
    {
      nombre: 'Miguel Ángel de Quevedo',
      imagen: 'assets/Linea3/maq.png'
    },
    {
      nombre: 'Niños Héroes',
      imagen: 'assets/Linea3/niñosheroes.png'
    },
    {
      nombre: 'Potrero',
      imagen: 'assets/Linea3/potrero.png'
    },
    {
      nombre: 'Tlatelolco',
      imagen: 'assets/Linea3/tlatelolco.png'
    },
    {
      nombre: 'Zapata',
      imagen: 'assets/Linea3/zapata.png'
    },
    {
      nombre: 'Bondojito',
      imagen: 'assets/Linea4/bondojito.png'
    },
    {
      nombre: 'Canal del norte',
      imagen: 'assets/Linea4/canaldelnorte.png'
    },
    {
      nombre: 'Candelaria',
      imagen: 'assets/Linea4/candelaria.png'
    },
    {
      nombre: 'Jamaica',
      imagen: 'assets/Linea4/jamaica.png'
    },
    {
      nombre: 'Martín Carrera',
      imagen: 'assets/Linea4/martincarrera.png'
    },
    {
      nombre: 'Morelos',
      imagen: 'assets/Linea4/morelos.png'
    },
    {
      nombre: 'Consulado',
      imagen: 'assets/Linea4/rioconsulado.png'
    },
    {
      nombre: 'Santa Anita',
      imagen: 'assets/Linea4/santaanita.png'
    },
    {
      nombre: 'Talisman',
      imagen: 'assets/Linea4/talisman.png'
    },
    {
      nombre: 'Aragon',
      imagen: 'assets/Line5/aragon.png'
    },
    {
      nombre: 'Autobuses del norte',
      imagen: 'assets/Line5/autobusesnorte.png'
    },
    {
      nombre: 'Hangares',
      imagen: 'assets/Line5/hangares.png'
    },
    {
      nombre: 'Instituto del petróleo',
      imagen: 'assets/Line5/imp.png'
    },
    {
      nombre: 'Politécnico',
      imagen: 'assets/Line5/ipn.png'
    },
    {
      nombre: 'Misterios',
      imagen: 'assets/Line5/misterios.png'
    },
    {
      nombre: 'Oceanía',
      imagen: 'assets/Line5/oceania.png'
    },
    {
      nombre: 'Valle Gómez',
      imagen: 'assets/Line5/vallegomez.png'
    },
    {
      nombre: '',
      imagen: 'assets/Line6/.png'
    },
  ];

}
