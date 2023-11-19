import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FournisseurComponent } from 'src/app/pages/fournisseur/fournisseur.component';
import { ListFournisseurComponent } from 'src/app/pages/list-fournisseur/list-fournisseur.component';

const routes: Routes = [
  { path: 'list', component: ListFournisseurComponent },
  { path: ':code/:libelle/:id', component:FournisseurComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FournisseurRoutingModule { }
