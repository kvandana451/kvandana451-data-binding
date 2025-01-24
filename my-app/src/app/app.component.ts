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
  changeInput(value: any) {
    console.log(
      'Soon as the input field like <input>,<select> looses focus,changeInput() is triggered'
    );
    console.log(value);
  }
  isApplied = true;
  toggleFunc() {
    this.isApplied = !this.isApplied;
  }
  txtColor = 'yellow';
}
