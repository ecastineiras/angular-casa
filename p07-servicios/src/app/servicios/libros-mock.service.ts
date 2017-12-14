import { Injectable } from '@angular/core';
import { Promise } from '../../../node_modules/@types/q';

@Injectable()
export class LibrosMockService {

    aDatos: Array<string>;

  constructor() {
    this.aDatos = [
        'Angular 2',
        'Fundamentos de Angular',
        'Angular para expertos',
        'Angular esencial'
    ];
  }

  getLibros(clave) {
    return this.aDatos;
  }

  getLibrosAsync(clave) {
    return new Promise (
      (resolve, reject) => 
        { setTimeout(()=>{resolve(); },2000
        );
      }
    )
  }
}
