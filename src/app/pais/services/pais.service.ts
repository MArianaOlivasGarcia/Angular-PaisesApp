import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pais } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private api_url: string = 'https://restcountries.eu/rest/v2'

  get httpParams () {
    return new HttpParams().set( 'fields', 'name;capital;alpha2Code;flag;population' );
  }

  constructor( private http: HttpClient ) { }
  
  getByNombre( nombre: string ): Observable<Pais[]> {
    const url:string = `${this.api_url}/name/${nombre}`;
    return this.http.get<Pais[]>( url, { params: this.httpParams } );
  }

  getByCapital( capital: string ): Observable<Pais[]> {
    const url:string = `${this.api_url}/capital/${capital}`;
    return this.http.get<Pais[]>( url, { params: this.httpParams });
  }

  getByCode( code: string ): Observable<Pais[]> {
    const url:string = `${this.api_url}/alpha/${code}`;
    return this.http.get<Pais[]>( url );
  }


  getByRegion( region: string ): Observable<Pais[]> {
    const url:string = `${this.api_url}/region/${region}`;
    return this.http.get<Pais[]>( url, { params: this.httpParams });
  }


}
 