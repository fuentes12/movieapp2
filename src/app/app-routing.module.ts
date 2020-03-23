import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PeliculaDetailComponent } from './components/pelicula-detail/pelicula-detail.component';
import { BuscadorComponent } from './components/buscador/buscador.component';


const routes: Routes = [
  { path: 'home', component:HomeComponent},
  { path: 'home/:type', component: HomeComponent },
  { path: 'movie/:id/:cat', component: PeliculaDetailComponent },
  { path: 'search/:termino', component: BuscadorComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
