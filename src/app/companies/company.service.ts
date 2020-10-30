import { HttpClient } from '@angular/common/http';
import { Component, Injectable } from '@angular/core';
import { from, Observable, of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AlertService } from '../alerts/alert.service';
import { Juego } from '../juegos/juego';
import { Company } from './company';

@Injectable()
export class CompanyService {

  urlServer: string = 'http://localhost:8090/';

  constructor(private http: HttpClient, private alertService: AlertService) { }

  getCompanies(): Observable<Company[]> {
    return this.http.get<Company[]>(this.urlServer + 'companies').pipe(
      catchError(e =>{
        console.error(`getCompanies error: "${e.message}"`);
        this.alertService.error(`Error al consultar las compañías: "${e.message}"`);
        return throwError(e);
      })
    )
  }
  getJuegos(): Observable<Juego[]> {
    return this.http.get<Juego[]>(this.urlServer + 'juegos').pipe(
      catchError(e => {
        console.error(`getJuego error: "${e.message}"`);
        this.alertService.error(`Error al consultar los juegos: "${e.message}"`);
        return throwError(e);
      })
    )
  }
}


