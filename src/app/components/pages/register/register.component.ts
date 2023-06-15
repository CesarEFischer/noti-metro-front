import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  contrasena: any;
  respContrasena = {valor: true, mensaje: ''}
  correo: any;
  respCorreo = {valor: true, mensaje: ''}

  exito = false;



  preRegistro(){
    const data = {
      correo: this.correo,
      contrasena: this.contrasena
    };

    this.exito = true;
  }

  verificarCorreo() {
    const correosValidos =['gmail.com', 'hotmail.com', 'outlook.com',];
    const auxCorreo = this.correo.split('@');
    this.respCorreo = {valor: true, mensaje: ''};

    if(auxCorreo.length == 0){
      this.respCorreo.valor = false;
      this.respCorreo.mensaje = 'No cumple con el formato de correo';
      return
    }

    const aux = correosValidos.filter( correo => (auxCorreo[auxCorreo.length-1] == correo));
    console.log(aux);
    if (aux.length == 0) {
      this.respCorreo.valor = false;
      this.respCorreo.mensaje = 'No es un proveedor de correo admitido';
      return
    }

  }

  verificarContrasena():any{
      this.respContrasena = {valor: true, mensaje: ''}

      let expMayus = new RegExp('[A-Z]+');
      let expDig = new RegExp('[0-9]+');
      let expSimb = new RegExp('[!,@,$]+');

      if(this.contrasena.length < 8){
        this.respContrasena.valor = false;
        this.respContrasena.mensaje = 'Debe contener al menos 8 caracteres';
        return
      }

      if(!expMayus.test(this.contrasena)){
        this.respContrasena.valor = false;
        this.respContrasena.mensaje = ' debe contener al menos una mayuscula';
        return
      }
      if(!expDig.test(this.contrasena)){
        this.respContrasena.valor = false;
        this.respContrasena.mensaje = 'Debe contener al menos un número';
        return
      }
      if(!expSimb.test(this.contrasena)){
        this.respContrasena.valor = false;
        this.respContrasena.mensaje = 'Debe contener al menos una simbolo';
        return
      }


  }


}
