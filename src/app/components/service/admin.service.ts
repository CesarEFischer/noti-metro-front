import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class AdminService{

  // Despues de "api/" indicaran el nombre del servicio  y en  metodo que petición hace
  public url = 'http://127.0.0.1:8000/api/admin';

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


}
