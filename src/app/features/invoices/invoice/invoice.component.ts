import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Invoice } from '../../../core/models/invoice';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent {
@Input() invoice!:Invoice;
@Output() d=new EventEmitter<number>();
@Output() u=new EventEmitter<Invoice>();
delete(id:number){
  this.d.emit(id);
}

update(invoice:Invoice){
  this.u.emit(invoice);
}
}
