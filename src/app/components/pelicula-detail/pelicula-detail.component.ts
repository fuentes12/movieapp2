import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Router} from '@angular/router';
import { PeliculasService } from 'src/app/services/peliculas.service';
@Component({
  selector: 'app-pelicula-detail',
  templateUrl: './pelicula-detail.component.html',
  styleUrls: ['./pelicula-detail.component.scss']
})
export class PeliculaDetailComponent implements OnInit {
  peliculaDET:any  ;
  category_:any  ;
  constructor(private router:Router, private activatedRoute: ActivatedRoute,private peliculasService:PeliculasService) { }

  ngOnInit() {

    this.activatedRoute.params.subscribe(params=>{
     
      console.log("as "+params['id']);
      console.log("kkljkljlk "+params['cat']);
      this.category_ =params['cat'];
      this.getMovies_id(params['id']) 
      
    })
  }
  getMovies_id(category : number) {
    this.peliculasService.getMovieId(category).subscribe((peliculaDET: any) => {
    this.peliculaDET = peliculaDET ;
  console.log(this.peliculaDET);  
  });
  
}

verMovieback( category_: string){
 
  this.router.navigate(['/home',category_]);
   console.log(category_);
}

}
