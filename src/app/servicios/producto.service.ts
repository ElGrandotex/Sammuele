import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductoInterface } from '../interfaces/producto.interface';
import { log } from 'console';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private dataHamburguesas = 'assets/db/hamburguesas.json'
  private dataKebab = 'assets/db/kebab.json'
  private dataLasagnas = 'assets/db/lasagnas.json'
  private dataOtros = 'assets/db/otros.json'
  private dataPaninis = 'assets/db/paninis.json'
  private dataPizzas = 'assets/db/pizzas.json'
  private dataPorciones = 'assets/db/porciones.json'
  private dataTacos = 'assets/db/tacos.json'

  hamburguesas!: ProductoInterface[];
  kebab!: ProductoInterface[];
  lasagnas!: ProductoInterface[];
  otros!: ProductoInterface[];
  paninis!: ProductoInterface[];
  pizzas!: ProductoInterface[];
  porciones!: ProductoInterface[];
  tacos!: ProductoInterface[];

  constructor(private http: HttpClient) { }

  obtenerDataHamburguesas(): void {
    this.http.get<ProductoInterface[]>(`${this.dataHamburguesas}`)
      .subscribe(respH => {
        this.hamburguesas = respH;
      });
  };

  obtenerDataKebab(): void {
    this.http.get<ProductoInterface[]>(`${this.dataKebab}`)
      .subscribe(respK => {
        this.kebab = respK;
      });

  }
  obtenerDataLasagnas(): void {
    this.http.get<ProductoInterface[]>(`${this.dataLasagnas}`)
      .subscribe(respL => {
        this.lasagnas = respL;
      });

  }
  obtenerDataOtros(): void {
    this.http.get<ProductoInterface[]>(`${this.dataOtros}`)
      .subscribe(respO => {
        this.otros = respO;
      });

  }
  obtenerDataPaninis(): void {
    this.http.get<ProductoInterface[]>(`${this.dataPaninis}`)
      .subscribe(respPa => {
        this.paninis = respPa;
      });

  }
  obtenerDataPizzas(): void {
    this.http.get<ProductoInterface[]>(`${this.dataPizzas}`)
      .subscribe(respPi => {
        this.pizzas = respPi;
      });

  }
  obtenerDataPorciones(): void {
    this.http.get<ProductoInterface[]>(`${this.dataPorciones}`)
      .subscribe(respPo => {
        this.porciones = respPo;
      });

  }
  obtenerDataTacos(): void {
    this.http.get<ProductoInterface[]>(`${this.dataTacos}`)
      .subscribe(respT => {
        this.tacos = respT;
      });
  }
}
