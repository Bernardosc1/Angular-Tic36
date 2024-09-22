import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule, Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [MatButtonModule, MatCardModule, RouterModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  //Referenciando variaveis
  @ViewChild('login') userLogin!: ElementRef;
  @ViewChild('password') userPassword!: ElementRef;
  @ViewChild('confirmPassword') confirmPassword!: ElementRef;

  constructor(private router: Router) {} 
  
  
  register(): void {
    const userLogin = this.userLogin.nativeElement.value;
    const userPassword = this.userPassword.nativeElement.value;
    const confirmPassword = this.confirmPassword.nativeElement.value;
    //Condicional para verificação de preenchimento dos campos
    if(userLogin != "" && userPassword != "" && confirmPassword !="") {
      //Condicional para verificação de igualdade das senhas digitadas
        if (userPassword === confirmPassword) {
          alert("Sucessful user register")
        } else{
          alert("The password are diferent!")
        }
      } else{
      alert("All the fields have to been used!")}
      
    }
  
  
  
  log(): void {
    this.router.navigate(['/']);
  }

}
