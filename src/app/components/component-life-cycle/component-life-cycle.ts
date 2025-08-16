import { AfterContentInit, Component, DoCheck, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-life-cycle',
  imports: [],
  templateUrl: './component-life-cycle.html',
  styleUrl: './component-life-cycle.css',
})
export class ComponentLifeCycle implements OnInit, OnChanges, DoCheck, AfterContentInit {
  
  constructor() {
    console.log('ComponentLifeCycle: constructor');
  }

  ngOnInit(): void {
    console.log('ComponentLifeCycle: ngOnInit');
  }

  ngOnChanges(): void {
    console.log('ComponentLifeCycle: ngOnChanges');
  }

  ngDoCheck(): void {
    console.log('ComponentLifeCycle: ngDoCheck');
  }

  ngAfterContentInit(): void {
    console.log('ComponentLifeCycle: ngAfterContentInit');
  }
}
