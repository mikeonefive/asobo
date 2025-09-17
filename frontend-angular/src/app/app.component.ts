import { Component } from '@angular/core';
import {HeaderComponent} from './layout/header/header.component';
import {FooterComponent} from './layout/footer/footer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [
    HeaderComponent,
    FooterComponent
  ],
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  city: string = 'San Francisco';
}
