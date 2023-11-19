import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { ListUsersComponent } from './pages/list-users/list-users.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { UserComponent } from './pages/user/user.component';

const routes: Routes = [
  { path: 'home', component: HeaderComponent }, 
  {
    path: 'user', component: HomeComponent, children: [
      { path: 'list', component: ListUsersComponent },
      { path: ':id/:name', component: UserComponent },
    ]
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
