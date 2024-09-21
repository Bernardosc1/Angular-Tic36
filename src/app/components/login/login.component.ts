import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'] 
})
export class LoginComponent {
  login: string = "admin";
  senha: string = "admin";

  @ViewChild('login') userLogin!: ElementRef;
  @ViewChild('password') userSenha!: ElementRef;

  constructor(private router: Router) {} 

  log(): void {
    const inputLogin = this.userLogin.nativeElement.value;
    const inputSenha = this.userSenha.nativeElement.value;

    if (inputLogin === this.login && inputSenha === this.senha) {
      this.router.navigate(['/register']);
    } else {
      alert("Login ou senha incorretos!");
    }
  }

  register(): void {
    this.router.navigate(['/register']);
  }
}
