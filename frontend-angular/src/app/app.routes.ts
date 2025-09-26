import {Routes} from '@angular/router';
import {EventsPage} from './features/events/events-page/events-page';
import {EventDetailPage} from './features/events/event-detail-page/event-detail-page';
import {LoginPage} from './features/auth/login/login-page/login-page';

export const routes: Routes = [
  { path: 'login', component: LoginPage },
  { path: 'events', component: EventsPage },
  { path: 'events/:id', component: EventDetailPage },
  { path: '', redirectTo: '/events', pathMatch: 'full' },
  { path: '**', redirectTo: '/events' } // fallback for unknown routes
];
