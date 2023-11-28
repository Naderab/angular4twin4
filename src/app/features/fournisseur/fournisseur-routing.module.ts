import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListFournisseurComponent } from './list-fournisseur/list-fournisseur.component';
import { FournisseurComponent } from './fournisseur/fournisseur.component';

const routes: Routes = [
  { path: 'list', component: ListFournisseurComponent },
  { path: ':code/:libelle/:id', component:FournisseurComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FournisseurRoutingModule { }
