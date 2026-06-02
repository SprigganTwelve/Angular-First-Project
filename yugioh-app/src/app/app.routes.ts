
import { Routes } from '@angular/router';

import { CardListComponent } from './componenent/card-list.component/card-list.component';
import { CardDetailComponent } from './pages/card-list.component/card-list.component';
import { DeckComponent } from './pages/deck.component/deck.component';



export const routes: Routes = [
  { path: '', component: CardListComponent },
  { path: 'carte/:id', component: CardDetailComponent },
  { path: 'deck', component: DeckComponent },
  { path: '**', redirectTo: '' },
];