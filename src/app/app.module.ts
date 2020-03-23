import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule, 
  MatCardModule, 
  MatMenuModule, 
  MatToolbarModule, 
  MatIconModule, 
  MatInputModule, 
  MatDatepickerModule, 
  MatNativeDateModule, 
  MatProgressSpinnerModule,
  MatTableModule, 
  MatExpansionModule, 
  MatSelectModule,
  MatSnackBarModule, 
  MatTooltipModule, 
  MatChipsModule, 
  MatListModule, 
  MatSidenavModule, 
  MatTabsModule, 
  MatProgressBarModule,
  MatCheckboxModule,
  MatSliderModule,
  MatRadioModule,
  MatDialogModule,  
  MatGridListModule
} from '@angular/material';
// Necesario para peticiones y asegurar la petición entre dominios 
import { HttpClientJsonpModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { MovieComponent } from './components/movie/movie.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { PeliimgPipe } from './pipes/peliimg.pipe';
import { MenuItems } from './core/menu-items'  

import { FormsModule } from '@angular/forms';
import { SidebarComponent } from './components/shared/sidebar/sidebar.component';
import { PeliculaDetailComponent } from './components/pelicula-detail/pelicula-detail.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
 
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MovieComponent,
    NavbarComponent,PeliimgPipe,
    FooterComponent,
    SidebarComponent,
    PeliculaDetailComponent,
    BuscadorComponent 
  ],
  imports: [
    BrowserModule,FormsModule,
    AppRoutingModule,MatButtonModule, BrowserAnimationsModule,HttpClientModule,HttpClientJsonpModule,
    MatCardModule, 
    MatMenuModule, 
    MatToolbarModule, 
    MatIconModule, 
    MatInputModule, 
    MatDatepickerModule, 
    MatNativeDateModule, 
    MatProgressSpinnerModule,
    MatTableModule, 
    MatExpansionModule, 
    MatSelectModule,
    MatSnackBarModule, 
    MatTooltipModule, 
    MatChipsModule, 
    MatListModule, 
    MatSidenavModule, 
    MatTabsModule, 
    MatProgressBarModule,
    MatCheckboxModule,
    MatSliderModule,
    MatRadioModule,
    MatDialogModule,
    MatGridListModule  
  ],
  providers: [   MenuItems],
  bootstrap: [AppComponent]
})
export class AppModule { }
