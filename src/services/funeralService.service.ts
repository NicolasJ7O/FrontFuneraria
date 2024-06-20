// funeral-service.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ConfiguracionRutasBackend } from 'src/app/config/configuracion.rutas.backend';

@Injectable({
  providedIn: 'root'
})
export class FuneralService {

  urlBase: string = ConfiguracionRutasBackend.urlNegocio;

  constructor(private http: HttpClient) { }

  processFuneralService(requestData: any): Observable<any> {
    return this.http.post<any>(`${this.urlBase}/funeral-service`, requestData);
  }

}
