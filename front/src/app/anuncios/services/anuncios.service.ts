import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from '../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class AnunciosService {
  api = environment.backend;
  constructor(private http: HttpClient) { }

  consultarAnuncios() {
    return this.http.get(`${this.api}/anuncios `);
  }

  consultarAnunciosPorTipoMascotaYPublicacion(tipoMascota: number, tipoPublicacion: number) {
    return this.http.get(`${this.api}/anuncios/tipo_mascota/${tipoMascota}/tipo_publicacion/${tipoPublicacion}`);
  }

}
