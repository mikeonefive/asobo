import {RouterModule, Routes} from '@angular/router';
import { EventsPage } from './features/events/events-page/events-page';
import {NgModule} from '@angular/core';

export const routes: Routes = [
  { path: 'events', component: EventsPage },
  { path: '', redirectTo: '/events', pathMatch: 'full' },
  { path: '**', redirectTo: '/events' } // fallback for unknown routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutesModule {}
