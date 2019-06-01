import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoCartComponent } from './video-cart.component';

describe('VideoCartComponent', () => {
  let component: VideoCartComponent;
  let fixture: ComponentFixture<VideoCartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoCartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
