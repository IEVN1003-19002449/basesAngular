import { Component } from '@angular/core';

@Component({
  selector: 'app-cinepolis',
  templateUrl: './cinepolis.component.html',
  styleUrls: ['./cinepolis.component.css']
})
export class CinepolisComponent {
  nombreComprador: string = '';
  cantidadBoletos: number = 1;
  cantidadCompradores: number = 1;
  usaCineco: boolean = false;
  total: string | null = null; 
  precioBoleto: number = 12.00;
  boletosDisponibles: number = 5000;

  calcularTotal() {
    // Checa el máximo de boletos permitidos por comprador
    if (this.cantidadBoletos > this.cantidadCompradores * 7) {
      alert(`Cada comprador puede comprar un máximo de 7 boletos. Total permitido: ${this.cantidadCompradores * 7}`);
      this.total = null;
      return;
    }

    let boletosTotales = this.cantidadBoletos;

    // Checa si hay boletos suficientes
    if (boletosTotales > this.boletosDisponibles) {
      alert(`Lo siento, solo hay ${this.boletosDisponibles} boletos disponibles.`);
      this.total = null;
      return;
    }

    // Calcula el subtotal sin descuentos
    let subtotal = boletosTotales * this.precioBoleto;
    let descuentoPorCantidad = 0;

    // Aplica descuento por cantidad de boletos
    if (boletosTotales > 5) {
      descuentoPorCantidad = 0.15;
    } else if (boletosTotales >= 3) {
      descuentoPorCantidad = 0.10;
    }

    // Calcula el total con descuento por cantidad de boletos
    let totalConDescuentoPorCantidad = subtotal * (1 - descuentoPorCantidad);

    if (this.usaCineco) {
      totalConDescuentoPorCantidad *= 0.90; 
    }
    this.total = totalConDescuentoPorCantidad.toFixed(2);
  }

  // Actualiza la cantidad de boletos permitidos por el número de compradores
  actualizarMaxBoletos() {
    if (this.cantidadBoletos > 7 * this.cantidadCompradores) {
      this.cantidadBoletos = 7 * this.cantidadCompradores;
    }
  }
}
