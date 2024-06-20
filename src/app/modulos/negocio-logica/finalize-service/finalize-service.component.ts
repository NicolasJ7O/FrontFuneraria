// finalize-service.component.ts

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FinalizeService } from 'src/services/finalizeService.service';

@Component({
  selector: 'app-finalize-service',
  templateUrl: './finalize-service.component.html',
  styleUrls: ['./finalize-service.component.css']
})
export class FinalizeServiceComponent implements OnInit {
  serviceId: number;

  constructor(
    private finalizeService: FinalizeService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.serviceId = +this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    // Implementa lógica adicional si es necesario
  }

  onFinalizeService(): void {
    this.finalizeService.finalizeFuneralService(this.serviceId).subscribe({
      next: () => {
        alert('El servicio funerario ha sido finalizado exitosamente.');
      },
      error: (err) => {
        console.error('Error al finalizar el servicio funerario:', err);
        alert('Ocurrió un error al finalizar el servicio funerario. Por favor intenta nuevamente.');
      }
    });
  }
}
