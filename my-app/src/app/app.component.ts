import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InputComponent } from '../input/input.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, InputComponent],
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
  imageUrl = 'https://picsum.photos/200/300';
  isDisabled = true;
  toggleFunc() {
    this.isActive = !this.isActive;
  }
  bgColor = 'red';
  clr = 'white';
}
