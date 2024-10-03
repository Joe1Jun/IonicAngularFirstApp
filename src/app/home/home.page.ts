import { Component } from '@angular/core';
//Removed Individual Component Imports:
//Previously importing individual Ionic components directly, 
//like IonHeader, IonToolbar, IonTitle, and IonContent.This was causing errors because those components cannot be imported directly when using a standalone component.
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule], // Import only IonicModule
})
export class HomePage {
  constructor() {}

  changeText() {
    console.log('Text changed!');
  }
}


