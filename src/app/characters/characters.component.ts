import { Component, OnInit } from '@angular/core';
import { SwapiserviceService } from 'src/app/swapiservice.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  characters:any = {
    results: []
  };

  characters1:any = {
    results: []
  };

  characters2:any = {
    results: []
  };

  characters3:any = {
    results: []
  };

  characters4:any = {
    results: []
  };

  characters5:any = {
    results: []
  };

  characters6:any = {
    results: []
  };

  characters7:any = {
    results: []
  };

  characters8:any = {
    results: []
  };

  public page: number = 0;
  public search: string = '';

  constructor(
    private _swapiservice : SwapiserviceService, private route: Router
    ) { }
  
    ngOnInit(): void {
      this.getCharacters();
      this.getCharacters1();
      this.getCharacters2();
      this.getCharacters3();
      this.getCharacters4();
      this.getCharacters5();
      this.getCharacters6();
      this.getCharacters7();
      this.getCharacters8();
    }
  
    getCharacters(){
      this._swapiservice.getCharacters()
        .subscribe((value:any) => {
          this.characters = value;          
        });
    }

    getCharacters1(){
      this._swapiservice.getCharacters1()
        .subscribe((value:any) => {
          this.characters1 = value;          
        });
    }

    getCharacters2(){
      this._swapiservice.getCharacters2()
        .subscribe((value:any) => {
          this.characters2 = value;          
        });
    }

    getCharacters3(){
      this._swapiservice.getCharacters3()
        .subscribe((value:any) => {
          this.characters3 = value;          
        });
    }

    getCharacters4(){
      this._swapiservice.getCharacters4()
        .subscribe((value:any) => {
          this.characters4 = value;          
        });
    }

    getCharacters5(){
      this._swapiservice.getCharacters5()
        .subscribe((value:any) => {
          this.characters5 = value;          
        });
    }

    getCharacters6(){
      this._swapiservice.getCharacters6()
        .subscribe((value:any) => {
          this.characters6 = value;          
        });
    }

    getCharacters7(){
      this._swapiservice.getCharacters7()
        .subscribe((value:any) => {
          this.characters7 = value;         
        });
    }

    getCharacters8(){
      this._swapiservice.getCharacters8()
        .subscribe((value:any) => {
          this.characters8 = value;         
        });
    }
  
    details(results:object){
      
      this.route.navigate(['details/', results]);
          
    }

    nextPage(){
      this.page +=1;
    }

    prevPage(){
      if(this.page >0)
        this.page -=1;
    }

    onSearchChar( search:string ){
      this.page = 0;
      this.search = search;
    }

}
