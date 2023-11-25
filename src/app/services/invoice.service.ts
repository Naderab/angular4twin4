import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Invoice } from '../core/invoice';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {
  apiUrl = environment.baseUrl+'invoices/';

  constructor(private _http:HttpClient) { }

  getAllInvoices(){
    return this._http.get<Invoice[]>(this.apiUrl);
  }
  getInvoiceById(id:number){
    return this._http.get<Invoice>(this.apiUrl+id);
  }
  addInvoice(invoice:Invoice){
    return this._http.post<Invoice>(this.apiUrl,invoice);
  }
  deleteInvoice(id:number){
    return this._http.delete<Invoice>(this.apiUrl+id);
  }
  updateInvoice(invoice:Invoice){
    return this._http.put<Invoice>(this.apiUrl+invoice.id,invoice);
  }
}
