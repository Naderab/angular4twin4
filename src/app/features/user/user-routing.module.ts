import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormUserComponent } from 'src/app/pages/form-user/form-user.component';
import { HomeComponent } from 'src/app/pages/home/home.component';
import { ListUsersComponent } from 'src/app/pages/list-users/list-users.component';
import { UserComponent } from 'src/app/pages/user/user.component';

const routes: Routes = [
  { path: 'list', component: ListUsersComponent },
    { path: 'update/:id', component: FormUserComponent },
  { path: ':id/:name', component: UserComponent },
  {
    path: '',
    component: HomeComponent,
  },
  { path: 'add', component: FormUserComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
