import { Component, OnInit } from '@angular/core';
import { LibrosMockService } from '../../servicios/libros-mock.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  aLibros: Array<string>;
  sClave: string;
  sTitle: string;

  constructor(public LibrosMock: LibrosMockService) { }

  ngOnInit() {
    this.aLibros = [];
  }

  buscarLibros() {
    // Nunca podemos tener esto, un proceso asíncrono y una variable tomando su valor. Solución: promesas
   this.aLibros = this.LibrosMock.getLibros(this.sClave);
   this.sTitle = 'Libros sobre ' + this.sClave;
   this.sClave = '';
  }

  buscarLibrosAsync(){
    this.librosMoc.getLibrosAsync(this.sClave).
    then(
      (response) => {this.aLibros = response},
      (error) => {}
    );
  }

}
