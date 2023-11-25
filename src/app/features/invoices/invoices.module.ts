import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvoicesRoutingModule } from './invoices-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InvoicesComponent } from 'src/app/pages/invoices/invoices.component';
import { ListInvoicesComponent } from 'src/app/pages/list-invoices/list-invoices.component';
import { InvoiceComponent } from 'src/app/pages/invoice/invoice.component';
import { FormInvoiceComponent } from 'src/app/pages/form-invoice/form-invoice.component';


@NgModule({
  declarations: [
    InvoicesComponent,
    ListInvoicesComponent,
    InvoiceComponent,
    FormInvoiceComponent
  ],
  imports: [
    CommonModule,
    InvoicesRoutingModule,
    ReactiveFormsModule
  ]
})
export class InvoicesModule { }
