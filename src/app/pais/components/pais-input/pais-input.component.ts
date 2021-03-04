import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [
  ]
})
export class PaisInputComponent implements OnInit {
 
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  @Input() placeholder: string = 'Hola';
 
  debouncer: Subject<string> = new Subject();
 
  termino: string = '';

  constructor() { }

  ngOnInit(): void {
    this.debouncer
      .pipe(
        // Cuantas milesimas de segundo quiero esperar antes de emitir el sisguiente valor
        // Que no haga el susbcribe hasta que pasen 300 ms
        debounceTime(300)
      )
      .subscribe( valor => {
        this.onDebounce.emit( valor );
      })
  }


  buscar():void {
    this.onEnter.emit( this.termino );
  }

  teclaPresionada():void {
    // next es el siguiente valor 
    this.debouncer.next(this.termino);
  }


}
