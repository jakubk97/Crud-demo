import { Component,HostListener } from '@angular/core';
import { TokenStorageService } from './auth/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Cars shop';
  roles: string[];
  authority: string;
  token: string;
  

  constructor(private tokenStorage: TokenStorageService) { }

  ngOnInit() {
    if (this.tokenStorage.getToken()) {
      this.roles = this.tokenStorage.getAuthorities();
      this.roles.every(role => {
        if (role === 'ROLE_admin') {
          this.authority = 'admin';
          this.token = this.tokenStorage.getToken();
          return false;
        }
        this.authority = 'user';
        this.token = this.tokenStorage.getToken();
        return true;
      });
    }
  }

  logout() {
    this.tokenStorage.signOut();
    this.token = '';
    window.location.reload();
  }
}


