import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatButtonModule} from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TesteComponent } from '../teste/teste.component';
import { HeroesComponent } from './heroes/heroes.component';
import { FormsModule } from '@angular/forms';
import { HeroDetailComponent } from './hero-details/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
@NgModule({
  declarations: [
    AppComponent,
    TesteComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatButtonModule,
    MatExpansionModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule,


  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
