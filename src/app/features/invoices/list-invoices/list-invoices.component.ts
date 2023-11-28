import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Invoice } from '../../../core/models/invoice';

@Component({
  selector: 'app-list-invoices',
  templateUrl: './list-invoices.component.html',
  styleUrls: ['./list-invoices.component.css']
})
export class ListInvoicesComponent {
  @Input() invoices!:Invoice[];
  @Output() deleteInvoice = new EventEmitter<number>();
  @Output() updateInvoiceParent = new EventEmitter<Invoice>();
  hide=true;
  invoice : Invoice = new Invoice();
  delete(id:number){
    this.deleteInvoice.emit(id);
  }

  update(invoice:Invoice){
    this.invoice = invoice;
    this.hide=!this.hide;
  }

  updateInvoice(invoice:Invoice){
    console.log(invoice)
    this.updateInvoiceParent.emit(invoice);
  }
}
