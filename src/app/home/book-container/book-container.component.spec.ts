import { ComponentFixture } from '@angular/core/testing';
import { MockBuilder, MockRender, ngMocks } from 'ng-mocks';

import { BookContainerComponent } from './book-container.component';

describe('BookContainerComponent', () => {
  let component: BookContainerComponent;
  let fixture: ComponentFixture<BookContainerComponent>;

  beforeEach(async () => {
    MockBuilder(BookContainerComponent);
    fixture = MockRender(BookContainerComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
