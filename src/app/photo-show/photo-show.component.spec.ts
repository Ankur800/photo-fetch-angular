import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoShowComponent } from './photo-show.component';

describe('PhotoShowComponent', () => {
  let component: PhotoShowComponent;
  let fixture: ComponentFixture<PhotoShowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PhotoShowComponent]
    });
    fixture = TestBed.createComponent(PhotoShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
