import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SwapiserviceService } from '../swapiservice.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  detail: any;
  

  constructor(private router: ActivatedRoute, private _swapiservice : SwapiserviceService) {
    this.router.params.subscribe(params =>{
    
    this.getCharacter(params['url']);   
      
    });


   }

ngOnInit(): void {
}

getCharacter(url:string):void{
  this._swapiservice.getCharacter(url).subscribe((response:any)=> this.detail= response);
}


}
