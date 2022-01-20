import { Component, OnInit, Input } from '@angular/core';
import { AlertasService } from '../../../services/alertas.service';
@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  @Input() anuncios: any;
  constructor(
    private _alertasSrv: AlertasService
  ) { }

  ngOnInit(): void {
  }

  verAnuncio(anuncio: any) {
    this._alertasSrv.modalVerAnuncio(anuncio);
  }
}
