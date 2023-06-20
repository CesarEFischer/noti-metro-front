import { Component } from '@angular/core';
import {ConfirmationService, MessageService} from "primeng/api";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [MessageService, ConfirmationService ]
})
export class RegisterComponent {

  contrasena: any;
  respContrasena = {valor: true, mensaje: ''}
  correo: any;
  respCorreo = {valor: true, mensaje: ''}

  codigo='';

  preRegistro =  true;
  validar = false;
  validacion = false;
  registrar = false;
  finalizado = false;
  mostrarModal = false;


  apellidoPaterno: any;
  apellidoMaterno: any;
  nombre: any;
  rutina:any[] = [];
  lineas: any[]= [{label: 'Linea A', value: 9},
                  {label: 'Linea 9', value: 6},];

  constructor(private messageService: MessageService) {
  }


  verificarCorreo() {
    const correosValidos =['gmail.com', 'hotmail.com', 'outlook.com',];
    const auxCorreo = this.correo.split('@');
    this.respCorreo = {valor: false, mensaje: ''};

    if(auxCorreo.length == 0){
      this.respCorreo.valor = true;
      this.respCorreo.mensaje = 'No cumple con el formato de correo';
      return
    }

    const aux = correosValidos.filter( correo => (auxCorreo[auxCorreo.length-1] == correo));
    console.log(aux);
    if (aux.length == 0) {
      this.respCorreo.valor = true;
      this.respCorreo.mensaje = 'No es un proveedor de correo admitido';
      return
    }

  }

  verificarContrasena(){
    this.respContrasena = {valor: false, mensaje: ''}

    let expMayus = new RegExp('[A-Z]+');
    let expDig = new RegExp('[0-9]+');
    let expSimb = new RegExp('[!,@,$]+');

    if(this.contrasena.length < 8){
      this.respContrasena.valor = true
      this.respContrasena.mensaje = 'Debe contener al menos 8 caracteres';
      return
    }

    if(!expMayus.test(this.contrasena)){
      this.respContrasena.valor = true;
      this.respContrasena.mensaje = ' debe contener al menos una mayuscula';
      return
    }
    if(!expDig.test(this.contrasena)){
      this.respContrasena.valor = true;
      this.respContrasena.mensaje = 'Debe contener al menos un número';
      return
    }
    if(!expSimb.test(this.contrasena)){
      this.respContrasena.valor = true;
      this.respContrasena.mensaje = 'Debe contener al menos una simbolo';
      return
    }


  }

  preRegistrar(){
    const data = {
      correo: this.correo,
      contrasena: this.contrasena
    };

    this.preRegistro = false;
    this.validar = true;
  }

  validarCodigo(){
    this.validar = false;

    this.validacion = true;

  }

  mandarCodigo(){

  }

  agregarARutina(valor:any, linea: any):void {
    console.log(valor, linea);
    if(valor==1){
      this.rutina.push(linea);
    }else{
      this.rutina = this.rutina.filter(item => item !== linea);
    }
  }

  modalAgregarRutina(){
    console.log(this.rutina);
    this.mostrarModal = !this.mostrarModal;
    if(this.mostrarModal){
      this.rutina = [];
    }

  }

  registarUsuario(){
    this.messageService.add({key:"success", severity: 'success', summary: '¡En hora buena!', detail: "Tu registro ha concluido con éxito"});
  }









}
