import { Component, Input, OnInit } from '@angular/core';
//Cambiar nombre
import { Conferencias } from '../conferencias';

@Component({
  //cambiar selecto
  selector: 'app-conferencias-detail',
  templateUrl: './conferencias-detail.component.html',
  styleUrls: ['./conferencias-detail.component.css']
})
export class ConferenciasDetailComponent implements OnInit {

  //cambiar nombre
  @Input() conferenciasDetail!:Conferencias;
  constructor() { }

  ngOnInit() {
  }

}
