import { LOCALE_ID, NgModule } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MainComponent } from './main.component';
import { FormVistaComponent } from './form-vista/form-vista.component';
import { ListaComponent } from './lista/lista.component';
import { LibrosMockService } from '../servicios/libros-mock.service';


registerLocaleData(localeEs);

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    MainComponent,
    FormVistaComponent,
    ListaComponent
  ],
  providers: [ { provide: LOCALE_ID, useValue: 'es' }, 
    LibrosMockService ],
  exports: [MainComponent]
})


export class MainModule { }
