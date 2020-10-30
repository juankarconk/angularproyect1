import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Juego } from './juego';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AlertService } from '../alerts/alert.service';

@Injectable()
export class JuegoService {

  urlServer: string = 'http://localhost:8090/';
  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient, private alertService: AlertService) { }

  
  getJuegos(): Observable<Juego[]> {
    return this.http.get<Juego[]>(this.urlServer + 'juegos').pipe(
      catchError(e => {
        console.error(`getJuego error: "${e.message}"`);
        this.alertService.error(`Error al consultar los juegos: "${e.message}"`);
        return throwError(e);
      })
    )
  }
  
  create(juego: Juego): Observable<Juego> {
    return this.http.post<Juego>(this.urlServer + 'juegos', juego, { headers: this.httpHeaders }).pipe(
      catchError(e => {
        console.error(`create error: "${e.message}"`);
        this.alertService.error(`Error al crear el juego: "${e.message}"`);
        return throwError(e);
      })
    );
  }
  getJuego(id: number): Observable<Juego> {
    return this.http.get<Juego>(`${this.urlServer}juegos/${id}`).pipe(
      catchError(e => {
        console.error(`getJuego error: "${e.message}"`);
        this.alertService.error(`Error al consultar el juego: "${e.message}"`);
        return throwError(e);
      })
    );
  }
  update(juego: Juego): Observable<Juego> {
    return this.http.put<Juego>(`${this.urlServer}juegos/${juego.idJuego}`, juego, { headers: this.httpHeaders }).pipe(
      catchError(e => {
        console.error(`update error: "${e.message}"`);
        this.alertService.error(`Error al actualizar el juego: "${e.message}"`);
        return throwError(e);
      })
    );
  }

}


