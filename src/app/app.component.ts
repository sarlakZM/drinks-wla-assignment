import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './core/components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent],
  template: `
  <app-navbar></app-navbar>
  <section class="container">
    <router-outlet></router-outlet>
  </section>
  `
})
export class AppComponent {
  title = 'eliq-wla-assignment';
}
