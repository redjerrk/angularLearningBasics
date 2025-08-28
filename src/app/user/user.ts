import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user',
  imports: [FormsModule],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User implements OnInit {
  http = inject(HttpClient);

  userList: any[] = [];

  userObj = {
    id: 0,
    code: '',
    name: '',
    regionImageUrl: '',
    
  };

  ngOnInit(): void {
    this.getUserList();
  }

  getUserList() {
    this.http
      .get('https://localhost:7001/api/Regions')
      .subscribe((result: any) => {
        this.userList = result;
      });
  }

  createNewUser() {
    this.http
      .post('https://localhost:7001/api/Regions', this.userObj)
      .subscribe({
        next: (result) => {
          alert('New User Created');
          this.getUserList();
        },
        error: (error) => {
          alert('Error:' + error.error);
        },
      });
  }
  onReset() {
    this.userObj = {
      id: 0,
      code: '',
      name: '',
      regionImageUrl: '',
    };
  }

  onEdit(user: any) {
    this.userObj = user;
  }

  updateUser() {
    this.http
      .put('https://localhost:7001/api/Regions/' + this.userObj.id, this.userObj)
      .subscribe({
        next: () => {
          alert('User Updated');
          this.getUserList();
        },
        error: (error) => {
          alert('Error:' + error.error);
        },
      });
  }

  onDelete(id: number) {
    const isDelete = confirm('Are you Sure you want to delete?');
    if (isDelete) {
      this.http.delete('https://localhost:7001/api/Regions/' + id).subscribe({
        next: () => {
          alert('User Deleted');
          this.getUserList();
        },
        error: (error) => {
          alert('Error:' + error.error);
        },
      });
    }
  }
}
