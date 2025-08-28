import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-api',
  imports: [],
  templateUrl: './get-api.html',
  styleUrl: './get-api.css'
})
export class GetAPI implements OnInit {

  http = inject(HttpClient);
  userList: any[] = [];
  todoList: any[] = [];
  catList: any[] = [];
  busBookingUser: any[] = [];
  regionList: any[] = [];

  ngOnInit(): void {
    this.getUser();
    this.getTodo();
    this.getCat();
    this.getBusUser();
    this.getRegion();
  }

  getUser(){
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe((result: any) => {
      this.userList = result;
    });
  }
  getTodo(){
    this.http.get('https://jsonplaceholder.typicode.com/todos').subscribe((result: any) => {
      this.todoList = result;
    })
  }

  getCat(){
    this.http.get('https://api.thecatapi.com/v1/images/search?limit=10').subscribe((response: any) => {
      this.catList  = response;
    });
  }

  getBusUser(){
    this.http.get("https://api.freeprojectapi.com/api/BusBooking/GetAllUsers").subscribe((result:any) =>{
      this.busBookingUser = result.data;
    })
  }
  getRegion(){
    
    this.http
      .get('https://localhost:7001/api/Regions')
      .subscribe((result: any) => {
        this.regionList = result;
      
      });
  }

}
