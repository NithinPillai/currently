
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { VerticalCarouselComponent } from './components/vertical-carousel/vertical-carousel.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, NavbarComponent, VerticalCarouselComponent],
})
export class AppComponent {
  title = 'current.ly';
}
