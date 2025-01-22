import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'my-app';
  isActive = true;
  backGroundColor = 'pink';
  color = 'green';
  toggle() {
    this.isActive = !this.isActive;
  }
}
