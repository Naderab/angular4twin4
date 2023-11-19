import { Component, OnInit } from '@angular/core';
import { Account } from 'src/app/core/account';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-list-accounts',
  templateUrl: './list-accounts.component.html',
  styleUrls: ['./list-accounts.component.css']
})
export class ListAccountsComponent implements OnInit {
  listAccounts:Account[]=[]
    constructor(private accountService:AccountService){}
  ngOnInit() {
    this.accountService.getAllAcounts().subscribe({
      next: (data)=> this.listAccounts = data
    })
  }

  delete(event:any) {
    console.log(event)
    this.accountService.deleteAccount(event).subscribe({
      next:()=>this.listAccounts = this.listAccounts.filter((a)=>a.id!==event)
    });
  }
}
