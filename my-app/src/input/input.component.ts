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
    console.log(val);
  }
  onNameChange(val: any) {
    console.log(
      'Using (change) with [(ngModel)],Triggers the onNameChange() function only when the input loses focus or the value changes.',
      val.target.value,
      val
    );
  }
}
