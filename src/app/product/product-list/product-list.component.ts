import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl:'./product-list.component.html', 
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  title="Saludo de variable";

  imageWidth:number=50;
  ImageMargin:number=2;
  muestraIMG:boolean=true;
  listFilter:string='';
  

  showImage():void{
    this.muestraIMG=!this.muestraIMG;
  }

  productos:any[] = [
    {

      "producto":1,
      "modelo": 'Sentra',
      "descripcion":'4 puertas familiar',
      "year":'febrero 3 2022',
      "precio":200000,
      "marca":'NISSAN',
      "color":'morado',
      "imagenUrl":"https://www.google.com.mx/url?sa=i&url=https%3A%2F%2Fmx.pinterest.com%2Fpin%2Fhoops-gets-a-facelift--782078291517274271%2F&psig=AOvVaw0ngIKnu9UmG-Qnmnb9EBIL&ust=1726708255839000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKjM_9Gny4gDFQAAAAAdAAAAABAZ"
    },
    {

      "producto":2,
      "modelo": 'A4',
      "descripcion":'2 puertas familiar',
      "year":'Marzo 3 2023',
      "precio":500000,
      "marca":'NISSAN',
      "color":'blanco',
      "imagenUrl":"https://www.google.com.mx/url?sa=i&url=https%3A%2F%2Fwww.kavak.com%2Far%2Fusados%2Fnissan%2Fa4%2Fpickup&psig=AOvVaw1jMVZX2HQ1cRszTSiNQEez&ust=1726708302808000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCJC3muiny4gDFQAAAAAdAAAAABAF"
    },
    {

      "producto":3,
      "modelo": 'Rio',
      "descripcion":'2 puertas familiar',
      "year":'Agosto 3 2024',
      "precio":600000,
      "marca":'KIA',
      "color":'Azul',
      "imagenUrl":"https://www.google.com.mx/url?sa=i&url=https%3A%2F%2Fwww.motorpasion.com.mx%2Findustria%2Fkia-rio-2021&psig=AOvVaw0BTXYKdYS58ECe-sZwRQ7Y&ust=1726708329987000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCJjvl_Wny4gDFQAAAAAdAAAAABAE"
    }

  ]
}