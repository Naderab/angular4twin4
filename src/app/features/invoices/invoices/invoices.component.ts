import { Component, OnInit } from '@angular/core';
import { Invoice } from '../../../core/models/invoice';
import { InvoiceService } from '../../../core/services/invoice.service';

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.css']
})
export class InvoicesComponent implements OnInit {
  invoices : Invoice[] = [];
  constructor(private _invoiceService:InvoiceService) { }
  ngOnInit(){
    this._invoiceService.getAllInvoices().subscribe({
      next : (data)=> this.invoices = data
    })
  }

  delete(id:number){
    this._invoiceService.deleteInvoice(id).subscribe({
      next : ()=>this.invoices = this.invoices.filter((i)=>i.id !== id)
    })
  }

  update(invoice:Invoice){
    console.log(invoice)
    this._invoiceService.updateInvoice(invoice).subscribe({
      next : ()=>this.invoices = this.invoices.map((i)=>i.id === invoice.id ? i = invoice : i)
    })
  }
}
