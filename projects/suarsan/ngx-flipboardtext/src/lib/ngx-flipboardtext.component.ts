import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-flipboardtext',
  templateUrl: 'ngx-flipboardtext.component.html',
  styleUrls: ['ngx-flipboardtext.component.scss']
})
export class NgxFlipboardtextComponent implements OnInit {

  @Input() keys!: Array<String>;
  @Input() cycleDuration!: number;
  @Input() fontSize: String;
  @Input() breakRatio: number;
  @Input() backgroundColor: string;
  @Input() textColor: string;


  constructor() {;
    this.fontSize = '2rem';
    this.breakRatio = 0.75;
    this.backgroundColor = '#2cc4d2';
    this.textColor = '#ffffff';
  }

  ngOnInit(): void {
  }
  
  ngAfterViewInit(): void {
  } 
  ngOnDestroy() {}

}
