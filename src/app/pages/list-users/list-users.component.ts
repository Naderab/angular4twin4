import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/core/user';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css'],
})
export class ListUsersComponent {

  constructor(private _router:Router) {}
  listUsers: User[] = [
    {
      idCustomer: 1,
      firstName: 'Mila',
      lastName: ' Kunis',
      birthDate: '1999-06-30',
      accountCategory: 'Admin',
      email: 'mila@kunis.com',
      password: 'test',
      picture: 'https://bootdey.com/img/Content/avatar/avatar3.png',
      profession: 'Software Engineer',
    },
    {
      idCustomer: 2,
      firstName: 'George',
      lastName: 'Clooney',
      birthDate: '1999-06-30',
      accountCategory: 'Customer',
      email: 'marlon@brando.com',
      password: 'test',
      picture: 'https://bootdey.com/img/Content/avatar/avatar2.png',
      profession: 'Software Engineer',
    },
    {
      idCustomer: 3,
      firstName: 'George',
      lastName: 'Clooney',
      birthDate: '1999-06-30',
      accountCategory: 'Customer',
      email: 'marlon@brando.com',
      password: 'test',
      picture: 'https://bootdey.com/img/Content/avatar/avatar1.png',
      profession: 'Software Engineer',
    },
    {
      idCustomer: 4,
      firstName: 'Ryan',
      lastName: 'Gossling',
      birthDate: '1999-06-30',
      accountCategory: 'Golden',
      email: 'Ryan@nicholson.com',
      password: 'test',
      picture: 'https://bootdey.com/img/Content/avatar/avatar4.png',
      profession: 'Software Engineer',
    },
    {
      idCustomer: 5,
      firstName: 'Robert',
      lastName: 'Downey',
      birthDate: '1999-06-30',
      accountCategory: 'Blocked Account',
      email: 'robert@nicholson.com',
      password: 'test',
      picture: 'https://bootdey.com/img/Content/avatar/avatar5.png',
      profession: 'Software Engineer',
    },
  ];

  ToDetails(user:User) {
    this._router.navigate(['user',user.idCustomer,user.firstName]);
  }
}