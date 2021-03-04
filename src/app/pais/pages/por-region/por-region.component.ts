import { Component, OnInit } from '@angular/core';
import { Pais } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
    `
      button {
        margin-right: 5px
      }
    `
  ]
})
export class PorRegionComponent implements OnInit {

  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActiva: string = '';
  paises: Pais[] = [];

  constructor( private paisService: PaisService ) { }

  ngOnInit(): void {
  }

  activarRegion( region: string ) {
  
    // Si la opcion seleccionada es la misma
    // retornar para evitar que haga otra vez la peticion
    if ( region === this.regionActiva ) { return; }

    this.regionActiva = region;
    this.paises = [];
    this.getPaises( this.regionActiva );
  }

  getClaseCSS( region: string ): string {
    return (region === this.regionActiva) 
                      ? 'btn btn-primary'
                      : 'btn btn-outline-primary' 
  }

  getPaises( region: string ): void {
    this.paisService.getByRegion( region )
        .subscribe( paises => this.paises = paises );
  }

}
