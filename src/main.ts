import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { routes } from './app/app-routing';
import { AppComponent } from './app/app.component';
import { effects } from './app/store';
import { bookReducer } from './app/store/books/book.reducer';
import { environment } from './environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
      BrowserAnimationsModule,
      RouterModule.forRoot(routes),
      StoreModule.forRoot({books: bookReducer}),
      EffectsModule.forRoot(effects) 
    ),
  ]
});
