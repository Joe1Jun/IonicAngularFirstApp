import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule]
})
export class LoginPage implements OnInit {

  constructor(private router :Router) { }

  ngOnInit() {
  }

  logMeIn() {
    //For logging in user
    this.router.navigate(['home']);
  }
}
