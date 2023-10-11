import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { HomeComponent } from 'src/app/pages/home/home.component';
import { ListUsersComponent } from 'src/app/pages/list-users/list-users.component';
import { UserComponent } from 'src/app/pages/user/user.component';


@NgModule({
  declarations: [HomeComponent, ListUsersComponent, UserComponent],
  imports: [CommonModule, UserRoutingModule],
})
export class UserModule {}