import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgxFlipboardtextComponent } from './ngx-flipboardtext.component';

describe('NgxFlipboardtextComponent', () => {
  let component: NgxFlipboardtextComponent;
  let fixture: ComponentFixture<NgxFlipboardtextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxFlipboardtextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxFlipboardtextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
