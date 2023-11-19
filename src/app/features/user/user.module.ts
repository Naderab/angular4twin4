import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { HomeComponent } from 'src/app/pages/home/home.component';
import { ListUsersComponent } from 'src/app/pages/list-users/list-users.component';
import { UserComponent } from 'src/app/pages/user/user.component';
import { FormUserComponent } from 'src/app/pages/form-user/form-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormReactiveUserComponent } from 'src/app/pages/form-reactive-user/form-reactive-user.component';


@NgModule({
  declarations: [
    HomeComponent,
    ListUsersComponent,
    UserComponent,
    FormUserComponent,
    FormReactiveUserComponent,
  ],
  imports: [CommonModule, UserRoutingModule, FormsModule, ReactiveFormsModule],
})
export class UserModule {}
