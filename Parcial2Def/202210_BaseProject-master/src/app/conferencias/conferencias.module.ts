import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { ConferenciasComponent } from './conferencias.component';
import { ConferenciasListComponent } from './conferencias-list/conferencias-list.component';
import { ConferenciasDetailComponent } from './conferencias-detail/conferencias-detail.component';
//cambiar nombre
//import { CambiarComponent } from './cambiar.component';
//import { CambiarListComponent } from '../cambiar-list/cambiar-list.component';
//import { CambiarDetailComponent } from './cambiar-detail/cambiar-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports:[ConferenciasListComponent], 
  //poner el detail
  declarations: [ConferenciasListComponent, ConferenciasDetailComponent]
})
export class ConferenciasModule { }