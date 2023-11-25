import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { FormsModule } from '@angular/forms';
import { ProductComponent } from './product/product.component';
import { UserService } from '../../core/services/user.service';


@NgModule({
  declarations: [ProductComponent],
  imports: [CommonModule, ProductRoutingModule, FormsModule],
  providers: [UserService],
})
export class ProductModule {}
