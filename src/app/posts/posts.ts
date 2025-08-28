import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-posts',
  imports: [FormsModule],
  templateUrl: './posts.html',
  styleUrl: './posts.css',
})
export class Posts implements OnInit {
  http = inject(HttpClient);

  postObj = {
    id: 0,
    title: '',
    body: '',
    userId: ''
  };

  postList: any[] = [];

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts() {
    this.http
      .get('https://jsonplaceholder.typicode.com/posts')
      .subscribe((result: any) => {
        this.postList = result;
      });
  }

  savePost(){
    this.http.post('https://jsonplaceholder.typicode.com/posts', this.postObj).subscribe({
      next: (result) =>
      {
        alert("created Successfully");
        this.getPosts();
      },
      error: (error)=>{
        alert('error: ' + error.error)
      }
    });
  }

  onEdit(obj:any){

  }
}
