import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class RegisterService{

  // Despues de "api/" indicaran el nombre del servicio  y en  metodo que petición hace
  public url = 'http://127.0.0.1:8000/api/usuario';

  constructor(
    private http: HttpClient,
  ) {}


  public logIn(datos: any) {
    return new Promise((resolve, reject) => {
      this.http
        .post(
          `${this.url}/logIn`, datos,
          { headers: {  } },
        )
        .subscribe(
          {
            next: (data) => resolve(data),
            error: (err) => reject(err)
          }
        )
    });
  }
  public preRegistrar(datos: any) {
    return new Promise((resolve, reject) => {
      this.http
        .post(
          `${this.url}/preRegistar`, datos,
          { headers: {  } },
        )
        .subscribe(
          {
            next: (data) => resolve(data),
            error: (err) => reject(err)
          }
        )
    });
  }


}
