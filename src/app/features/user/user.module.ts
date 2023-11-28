import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListUsersComponent } from './list-users/list-users.component';
import { UserComponent } from './user/user.component';
import { FormUserComponent } from './form-user/form-user.component';
import { FormReactiveUserComponent } from './form-reactive-user/form-reactive-user.component';
import { ErrorComponent } from '../../components/error/error.component';



@NgModule({
  declarations: [
    ListUsersComponent,
    UserComponent,
    FormUserComponent,
    FormReactiveUserComponent,
    ErrorComponent
  ],
  imports: [CommonModule, UserRoutingModule, FormsModule, ReactiveFormsModule],
})
export class UserModule {}
