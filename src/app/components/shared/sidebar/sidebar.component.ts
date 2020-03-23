import { Component, OnInit } from '@angular/core';
import { MenuItems } from '../../../core/menu-items';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  favoriteSeason: string;
  annio: number;
  constructor(public menuItems: MenuItems) { }

  ngOnInit() {
  }
//busqyeda por año
/* movieanio(annio: number) {
  console.log("as"+annio);     
  this.peliculasService.getMoviesanio(annio).subscribe((params: any) => {
    this.moviesToShow = params.results.slice(0,9);
    console.log("as"+this.moviesToShow);          
  }); }*/

  

  
}
