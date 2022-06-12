import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxFlipboardtextModule } from 'projects/suarsan/ngx-flipboardtext/src/public-api';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgxFlipboardtextModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
