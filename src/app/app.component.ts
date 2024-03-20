import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PiePaginaComponent } from './componentes/pie-pagina/pie-pagina.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { HomePageComponent } from './paginas/home-page/home-page.component';
import { ProductosComponent } from './paginas/productos/productos.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    PiePaginaComponent,
    MenuComponent,
    HomePageComponent,
    ProductosComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Sammuele';
}
