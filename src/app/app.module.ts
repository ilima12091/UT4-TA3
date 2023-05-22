import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NavBarItemsComponent } from './nav-bar/nav-bar-items/nav-bar-items.component';
import { HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';
=======
import { CarouselComponent } from './components/carousel/carousel.component';
>>>>>>> f386dac6ae388ea64a8b3e55ce178786b8ee8372

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    NavBarComponent,
    NavBarItemsComponent
=======
    CarouselComponent
>>>>>>> f386dac6ae388ea64a8b3e55ce178786b8ee8372
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    AngularSvgIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
