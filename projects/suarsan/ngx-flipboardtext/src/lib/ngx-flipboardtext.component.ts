import { Component, Input } from '@angular/core';
import { Base, returnProvider } from './base.class';

@Component({
  selector: 'ngx-flipboardtext',
  templateUrl: 'ngx-flipboardtext.component.html',
  styleUrls: ['ngx-flipboardtext.component.scss'],
  providers: [returnProvider(NgxFlipboardtextComponent)],
})
export class NgxFlipboardtextComponent implements Base {

  @Input() keys!: Array<String>;
  @Input() cycleDuration: number;
  @Input() fontSize: String;
  @Input() breakRatio: number;
  @Input() backgroundColor: string;
  @Input() textColor: string;


  constructor() {;
    this.fontSize = '2rem';
    this.cycleDuration = 15000;
    this.breakRatio = 0.75;
    this.backgroundColor = '#2cc4d2';
    this.textColor = '#ffffff';
  }

}
