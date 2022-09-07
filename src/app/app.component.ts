import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { commonMaterialModules, commonModules, FooterComponent, NavbarComponent } from './common';
import { AppState, preloadBooks } from './store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [commonModules, commonMaterialModules, RouterModule, NavbarComponent, FooterComponent]
})
export class AppComponent {
  title = 'angular-part';

  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
    this.store.dispatch(preloadBooks());
  }

  
}
