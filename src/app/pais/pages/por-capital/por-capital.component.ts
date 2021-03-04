import { Component, OnInit } from '@angular/core';
import { Pais } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent implements OnInit {

  hayError: boolean = false;

  paises: Pais[] = [];

  constructor(private paisService: PaisService ) { }

  ngOnInit(): void {
  }
  
  
  buscar( termino:string ):void {
    this.hayError = false;
 
    this.paisService.getByCapital(termino)
            .subscribe( paises => {
              this.paises = paises;
            }, err => {
              this.paises = [];
              this.hayError = true;
            })

  }

  sugerencias( valor:string):void {
    console.log(valor)
  }
}
