import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-flipboardtext',
  templateUrl: 'ngx-flipboardtext.component.html',
  styleUrls: ['ngx-flipboardtext.component.scss']
})
export class NgxFlipboardtextComponent implements OnInit {

  @Input() keys!: Array<String>;
  @Input() fontSize!: String;
  @Input() duration!: number;
  @Input() breakRatio!: number;


  @HostBinding('style.--font-size')
  public _fontSize: string;

  constructor() {
    // this.keys = [];
    this.fontSize = this._fontSize = '2rem';
    // this.duration = 7000;
    // this.breakRatio = 0.8;
  }

  ngOnInit(): void {
  }
  
  ngAfterViewInit(): void {
  } 
  ngOnDestroy() {}

}
