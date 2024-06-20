import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NegocioLogicaRoutingModule } from './negocio-logica-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FuneralServiceFormComponent } from './funeral-service/funeral-service.component';
import { FinalizeServiceComponent } from './finalize-service/finalize-service.component';


@NgModule({
  declarations: [FuneralServiceFormComponent, FinalizeServiceComponent],
  imports: [
    CommonModule,
    NegocioLogicaRoutingModule,
    ReactiveFormsModule,
  ]
})
export class NegocioLogicaModule { }
