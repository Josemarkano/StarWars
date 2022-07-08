import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CharactersComponent } from './characters/characters.component';
import { DetailsComponent } from './details/details.component';
import { NavbarComponent } from './partials/navbar/navbar.component';
import { Footer2Component } from './partials/footer2/footer2.component';
import { FilterPipe } from './pipe/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CharactersComponent,
    DetailsComponent,
    NavbarComponent,
    Footer2Component,
    FilterPipe
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
