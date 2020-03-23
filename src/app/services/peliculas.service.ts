import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  constructor(private httpClient: HttpClient) { console.log("online")}

 
    getAllmovies(category:string) {
      let url = null;
      switch (category) {
            case undefined:
              url = `${environment.urlApi}/discover/movie?sort_by=popularity.desc&api_key=${environment.apiKey}`;
              break;
            
            case "teatro":
              const desde = new Date();
              const hasta = new Date();
              desde.setDate(hasta.getDate());
              hasta.setDate(hasta.getDate() + 7); //semana
              const desdeStr = `${ desde.getFullYear() }-${ ('0' + (desde.getMonth() + 1)).slice(-2) }-${ ('0' + desde.getDate()).slice(-2) }`;
              const hastaStr = `${ hasta.getFullYear() }-${ ('0' + (hasta.getMonth() + 1)).slice(-2) }-${ ('0' + hasta.getDate()).slice(-2) }`;
              
              url = `${environment.urlApi}/discover/movie?primary_release_date.gte=${desdeStr}&primary_release_date.lte=${hastaStr}&api_key=${environment.apiKey}`;
              break;
            case "populares":
              url = `${environment.urlApi}/discover/movie?sort_by=popularity.desc&api_key=${environment.apiKey}`;
              break;
            case "niños":
              url = `${environment.urlApi}/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&language=es-ES&api_key=${environment.apiKey}`;
              break;
              case "2019"  :
               url  = `${environment.urlApi}/discover/movie?primary_release_year=${category}&sort_by=vote_average.desc&api_key=${environment.apiKey}`;
              break;
              case "2018"  :
               url  = `${environment.urlApi}/discover/movie?primary_release_year=${category}&sort_by=vote_average.desc&api_key=${environment.apiKey}`;
              break;
              case "2017"  :
               url  = `${environment.urlApi}/discover/movie?primary_release_year=${category}&sort_by=vote_average.desc&api_key=${environment.apiKey}`;
              break;
              case "2016"  :
               url  = `${environment.urlApi}/discover/movie?primary_release_year=${category}&sort_by=vote_average.desc&api_key=${environment.apiKey}`;
              break;
              case "2015"  :
               url  = `${environment.urlApi}/discover/movie?primary_release_year=${category}&sort_by=vote_average.desc&api_key=${environment.apiKey}`;
              break;
            default:
              url = `${environment.urlApi}/discover/movie?sort_by=popularity.desc&api_key=${environment.apiKey}`;
              break;
     }


     
      return this.httpClient.get(url);
    
    }

  getMovieId(movieid) {
      let url = `${environment.urlApi}/movie/${movieid}?api_key=${environment.apiKey}`;
      return this.httpClient.get(url);
     }

  getMovie_search(cadena: string) {
  let url = `${environment.urlApi}/search/movie?api_key=${environment.apiKey}&query=${cadena}`;
  return this.httpClient.get(url);
  }

}
 