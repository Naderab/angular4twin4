import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Account } from 'src/app/core/account';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
})
export class AccountComponent implements OnChanges {
  // test = 10;
  @Input() account!: Account;
  @Output() d = new EventEmitter<number>();

  deleteChild(id: number) {
    this.d.emit(id);
    // this.d.emit(this.test)
    // console.log(
    //   this.d.subscribe({
    //     next: (data:number) => console.log(data),
    //   })
    // );
  }

  ngOnChanges(changes: SimpleChanges): void {
      console.log(changes)
  }
}
