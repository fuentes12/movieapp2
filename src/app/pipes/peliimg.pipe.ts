import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'peliimg'
})

export class PeliimgPipe implements PipeTransform {
 
    transform(pelicula: any, poster: boolean = false): any {
      const url = 'http://image.tmdb.org/t/p/w300';
  
      if ( poster ) {
        if (pelicula.poster_path) {
          return url + pelicula.poster_path;
        } else {
          return 'assets/images/images.png';
        }
      }
  
      if (pelicula.backdrop_path) {
        return url + pelicula.backdrop_path;
      } else {
        if (pelicula.poster_path) {
          return url + pelicula.poster_path;
        } else {
          return 'assets/images/images.png';
        }
      }
    }
  
  }
  