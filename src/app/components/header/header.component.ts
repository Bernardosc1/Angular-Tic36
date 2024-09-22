import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card'
import {MatButtonModule} from '@angular/material/button'
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatButtonModule, MatCardModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(private router: Router) {} 
//Direciona o usuario para a url de login
  login(): void {
    this.router.navigate(['/']);
  }
}
