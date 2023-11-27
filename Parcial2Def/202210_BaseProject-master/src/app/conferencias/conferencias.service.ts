import { Injectable } from '@angular/core';
//estos valores no cambian
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { ConferenciaDetail } from './conferencia-detail';

//import { CambiarDetail } from './cambiar-detail';
//estos valores no cambian

//cambiar nombre
//import { Cambiar } from './cambiar';
@Injectable({
  providedIn: 'root'
})
export class ConferenciasService {

  private apiUrl: string=environment.baseUrl+'conferencias';

constructor(private http: HttpClient) { }

//declarar las funciones
getConferencias():Observable<ConferenciaDetail[]>{
  return this.http.get<ConferenciaDetail[]>(this.apiUrl);
}
}
