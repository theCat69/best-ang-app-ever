import { ComponentFixture } from '@angular/core/testing';
import { MockBuilder, MockRender } from 'ng-mocks';
import { AppComponent } from './app.component';

describe('AppComponent', () => {

  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    MockBuilder(AppComponent);
    fixture = MockRender(AppComponent);
    component = fixture.componentInstance;
  });


  it('should create the app', () => {
    expect(component).toBeTruthy();
  });
});
