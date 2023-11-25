import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListUsersComponent } from './list-users/list-users.component';
import { FormUserComponent } from './form-user/form-user.component';
import { FormReactiveUserComponent } from './form-reactive-user/form-reactive-user.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  { path: '', component: ListUsersComponent },
  { path: 'update/:id', component: FormUserComponent },
  { path: 'updateReactive/:id', component: FormReactiveUserComponent },

  { path: ':id/:name', component: UserComponent },
  { path: 'add', component: FormUserComponent },
  { path: 'addReactive', component: FormReactiveUserComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
