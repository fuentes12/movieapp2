import { Component, OnInit ,Input} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Router} from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  @Input() movie: any = {};
  @Input() index: number;
  @Input() cat: any ;
  
  constructor(private router:Router, private route: ActivatedRoute ) { 


    
  }

  ngOnInit() {
  }
  verMovie(id:number, cat: string){
    this.router.navigate(['/movie', id,cat]);
     console.log(id);
  }
}
