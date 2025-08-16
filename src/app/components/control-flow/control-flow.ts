import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-control-flow',
  imports: [FormsModule],
  templateUrl: './control-flow.html',
  styleUrl: './control-flow.css',
})
export class ControlFlow {
  isParagraph: boolean = false;
  personN = 'Kuddus';

  showP() {
    this.isParagraph = true;
  }
  hideP() {
    this.isParagraph = false;
  }

  personName: string[] = ['karim', 'rafiq', 'jabbar', 'salam', 'borkot'];

  personObject: any[] = [
    { id: 0, name: 'john wick', city: 'dhaka' },
    { id: 1, name: 'jack richer', city: 'usa' },
    { id: 2, name: 'jack sparrow', city: 'maldeaves' },
    { id: 3, name: 'john smith', city: 'london' },
  ];

  get personObjectKeys() {
    return Object.keys(this.personObject[0]).map((key) => key.toUpperCase());
  }
}
