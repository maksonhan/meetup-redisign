import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeakersEventComponent } from './speakers-event.component';

describe('SpeakersEventComponent', () => {
  let component: SpeakersEventComponent;
  let fixture: ComponentFixture<SpeakersEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpeakersEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeakersEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
