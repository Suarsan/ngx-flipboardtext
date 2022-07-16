import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgxFlipboardtextComponent } from './ngx-flipboardtext.component';
import { NgxFlipboardtextDirective } from './ngx-flipboardtext.directive';

describe('NgxFlipboardtextDirective', () => {
    
  let component: NgxFlipboardtextComponent;
  let fixture: ComponentFixture<NgxFlipboardtextComponent>;

  const keys = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
  const cycleDuration = 15000;

  beforeEach(async () => {
    fixture =  TestBed.configureTestingModule({
      declarations: [NgxFlipboardtextComponent],
      providers: [NgxFlipboardtextDirective]
    }).createComponent(NgxFlipboardtextComponent);
    component = fixture.componentInstance;
    
    component.keys = keys;
    component.cycleDuration = cycleDuration;

    fixture.detectChanges();
  });

  it('should return valid animation', () => {
    
    const directive = new NgxFlipboardtextDirective(fixture, fixture.componentInstance);

    // @ts-ignore
    const animationMetadata = directive.getAnimation(component) as any;
  
    expect(animationMetadata.length).toBe(1);
    expect(animationMetadata[0].styles.steps.length).toBe((keys.length - 1) * 2 + 3);
    expect(animationMetadata[0].timings).toBe(cycleDuration.toString() + 'ms');

  });
});
