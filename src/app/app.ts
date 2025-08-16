import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { DataBindings } from './components/data-bindings/data-bindings';
import { ControlFlow } from "./components/control-flow/control-flow";

@Component({
  selector: 'app-root',
  imports: [ RouterLink, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angularLearningBasics');
}
