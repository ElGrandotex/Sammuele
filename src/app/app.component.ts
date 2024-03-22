import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PiePaginaComponent } from './componentes/pie-pagina/pie-pagina.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { HomePageComponent } from './paginas/home-page/home-page.component';
import { ProductosComponent } from './paginas/productos/productos.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    PiePaginaComponent,
    MenuComponent,
    HomePageComponent,
    ProductosComponent,
    HttpClientModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Sammuele';
}
