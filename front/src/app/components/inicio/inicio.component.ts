import { Component, OnInit } from '@angular/core';
import { AnunciosService } from '../../anuncios/services/anuncios.service';
import { AlertasService } from '../../services/alertas.service';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  anuncios: any;

  constructor(
    private _anuncioSrv: AnunciosService,
    private _alertasSrv: AlertasService) { }

  ngOnInit(): void {
    this.consultarAnuncios();
  }

  consultarAnuncios() {
    this._alertasSrv.loading();
    this._anuncioSrv.consultarAnuncios().subscribe(
      (response: any) => {
        this._alertasSrv.cerrarAlerta();
        this.anuncios = response;
      },
      (error) => {
        this._alertasSrv.cerrarAlerta();
        console.log(error);
      }
    )
  }
}
