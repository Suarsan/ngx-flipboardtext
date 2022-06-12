import { animate, AnimationBuilder, AnimationFactory, AnimationMetadata, AnimationPlayer, AnimationStyleMetadata, keyframes, style } from '@angular/animations';
import { OnInit, Directive, ElementRef, ChangeDetectorRef } from '@angular/core';
import { NgxFlipboardtextComponent } from './ngx-flipboardtext.component';

@Directive({
  selector: '[ngxFlipAnimationDirective]'
})
export class NgxFlipboardtextDirective implements OnInit {

  private player: AnimationPlayer;
  private factory: AnimationFactory;

  constructor(private eRef: ElementRef, private animationBuilder: AnimationBuilder, private ngxFlipboardtext: NgxFlipboardtextComponent) { 
    this.factory= this.animationBuilder.build(this.getAnimation(this.ngxFlipboardtext));
    this.player = this.factory.create(this.eRef.nativeElement);
  }
  
  ngOnInit() {
    this.play();
  }
  
  private play() {
    this.player.restart();
    this.player.onDone(() => this.play());
  }

  private getAnimation(o: NgxFlipboardtextComponent): AnimationMetadata[] {
    console.dir(o.breakRatio);
    const animationMetadata: AnimationMetadata[] = [];
    const frames: AnimationStyleMetadata[] = [];
    frames.push(style({ marginTop: `calc(0 * ${o.fontSize})`, offset: 0 }));
    console.log(`calc(0 * ${o.fontSize})`, 0);
    frames.push(style({ marginTop: `calc(0 * ${o.fontSize})`, offset: (1 / o.keys.length) * o.breakRatio }));
    console.log(`calc(0 * ${o.fontSize})`, (1 / o.keys.length) * o.breakRatio);
    for (let i = 0; i < o.keys.length; i++) {
      if ((i + 1) !== o.keys.length) {
        frames.push(style({ marginTop: `calc(-3 * ${i+1} * ${o.fontSize})`, offset: (i + 1) * 1 / o.keys.length }));
        console.log(`calc(-3 * ${i+1} * ${o.fontSize})`, (i + 1) * 1 / o.keys.length);
        frames.push(style({ marginTop: `calc(-3 * ${i+1} * ${o.fontSize})`, offset: ((i + 1) * 1 / o.keys.length) + (1 / o.keys.length) * o.breakRatio }));
        console.log(`calc(-3 * ${i+1} * ${o.fontSize})`, ((i + 1) * 1 / o.keys.length) + (1 / o.keys.length) * o.breakRatio );
      }
    }
    frames.push(style({ marginTop: `calc(-3 * ${o.keys.length} * ${o.fontSize})`, offset: 1 }));
    console.log(`calc(-3 * ${o.keys.length} * ${o.fontSize})`, 1);
    animationMetadata.push(animate(`${o.duration}ms`, keyframes(frames)));
    return animationMetadata;
  }

}

