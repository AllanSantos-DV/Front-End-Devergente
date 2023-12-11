import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DialogComponent } from '../dialogComponent/DialogComponent';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-nav-cabecalho',
  templateUrl: './nav-cabecalho.component.html',
  styleUrls: ['./nav-cabecalho.component.css']
})
export class NavCabecalhoComponent {

  constructor(private router: Router, private dialog: MatDialog) { }

  inicio() {
    this.router.navigate(['/feed']).then(r => {
      console.log(r);
      window.scrollTo(0, 0);
    });
  }

  logout() {
    this.dialog.open(DialogComponent, {
      data: { message: 'Tem certeza de que deseja sair?' }
    }).afterClosed().subscribe(result => {
      if (result) {
        localStorage.removeItem('token');
        this.router.navigate(['/login']).then(r => console.log(r));
      }
    });
  }

}
