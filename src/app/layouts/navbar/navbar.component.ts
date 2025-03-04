import { Component, inject, Input } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthenticationService } from '../../core/services/authentication.service';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink,],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  router=inject(Router)
  authentication=inject(AuthenticationService)
  @Input()isLoggedIn:boolean=true;

  logout():void{
    this.authentication.logout();
  }
}