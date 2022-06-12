import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxFlipboardtextComponent } from './ngx-flipboardtext.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgxFlipboardtextDirective } from './ngx-flipboardtext.directive';

@NgModule({
  declarations: [
    NgxFlipboardtextComponent,
    NgxFlipboardtextDirective
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule
  ],
  exports: [
    NgxFlipboardtextComponent
  ]
})
export class NgxFlipboardtextModule { }
