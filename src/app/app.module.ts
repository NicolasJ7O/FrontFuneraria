import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './publico/pagina-maestra/encabezado/encabezado.component';
import { PiePaginaComponent } from './publico/pagina-maestra/pie-pagina/pie-pagina.component';
import { MenuLateralComponent } from './publico/pagina-maestra/menu-lateral/menu-lateral.component';
import { RutaNoEncontradaComponent } from './publico/errores/ruta-no-encontrada/ruta-no-encontrada.component';
import { ErrorDeServidorComponent } from './publico/errores/error-de-servidor/error-de-servidor.component';
import { InicioComponent } from './publico/inicio/inicio.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    PiePaginaComponent,
    MenuLateralComponent,
    RutaNoEncontradaComponent,
    ErrorDeServidorComponent,
    InicioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
