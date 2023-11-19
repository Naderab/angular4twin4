import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from 'src/app/pages/product/product.component';
import { FormsModule } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';


@NgModule({
  declarations: [ProductComponent],
  imports: [CommonModule, ProductRoutingModule, FormsModule],
  providers: [UserService],
})
export class ProductModule {}
