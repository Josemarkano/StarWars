import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})

export class SwapiserviceService {

  apiBase: string = "https://swapi.dev/api/";
   
  /**
  * Constructor 
  * @param _http 
  */

  constructor(
    private _http : HttpClient
  ) {}

  getCharacters(): any{
    return this._http.get(`${ this.apiBase }people/`);
  }

  getCharacters1(): any{
    return this._http.get(`${ this.apiBase }people/?page=2`);
  }

  getCharacters2(): any{
    return this._http.get(`${ this.apiBase }people/?page=3`);
  }

  getCharacters3(): any{
    return this._http.get(`${ this.apiBase }people/?page=4`);
  }

  getCharacters4(): any{
    return this._http.get(`${ this.apiBase }people/?page=5`);
  }

  getCharacters5(): any{
    return this._http.get(`${ this.apiBase }people/?page=6`);
  }

  getCharacters6(): any{
    return this._http.get(`${ this.apiBase }people/?page=7`);
  }

  getCharacters7(): any{
    return this._http.get(`${ this.apiBase }people/?page=8`);
  }

  getCharacters8(): any{
    return this._http.get(`${ this.apiBase }people/?page=9`);
  }
  
  getCharacter(url:string):any{
    return this._http.get( url );
  }

}
