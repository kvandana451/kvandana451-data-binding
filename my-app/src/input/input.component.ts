import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input',
  imports: [FormsModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
})
export class InputComponent {
  name = '';
  triggerChange(val: string) {
    console.log(
      'Used (ngModelChange) with [(ngModel)],As soon as each change in the input field happens everytime,triggerChange() triggers to perform additional logic. already we get the value in the input field in that hero property because of 2 way binding',
      val
    );
  }
  onNameChange(val: any) {
    console.log(
      'Using (change) with [(ngModel)],Triggers the onNameChange() function only when the input loses focus or the value changes.',
      val.target.value,
      val
    );
  }
  hero = 'xyz';
  onHeroChange(value: any) {
    console.log(
      'As soon as each change in the input field happens everytime,onHeroChange() triggers to perform additional logic. already we get the value in the input field in that hero property because of 2 way binding',
      value
    );
  }
  onChange(val: any) {
    console.log(val.target.value);
  }
}
