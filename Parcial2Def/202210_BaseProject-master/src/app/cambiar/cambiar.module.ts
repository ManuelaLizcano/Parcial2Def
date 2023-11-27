import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//cambiar nombre
import { CambiarComponent } from './cambiar.component';
import { CambiarListComponent } from '../cambiar-list/cambiar-list.component';
import { CambiarDetailComponent } from './cambiar-detail/cambiar-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports:[CambiarListComponent], 
  //cambiar con el objeto creado de listado
  declarations: [CambiarListComponent, CambiarDetailComponent]
})
export class CambiarModule { }
