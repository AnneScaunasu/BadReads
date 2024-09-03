import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppBookPopupComponent } from './app-book-popup.component';

describe('AppBookPopupComponent', () => {
  let component: AppBookPopupComponent;
  let fixture: ComponentFixture<AppBookPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppBookPopupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppBookPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
