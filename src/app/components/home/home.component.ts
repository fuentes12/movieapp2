import { Component, OnInit } from '@angular/core';
import { PeliculasService } from 'src/app/services/peliculas.service';
import { ActivatedRoute } from '@angular/router';
import { MenuItems } from '../../core/menu-items'  
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  moviesToShow: any[] = [];  
  type :any;
  category:any;
   favoriteSeason: string;
   titlepage: string ;
  constructor(public menuItems: MenuItems, private router:Router, private route: ActivatedRoute ,private peliculasService:PeliculasService) { }

  ngOnInit(): void {
 
 
this.route.params.subscribe(params => {
 
      
     this.type = params['type'];
 
     console.log( this.type);
  
     console.log( this.category);
     if(  this.type == undefined){
      this.titlepage = "";
     }else{
    this.titlepage = "Estas Viendo: "+ this.type;
  }
   this.getMovies(this.type);
    
});

}

/// fin on ngOnInit
getMovies(category : string) {
  if(category!=undefined){
    this.titlepage = ""+category; 

  }
    this.peliculasService.getAllmovies(category).subscribe((params: any) => {
    this.moviesToShow = params.results.slice(0,9);
    console.log("sasa"+category); 
  console.log(this.moviesToShow);  
  });
  
}



public redirectTo(subchildState){
  this.router.navigate([subchildState.state],{ queryParams:{ category: subchildState.queryState }});
}
}
