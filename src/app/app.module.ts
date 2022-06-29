import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component'; 
import { NavbarComponent } from './navbar/navbar.component';
import { AuthModule } from './auth/auth.module';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { MoviesModule } from './movies/movies.module';
import { FooterComponent } from './footer/footer.component';
import { CoreModule } from './core.module';


@NgModule({
  declarations: [
    //component import
    AppComponent,
    NavbarComponent,    
    FooterComponent,
    
  ],
  imports: [
    // module import
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MoviesModule,
    AuthModule,
    SharedModule,
    CoreModule
  ],

  bootstrap: [AppComponent], // starter component
})
export class AppModule {}
