import { CommonModule } from "@angular/common";
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";

export const commonMaterialModules = [MatButtonModule, MatIconModule];
export const commonModules = [CommonModule, StoreModule, EffectsModule];

export { FooterComponent } from './footer/footer.component';
export { NavbarComponent } from './navbar/navbar.component';

