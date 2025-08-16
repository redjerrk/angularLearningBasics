import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-bindings',
  imports: [FormsModule],
  templateUrl: './data-bindings.html',
  styleUrl: './data-bindings.css',
})
export class DataBindings {
  userName: string = 'Rakib';
  Age: number = 20;
  city: string = 'Dhaka';

  inputType: string = 'checkbox';

  showMessage() {
    alert('this is a sample ealart');
  }
  changeUserName() {
    this.userName = 'Karim';
  }

  // app.component.ts
  buttonDisabled = true;
  imageUrl = 'https://angular.io/assets/images/logos/angular/angular.png';
}
