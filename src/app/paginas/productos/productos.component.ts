import { Component } from '@angular/core';
import { ProductoService } from '../../servicios/producto.service';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.scss'
})
export class ProductosComponent {

  constructor(private productoSrv: ProductoService) { }

  ngOnInit() {
    this.productoSrv.obtenerDataHamburguesas()
    this.productoSrv.obtenerDataKebab()
    this.productoSrv.obtenerDataLasagnas()
    this.productoSrv.obtenerDataOtros()
    this.productoSrv.obtenerDataPaninis()
    this.productoSrv.obtenerDataPizzas()
    this.productoSrv.obtenerDataPorciones()
    this.productoSrv.obtenerDataTacos()
  }

  desplazar(id: string): void {
    const targetElement = document.getElementById(id);
    targetElement?.scrollIntoView({
      behavior: "smooth",
    });
    targetElement?.scrollBy(0, -targetElement.getBoundingClientRect().top)
  }

  get hamburguesas(){
    return this.productoSrv.hamburguesas;
  }
  get kebabs(){
    return this.productoSrv.kebab;
  }
  get lasagnas(){
    return this.productoSrv.lasagnas;
  }
  get otros(){
    return this.productoSrv.otros;
  }
  get paninis(){
    return this.productoSrv.paninis;
  }
  get pizzas(){
    return this.productoSrv.pizzas;
  }
  get porciones(){
    return this.productoSrv.porciones;
  }
  get tacos(){
    return this.productoSrv.tacos;
  }

}
