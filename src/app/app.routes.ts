import { Routes } from '@angular/router';
import { ButtonsComponent } from './pages/buttons/buttons.component';
import { CheckboxComponent } from './pages/checkbox/checkbox.component';
import { DividerComponent } from './pages/divider/divider.component';
import { InputComponent } from './pages/inputs/inputs.component';
import { CardComponent } from './pages/card/card.component';

export const routes: Routes = [
  { path: 'buttons', component: ButtonsComponent },
  { path: 'checkbox', component: CheckboxComponent },
  { path: 'divider', component: DividerComponent },
  { path: 'inputs', component: InputComponent },
  { path: 'card', component: CardComponent },
  { path: '', redirectTo: 'buttons', pathMatch: 'full' },
];