import { UpperCasePipe } from '@angular/common';
import { AfterContentChecked, AfterContentInit, AfterViewInit, Component, DoCheck, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-life-cycle',
  imports: [UpperCasePipe],
  templateUrl: './component-life-cycle.html',
  styleUrl: './component-life-cycle.css',
})
export class ComponentLifeCycle implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterViewInit, AfterContentChecked {

  constructor() {
    console.log('ComponentLifeCycle: constructor');
  }
  ngAfterViewInit(): void {
    console.log('ComponentLifeCycle: ngAfterViewInit');
  }

  ngAfterContentChecked(): void {
    console.log('ComponentLifeCycle: ngAfterContentChecked');
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

  personName: string = 'demoname';
  
}
