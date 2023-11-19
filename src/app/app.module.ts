import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './pages/product/product.component';
import { FormsModule } from '@angular/forms';
import { FournisseurComponent } from './pages/fournisseur/fournisseur.component';
import { ListFournisseurComponent } from './pages/list-fournisseur/list-fournisseur.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { ListUsersComponent } from './pages/list-users/list-users.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    FournisseurComponent,
    ListFournisseurComponent,
    NavbarComponent,
    HeaderComponent,
    HomeComponent,
    ListUsersComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
