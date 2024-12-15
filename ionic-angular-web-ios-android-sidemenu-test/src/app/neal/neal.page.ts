import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonBadge, IonIcon, IonList, IonItem, IonLabel } from '@ionic/angular/standalone';

@Component({
  selector: 'app-neal',
  templateUrl: './neal.page.html',
  styleUrls: ['./neal.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButton, IonBadge, IonIcon, IonList, IonItem, IonLabel]
})
export class NealPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
