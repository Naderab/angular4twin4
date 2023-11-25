import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountRoutingModule } from './account-routing.module';
import { ListAccountsComponent } from './list-accounts/list-accounts.component';
import { AccountComponent } from './account/account.component';



@NgModule({
  declarations: [
    ListAccountsComponent,
    AccountComponent
  ],
  imports: [
    CommonModule,
    AccountRoutingModule
  ]
})
export class AccountModule { }
