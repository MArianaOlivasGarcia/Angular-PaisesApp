import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { Pais } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-pais',
  templateUrl: './pais.component.html',
  styles: [
  ]
})
export class PaisComponent implements OnInit {

  pais: Pais;

  constructor(private activatedRoute: ActivatedRoute,
              private paisService: PaisService ) { }

  ngOnInit(): void {

    /* this.activatedRoute.params
      .subscribe( ({id}) => {
        this.paisService.getByCode(id)
            .subscribe( resp => {
              console.log(resp)
            })
      }) */


      this.activatedRoute.params
          .pipe(
            // Recibir un observable y regresar otro observable
            switchMap( ({id}) => this.paisService.getByCode(id) ),
/*             tap( resp => console.log(resp) )
 */         tap( console.log )
          )
          .subscribe( (pais: any) => this.pais = pais );

  }

}
