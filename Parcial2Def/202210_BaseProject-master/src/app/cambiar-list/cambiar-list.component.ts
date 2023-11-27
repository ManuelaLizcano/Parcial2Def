import { Component, OnInit } from '@angular/core';

//cambiar el nombre
import { Cambiar } from '../cambiar/cambiar';
import { CambiarService } from '../cambiar/cambiar.service';
import { CambiarDetail } from '../cambiar/cambiar-detail';
@Component({
  //este selector es el que se pone en el html de app.component.html
  selector: 'app-cambiar-list',
  templateUrl: './cambiar-list.component.html',
  styleUrls: ['./cambiar-list.component.css']
})
export class CambiarListComponent implements OnInit {
  //cambiar 
  cambiars:Array<CambiarDetail>=[];
  selected:Boolean=false;
  selectedCambiar!:CambiarDetail;

  onSelected(cambiar:CambiarDetail):void{
    this.selected=true;
    this.selectedCambiar=cambiar;
  }

  
  //cambiar nombre 
  constructor(private cambiarService:CambiarService) { }

  getCambiar():void{
    this.cambiarService.getCambiar().subscribe((cambiars)=>{
      this.cambiars=cambiars;
    })
  }

  //implemmentar funciones
  ngOnInit() {
    this.getCambiar();
  }

}
