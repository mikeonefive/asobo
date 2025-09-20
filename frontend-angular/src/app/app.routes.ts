import {RouterModule, Routes} from '@angular/router';
import {EventsPage} from './features/events/events-page/events-page';
import {NgModule} from '@angular/core';
import {EventDetailPage} from './features/events/event-detail-page/event-detail-page';

export const routes: Routes = [
  { path: 'events', component: EventsPage },
  { path: 'events/:id', component: EventDetailPage },
  { path: '', redirectTo: '/events', pathMatch: 'full' },
  { path: '**', redirectTo: '/events' } // fallback for unknown routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutesModule {}
