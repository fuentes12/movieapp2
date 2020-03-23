import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeliculasService } from 'src/app/services/peliculas.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.scss']
})
export class BuscadorComponent implements OnInit {
  moviesToShow: any[] = [];  
  termino: string;
  titlepage: string="" ;
  constructor(private router:Router, private activatedRoute: ActivatedRoute ,private peliculasService:PeliculasService) { }


  ngOnInit() {
    this.titlepage="" ;
    this.activatedRoute.params.subscribe( params =>{
      // console.log(params['termino']);
      this.termino = params['termino'];
      this.getMovies_search(this.termino);
    });
  }



  getMovies_search(category : string) {
    this.peliculasService.getMovie_search(category).subscribe((params: any) => {
    this.moviesToShow = params.results;
    console.log(this.moviesToShow);  
  });
  
}

}
