import { Component } from '@angular/core';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.scss'
})
export class ProductosComponent {

  constructor(){}

  desplazar(id: string): void{
    const targetElement = document.getElementById(id);
    targetElement?.scrollIntoView({
      behavior: "smooth",
    });
    targetElement?.scrollBy(0, -targetElement.getBoundingClientRect().top)
  }

}
