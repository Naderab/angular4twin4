import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  { path: 'home', component: HeaderComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'fournisseur',
    loadChildren: () =>
      import('./features/fournisseur/fournisseur.module').then(
        (m) => m.FournisseurModule
      ),
  },
  {
    path: 'product',
    loadChildren: () =>
      import('./features/product/product.module').then((m) => m.ProductModule),
  },
  {
    path: 'user',
    loadChildren: () =>
      import('./features/user/user.module').then((m) => m.UserModule),
  },
  {
    path: 'account',
    loadChildren: () =>
      import('./features/account/account.module').then((m) => m.AccountModule),
  },
  {
    path:'invoices',
    loadChildren:() => 
      import('./features/invoices/invoices.module').then((m) => m.InvoicesModule)  
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
