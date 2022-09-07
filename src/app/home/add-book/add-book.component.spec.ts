import { TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { MockBuilder, MockRenderFactory } from 'ng-mocks';
import { AppState } from 'src/app/store';

import { AddBookComponent } from './add-book.component';

describe('AddBookComponent', () => {
  let factory: MockRenderFactory<AddBookComponent>;
  const initialState: AppState = { books: [] };

  beforeEach(async () => {
    return MockBuilder(AddBookComponent).provide(
      provideMockStore({
        initialState: initialState
      }),
    ).keep(ReactiveFormsModule);
  });

  beforeEach(async () => {
    factory = MockRenderFactory(AddBookComponent);
    factory.configureTestBed();
  })

  it('should create', () => {
    const fixture = factory();
    const component = fixture.componentInstance;
    expect(component).toBeDefined();
  });

  it('button should call add book', () => {
    //given
    const store = TestBed.inject(Store);
    const dispatchSpy = spyOn(store, 'dispatch');
    const fixture = factory();

    const button = fixture.nativeElement.querySelector('button');
    //when
    button.click();
    //then
    expect(dispatchSpy).toHaveBeenCalled();
  });

  it(('should add book from component'), () => {
    //given
    const store = TestBed.inject(Store);
    const dispatchSpy = spyOn(store, 'dispatch');

    const fixture = factory();
    const component = fixture.componentInstance;
    //when
    component.addBook();
    //then
    expect(dispatchSpy).toHaveBeenCalled;
  })
});
