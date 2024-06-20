// funeral-service.component.ts

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { funeralService } from 'src/app/modelos/funeralService.model';
import { FuneralService } from 'src/services/funeralService.service';

@Component({
  selector: 'app-funeral-service-form',
  templateUrl: './funeral-service.component.html',
  styleUrls: ['./funeral-service.component.css']
})
export class FuneralServiceFormComponent implements OnInit {

  funeralForm: FormGroup;

  constructor(
    private funeralService: FuneralService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.funeralForm = this.fb.group({
      beneficiaryId: ['', [Validators.required]],
      location: ['', [Validators.required]],
      entryDateTime: ['', [Validators.required]],
      exitDateTime: ['', [Validators.required]],
      traditionalBurial: [false] // Valor por defecto para el checkbox
    });
  }

  ngOnInit(): void {
    // Implementa lógica adicional si es necesario inicializar algún valor
  }

  onSubmit() {
    if (this.funeralForm.invalid) {
      alert('Por favor completa el formulario correctamente.');
      return;
    }

    const formData = this.funeralForm.value as funeralService; // Asegúrate de que el tipo coincida con tu modelo

    this.funeralService.processFuneralService(formData).subscribe({
      next: (response) => {
        alert('El servicio funerario ha sido procesado exitosamente.');
        console.log("El servicio funerario ha sido procesado exitosamente.");
        this.router.navigate(['/finalize-service', response.id]); // Asegúrate de que `response.id` es el ID correcto del servicio
      },
      error: (err) => {
        console.log('Error al procesar el servicio funerario:', err);
        alert('Ocurrió un error al procesar el servicio funerario. Por favor intenta nuevamente.');
      }
    });
  }

  get formControls() {
    return this.funeralForm.controls;
  }
}
