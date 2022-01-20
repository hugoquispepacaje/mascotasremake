import { animate } from '@angular/animations';
import { Injectable } from '@angular/core';
import swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AlertasService {

  constructor() { }

  loading() {
    swal.fire({
      title: 'Cargando...',
      allowOutsideClick: false,//Evitar cerrar el modal clikeando afuera
      allowEscapeKey: false, // Evita cerrar el modal con el "esc"
      didOpen: () => {
        swal.showLoading()
      }
    });
  }

  cerrarAlerta() {
    swal.close();
  }

  modalVerAnuncio(anuncio: any) {
    const salto: String = '<br>';
    const dobleSalto: String = '<br><br>';
    const separador: String = '<hr/>';
    const cuerpoModal: String = `
      <strong>Descripción</strong>${salto}
      ${anuncio.descripcion}${dobleSalto}
      <strong>Fecha de perdida/encuentro</strong>${salto}
      ${anuncio.fechaPerdidaEncuentro}${dobleSalto}
      <strong>Color de la Mascota</strong>${salto}
      ${anuncio.colorMascota}${salto}
      ${separador}${salto}
      <strong style="text">Nombre de contacto</strong>${salto}
      ${anuncio.nombreContacto}${dobleSalto}
      <strong>Número de contacto</strong>${salto}
      ${anuncio.telefonoContacto}${dobleSalto}
      <strong>Correo de contacto</strong>${salto}
      ${anuncio.correoContacto}${dobleSalto}
    `;
    swal.fire({
      title: anuncio.nombrePublicacion,
      html: cuerpoModal,
      imageUrl: anuncio.urlFoto,
      imageWidth: 400,
      imageHeight: 400,
      imageAlt: `Imagen del anuncio ${anuncio.nombrePublicacion}`,
    })
  }
}
