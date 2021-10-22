import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  isUser = false;

  constructor(
    private firebaseService: FirebaseService,
    private route: Router
  ) {}

  ngOnInit(): void {
    if (localStorage.getItem('user') != null) {
      this.isUser = true;
      this.route.navigateByUrl('dashboard');
    } else {
      this.isUser = false;
    }
  }

  async onLogin(email: string, password: string) {
    console.log(email, password);

    await this.firebaseService.signIn(email, password);
    if (this.firebaseService.isUser) {
      this.isUser = true;
      this.route.navigateByUrl('dashboard');
    } else {
      this.isUser = false;
    }
  }

  openRegister() {
    this.route.navigateByUrl('register');
  }
}
