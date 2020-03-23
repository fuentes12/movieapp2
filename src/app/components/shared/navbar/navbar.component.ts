import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Router} from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private router:Router, private activatedRoute: ActivatedRoute ) { }

  ngOnInit() {
  }
  buscarmovie( termino:string ){
    console.log(termino);
    this.router.navigate( ['/search',termino] );
  }

}
