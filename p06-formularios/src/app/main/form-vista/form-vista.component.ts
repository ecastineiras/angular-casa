import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {Printer, DepartamentosModel, Departamento} from '../../models/maestros.model';
import { DatosModel } from '../../models/datos.model';

@Component({
  selector: 'app-form-vista',
  templateUrl: './form-vista.component.html',
  styleUrls: ['./form-vista.component.css']
})
export class FormVistaComponent implements OnInit {

  @ViewChild('formPrinter') formulario: any;
  // Tipo basado en una clase
  aPrinter: Array<Printer>;
  oPrinter: Printer;
  aDepartamentos: Array<any>;
  oDepartamento: DepartamentosModel;

  oOrdenPrint: DatosModel;

  oOrden: DatosModel;
  constructor() {
    this.aPrinter = [
      {id: 1, nombre: 'Cannon'},
      {id: 2, nombre: 'HP'},
      {id: 3, nombre: 'Lexmark'},

    ];

    this.aDepartamentos = [
      new Departamento('1', 'Marketing'),
      new Departamento('2', 'Ventas'),
      new Departamento('3', 'Sistemas')
    ];

    this.oOrdenPrint = {
      nombre: '',
      apellidos: '',
      telefono: '',
      impresora: {id: '',nombre: ''},
      isColor: false,
      isClaro: false,
      departamento: {id:'', nombre: ''}
    }
   }

  ngOnInit() {
    console.log(this.formulario);
  }

    enviar(){
      console.log('datos enviados');
    }

    borrar(){
      this.formulario.reset();
      console.log('datos borrados');
    }
}
