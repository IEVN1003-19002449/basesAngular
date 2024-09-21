import { Component } from '@angular/core';
import { IProducto } from '../producto';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html', 
  styleUrls: ['./product-list.component.css']  // Corregí 'styleUrl' a 'styleUrls'
})
export class ProductListComponent {
  title = "Saludo de variable";

  imageWidth: number = 50;
  imageMargin: number = 2;  // Cambié 'ImageMargin' a 'imageMargin' (convención de camelCase)
  muestraIMG: boolean = true;
  listFilter: string = '';

  // Método para mostrar/ocultar imagen
  showImage(): void {
    this.muestraIMG = !this.muestraIMG;
  }

  // Lista de productos
  productos: IProducto[] = [
    {
      "producto": 1,
      "modelo": 'Sentra',
      "descripcion": '4 puertas familiar',
      "year": 'febrero 3 2022',
      "precio": 200000,
      "marca": 'NISSAN',
      "color": 'morado',
      "imagenUrl": "https://example.com/sentra.png"
    },
    {
      "producto": 2,
      "modelo": 'A4',
      "descripcion": '2 puertas familiar',
      "year": 'Marzo 3 2023',
      "precio": 500000,
      "marca": 'NISSAN',
      "color": 'blanco',
      "imagenUrl": "https://example.com/a4.png"
    },
    {
      "producto": 3,
      "modelo": 'Rio',
      "descripcion": '2 puertas familiar',
      "year": 'Agosto 3 2024',
      "precio": 600000,
      "marca": 'KIA',
      "color": 'Azul',
      "imagenUrl": "https://example.com/rio.png"
    }
  ];
}
