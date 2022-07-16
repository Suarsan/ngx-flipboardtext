import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-flipboardtext',
  templateUrl: 'ngx-flipboardtext.component.html',
  styleUrls: ['ngx-flipboardtext.component.scss']
})
export class NgxFlipboardtextComponent {

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
