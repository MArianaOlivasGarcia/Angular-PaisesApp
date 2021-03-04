import { Component, OnInit } from '@angular/core';
import { Pais } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
    `
    li {
      cursor: pointer;
    }`
  ]
})
export class PorPaisComponent implements OnInit {

  hayError: boolean = false;
  termino: string;
  paises: Pais[] = [];
  paisesSugeridos: Pais[] = [];
  mostrarSugerencias: boolean = false;

  constructor(private paisService: PaisService ) { }

  ngOnInit(): void {
  } 
  
  
  buscar( termino:string ):void {
    this.mostrarSugerencias = false;
    this.hayError = false;

    this.paisService.getByNombre(termino)
            .subscribe( paises => {
              this.paises = paises;
            }, err => {
              this.paises = [];
              this.hayError = true;
            })

  }

  sugerencias( termino: string): void {
    this.mostrarSugerencias = true;
    this.hayError = false;
    this.termino = termino;

    this.paisService.getByNombre( this.termino )
          .subscribe( 
            paises => this.paisesSugeridos = paises.splice(0,5),
            err => this.paisesSugeridos = [] );

  }



}
