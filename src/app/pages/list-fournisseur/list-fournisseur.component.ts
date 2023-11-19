import { Component } from '@angular/core';
import { Fournisseur } from '../../core/fournisseur';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-fournisseur',
  templateUrl: './list-fournisseur.component.html',
  styleUrls: ['./list-fournisseur.component.css'],
})
export class ListFournisseurComponent {

  constructor(private _router:Router) {}
  search = '';
  listFournisseurs: Fournisseur[] = [
    { idFournisseur: 1, code: '1ABC4522', libelle: 'hp' },
    { idFournisseur: 2, code: '2ABC4522', libelle: 'dell' },
    { idFournisseur: 3, code: '3ABC4522', libelle: 'lenovo' },
    { idFournisseur: 400, code: '40ABC452', libelle: 'asus' },
  ];
  deleteFournisseur(f: Fournisseur) {
    this.listFournisseurs = this.listFournisseurs.filter(
      (element) => element.idFournisseur != f.idFournisseur
    );
  }
  Onsearch() {
    let list2 = [
      { idFournisseur: 1, code: '1ABC4522', libelle: 'hp' },
      { idFournisseur: 2, code: '2ABC4522', libelle: 'dell' },
      { idFournisseur: 3, code: '3ABC4522', libelle: 'lenovo' },
      { idFournisseur: 400, code: '40ABC452', libelle: 'asus' },
    ];

    if (this.search == '') {
      this.listFournisseurs = list2;
    } else {
      this.listFournisseurs = this.listFournisseurs.filter(
        (e) => e.libelle == this.search
      );
    }
  }

  toDetails(f: Fournisseur) {
    this._router.navigate(['fournisseur',f.code,f.libelle,f.idFournisseur])
  }
}
