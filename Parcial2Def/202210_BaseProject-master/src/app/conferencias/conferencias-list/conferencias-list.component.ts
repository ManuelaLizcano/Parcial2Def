import { Component, OnInit } from '@angular/core';

//cambiar el nombre
import { Conferencias } from '../conferencias';
import { ConferenciasService } from '../conferencias.service';
import { ConferenciaDetail } from '../conferencia-detail';

//import { CambiarService } from '../cambiar/cambiar.service';
//import { CambiarDetail } from '../cambiar/cambiar-detail';
@Component({
  //este selector es el que se pone en el html de app.component.html
  selector: 'app-conferencias-list',
  templateUrl: './conferencias-list.component.html',
  styleUrls: ['./conferencias-list.component.css']
})
export class ConferenciasListComponent implements OnInit {
  //cambiar 
  
  
  conferencias:Array<ConferenciaDetail>=[];
  selected:Boolean=false;
  selectedConferencia!:ConferenciaDetail;

  onSelected(conferencia:ConferenciaDetail):void{
    this.selected=true;
    this.selectedConferencia=conferencia;
  }
  
  
  //cambiar nombre 
  constructor(private conferenciaService:ConferenciasService) { }

  getConferencias():void{
    this.conferenciaService.getConferencias().subscribe((conferencia)=>{
      this.conferencias=conferencia;
    })
  }

  
  
  
  ngOnInit() {
    this.getConferencias();
  }

}
