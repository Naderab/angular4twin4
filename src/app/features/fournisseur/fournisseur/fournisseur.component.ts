import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-fournisseur',
  templateUrl: './fournisseur.component.html',
  styleUrls: ['./fournisseur.component.css']
})
export class FournisseurComponent {
  idFournisseur = '';
  code = '';
  libelle = '';
  constructor(private _activated: ActivatedRoute) {
    this._activated.paramMap.subscribe((p) => {
      this.code = p.get('code')!;
      this.libelle = p.get('libelle')!;
      this.idFournisseur = p.get('id')!;
    })
  }  
  hide = false;
  changeHide() {
    this.hide = !this.hide;
  }
}
