import { Component, OnInit } from '@angular/core';
import { AnunciosService } from '../../services/anuncios.service';
import { AlertasService } from '../../../services/alertas.service';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-mascota-encontradas-perros',
  templateUrl: './mascota-encontradas-perros.component.html',
  styleUrls: ['./mascota-encontradas-perros.component.css']
})
export class MascotaEncontradasPerrosComponent implements OnInit {

  anuncios: any;

  constructor(
    private _anuncioSrv: AnunciosService,
    private _alertasSrv: AlertasService
  ) { }

  ngOnInit(): void {
    this.consultarAnuncios();
  }

  consultarAnuncios() {
    this._alertasSrv.loading();
    this._anuncioSrv.consultarAnunciosPorTipoMascotaYPublicacion(environment.PERROS, environment.ENCONTRADA).subscribe(
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
