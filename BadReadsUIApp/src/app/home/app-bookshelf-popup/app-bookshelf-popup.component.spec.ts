import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppBookshelfPopupComponent } from './app-bookshelf-popup.component';

describe('AppBookshelfPopupComponent', () => {
  let component: AppBookshelfPopupComponent;
  let fixture: ComponentFixture<AppBookshelfPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppBookshelfPopupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppBookshelfPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
