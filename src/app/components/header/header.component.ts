import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card'
import {MatButtonModule} from '@angular/material/button'

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatButtonModule, MatCardModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
