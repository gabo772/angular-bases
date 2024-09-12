import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Client } from '../interfaces/client.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private apiURL: string = "http://localhost:8090/api/v1.0"

  constructor(private http: HttpClient) { }

  obtenerClientes(): Observable<Client[]> {
    return this.http.get<Client[]>(`${this.apiURL}/facturas/cliente`)
  }


}
