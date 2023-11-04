import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/core/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.css']
})
export class FormUserComponent implements OnInit{

  user: User = new User();
  id = 0;
  constructor(private userService:UserService,private router:Router,private ac:ActivatedRoute){}
  ngOnInit() {
    this.id = this.ac.snapshot.params['id'];
    if (this.id !== undefined) {
      this.userService.fetchUserById(this.id).subscribe({
        next : (data)=>this.user = data as User
      })
    }
  }
  add(f: NgForm) {
    console.log(typeof(f.value))
    console.log("function works !")
    if (this.id !== undefined) {
      this.userService.updateUser(this.user, this.id).subscribe({
        next: () => this.router.navigate(['/user/list']),
      });
    } else {
      this.userService.addUser(this.user).subscribe({
        next: () => this.router.navigate(['/user/list']),
      });
    }
  }

  getButtonMessage() {
    console.log(this.id)
    return this.id !== undefined ? 'Update user' : 'Add user';
  }
}
