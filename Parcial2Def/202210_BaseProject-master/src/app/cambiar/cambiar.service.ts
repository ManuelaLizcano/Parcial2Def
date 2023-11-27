import { Injectable } from '@angular/core';
//estos valores no cambian
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { CambiarDetail } from './cambiar-detail';
//estos valores no cambian

//cambiar nombre
import { Cambiar } from './cambiar';
@Injectable({
  providedIn: 'root'
})
export class CambiarService {

  private apiUrl: string=environment.baseUrl+'cambiar';

constructor(private http: HttpClient) { }

//declarar las funciones
getCambiar():Observable<CambiarDetail[]>{
  return this.http.get<CambiarDetail[]>(this.apiUrl);
}
}
