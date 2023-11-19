import { Component } from '@angular/core';

@Component({
  selector: 'app-fournisseur',
  templateUrl: './fournisseur.component.html',
  styleUrls: ['./fournisseur.component.css']
})
export class FournisseurComponent {
    idFournisseur = 105;
    code = 'A104B89';
  libelle = 'MyTeck';
  hide = false;

  changeHide() {
    this.hide = !this.hide;
  }
}
