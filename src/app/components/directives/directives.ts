import { NgClass, NgStyle } from '@angular/common';
import { Component, signal } from '@angular/core';
import { single } from 'rxjs';

@Component({
  selector: 'app-directives',
  imports: [NgClass, NgStyle],
  templateUrl: './directives.html',
  styleUrl: './directives.css',
})
export class Directives {
  className = signal<string>('');

  setClassName(value: string) {
    this.className.set(value);
  }
  isColor: boolean = false;

  buttonClassName = signal<string>('btn btn-danger');

  toggleColor() {
    this.isColor = !this.isColor;
    if (this.isColor) this.buttonClassName.set('btn btn-success');
    else this.buttonClassName.set('btn btn-danger');
  }
}
