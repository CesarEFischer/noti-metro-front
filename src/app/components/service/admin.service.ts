import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class AdminService{

  // Despues de "api/" indicaran el nombre del servicio  y en  metodo que petición hace
  public url = 'http://127.0.0.1:8000/api/admin';
  public urlReportes = 'http://127.0.0.1:8000/api/Reportes';
  constructor(
    private http: HttpClient,
  ) {}

  public getAdmins() {
    return new Promise((resolve, reject) => {
      this.http
        .get(
          `${this.url}/getAdmins`,
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

  public getRol(data:any) {
    return new Promise((resolve, reject) => {
      this.http
        .post(
          `${this.url}/getRol`,data,
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

  public logIn(data:any) {
    return new Promise((resolve, reject) => {
      this.http
        .post(
          `${this.url}/logIn`,data,
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

  public nuevoAdmin( adminData: any[]) {
    return new Promise((resolve, reject) => {
      this.http
        .post(
          `${this.url}/nuevoAdmin`, adminData,
          { 
            headers: { 'Content-Type': 'application/json' } },
        )
        .subscribe(
          {
            next: (data) => resolve(data),
            error: (err) => reject(err)
          }
        )
    });
  }

  public nuevoReporte( adminData: any[]) {
    return new Promise((resolve, reject) => {
      this.http
        .post(
          `${this.urlReportes}/nuevoReporte`, adminData,
          { 
            headers: { 'Content-Type': 'application/json' } },
        )
        .subscribe(
          {
            next: (data) => resolve(data),
            error: (err) => reject(err)
          }
        )
    });
  }
  public getAfluencia( id_estacion: any) {
    return new Promise((resolve, reject) => {
      this.http
        .post(
          `${this.urlReportes}/getAfluencia`, id_estacion,
          { 
            headers: { 'Content-Type': 'application/json' } },
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
