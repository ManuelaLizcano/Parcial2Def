import { Component, Input, OnInit } from '@angular/core';
//Cambiar nombre
import { Cambiar } from '../cambiar';

@Component({
  //cambiar selecto
  selector: 'app-cambiar-detail',
  templateUrl: './cambiar-detail.component.html',
  styleUrls: ['./cambiar-detail.component.css']
})
export class CambiarDetailComponent implements OnInit {

  //cambiar nombre
  @Input() cambiarDetail!:Cambiar;
  constructor() { }

  ngOnInit() {
  }

}
