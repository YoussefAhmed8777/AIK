import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-authentication-layout',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './authentication-layout.component.html',
  styleUrl: './authentication-layout.component.scss'
})
export class AuthenticationLayoutComponent {

}
