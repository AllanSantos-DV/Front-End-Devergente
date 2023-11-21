import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-cabecalho',
  templateUrl: './nav-cabecalho.component.html',
  styleUrls: ['./nav-cabecalho.component.css']
})
export class NavCabecalhoComponent {
  
  constructor(
    private router: Router
  ) { }

  inicio() {
    this.router.navigate(['/feed'])
  }
}
