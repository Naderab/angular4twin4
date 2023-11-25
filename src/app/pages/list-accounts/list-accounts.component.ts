import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Account } from 'src/app/core/account';
import { AccountService } from 'src/app/services/account.service';
import { AccountComponent } from '../account/account.component';

@Component({
  selector: 'app-list-accounts',
  templateUrl: './list-accounts.component.html',
  styleUrls: ['./list-accounts.component.css']
})
export class ListAccountsComponent implements OnInit {
  listAccounts:Account[]=[]
  property = 0 ;
    constructor(private accountService:AccountService){}
  changeProperty(){
    this.property = 1;
  }
  ngOnInit() {
    //this.child.start()
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
