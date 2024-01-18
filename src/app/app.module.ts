import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Auth
import {
  HttpClientModule,
  HttpClient,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventService } from './core/services/event.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [EventService],
  bootstrap: [AppComponent],
})
export class AppModule {}
