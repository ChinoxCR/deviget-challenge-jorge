import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemsListComponent } from './items-list/items-list.component';
import { DateAgoPipe } from './pipes/date-ago.pipe';
import {TimeAgoPipe} from 'time-ago-pipe';
import { PostComponent } from './post/post/post.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemsListComponent,
    DateAgoPipe,
    PostComponent
    
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
