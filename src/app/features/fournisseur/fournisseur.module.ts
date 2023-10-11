import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FournisseurRoutingModule } from './fournisseur-routing.module';
import { FournisseurComponent } from 'src/app/pages/fournisseur/fournisseur.component';
import { ListFournisseurComponent } from 'src/app/pages/list-fournisseur/list-fournisseur.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [FournisseurComponent, ListFournisseurComponent],
  imports: [CommonModule, FournisseurRoutingModule, FormsModule],
})
export class FournisseurModule {}
