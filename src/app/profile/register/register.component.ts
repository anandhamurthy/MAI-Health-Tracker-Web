import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  isUser = false;

  constructor(
    private firebaseService: FirebaseService,
    private route: Router
  ) {}

  ngOnInit(): void {
    if (localStorage.getItem('user') != null) {
      this.isUser = true;
    } else {
      this.isUser = false;
    }
  }

  async onRegister(email: string, password: string) {
    this.firebaseService.signIn(email, password);
    if (this.firebaseService.isUser) {
      this.isUser = true;
    } else {
      this.isUser = false;
    }
  }

  openLogin() {
    this.route.navigateByUrl('login');
  }
}
