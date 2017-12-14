import { LOCALE_ID, NgModule } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MainComponent } from './main.component';
import { FormVistaComponent } from './form-vista/form-vista.component';

registerLocaleData(localeEs);

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    MainComponent,
    FormVistaComponent
  ],
  providers: [ { provide: LOCALE_ID, useValue: 'es' } ],
  exports: [MainComponent]
})
export class MainModule { }
