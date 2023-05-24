import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { CardComponent } from './card/card.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NavBarItemsComponent } from './nav-bar/nav-bar-items/nav-bar-items.component';
import { HttpClientModule } from '@angular/common/http';
import { CarouselComponent } from './components/carousel/carousel.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    NavBarItemsComponent,
    CarouselComponent,
    CardComponent
  ],
  imports: [
    HttpClientModule,
    AppRoutingModule, 
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
