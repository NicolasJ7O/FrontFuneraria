// finalize-service.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ConfiguracionRutasBackend } from 'src/app/config/configuracion.rutas.backend';

@Injectable({
  providedIn: 'root'
})
export class FinalizeService {
  urlBase: string = ConfiguracionRutasBackend.urlNegocio;

  constructor(private http: HttpClient) { }

  finalizeFuneralService(id: number): Observable<any> {
    return this.http.patch(`${this.urlBase}/funeral-service/${id}/finalize`, {});
  }
}
