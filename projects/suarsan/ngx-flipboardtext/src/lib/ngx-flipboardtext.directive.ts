import { animate, AnimationBuilder, AnimationFactory, AnimationMetadata, AnimationPlayer, AnimationStyleMetadata, keyframes, style } from '@angular/animations';
import { OnInit, Directive, ElementRef } from '@angular/core';
import { NgxFlipboardtextComponent } from './ngx-flipboardtext.component';

@Directive({
  selector: '[ngxFlipboardtextDirective]'
})
export class NgxFlipboardtextDirective implements OnInit {

  private player: AnimationPlayer | null = null;
  private factory: AnimationFactory | null = null;

  constructor(private eRef: ElementRef, private ngxFlipboardtext: NgxFlipboardtextComponent, private animationBuilder?: AnimationBuilder,) { 
    if (this.animationBuilder) {
      this.factory = this.animationBuilder.build(this.getAnimation(this.ngxFlipboardtext));
    }
    if (this.factory) {
      this.player = this.factory.create(this.eRef.nativeElement);
    }
  }
  
  ngOnInit() {
    this.play();
  }
  
  private play() {
    if (this.player) {
      this.player.restart();
      this.player.onDone(() => this.play());
    }
  }

  private getAnimation(o: NgxFlipboardtextComponent): AnimationMetadata[] {
    const animationMetadata: AnimationMetadata[] = [];
    const frames: AnimationStyleMetadata[] = [];
    frames.push(style({ marginTop: `calc(0 * ${o.fontSize})`, offset: 0 }));
    frames.push(style({ marginTop: `calc(0 * ${o.fontSize})`, offset: (1 / o.keys.length) * o.breakRatio }));
    for (let i = 0; i < o.keys.length; i++) {
      if ((i + 1) !== o.keys.length) {
        frames.push(style({ marginTop: `calc(-3 * ${i+1} * ${o.fontSize})`, offset: (i + 1) * 1 / o.keys.length }));
        frames.push(style({ marginTop: `calc(-3 * ${i+1} * ${o.fontSize})`, offset: ((i + 1) * 1 / o.keys.length) + (1 / o.keys.length) * o.breakRatio }));
      }
    }
    frames.push(style({ marginTop: `calc(-3 * ${o.keys.length} * ${o.fontSize})`, offset: 1 }));
    animationMetadata.push(animate(`${o.cycleDuration}ms`, keyframes(frames)));
    return animationMetadata;
  }

}

