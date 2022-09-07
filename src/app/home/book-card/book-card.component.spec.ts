import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookCardComponent } from './book-card.component';

describe('BookCardComponent', () => {
  let component: BookCardComponent;
  let fixture: ComponentFixture<BookCardComponent>;

  beforeEach(async () => {
    fixture = TestBed.createComponent(BookCardComponent);
    component = fixture.componentInstance;
    component.book = {
      author: 'fef',
      id: 1,
      picture: 'http',
      synopsis: 'synopsis',
      title: 'title',
      year: 2020
    }
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
