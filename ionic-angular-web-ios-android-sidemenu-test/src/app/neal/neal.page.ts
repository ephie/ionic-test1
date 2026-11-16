import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonBadge, IonIcon, IonList, IonItem, IonLabel, IonButtons, IonMenuButton} from '@ionic/angular/standalone';

// import { IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent } from '@ionic/angular/standalone';


@Component({
  selector: 'app-neal',
  templateUrl: './neal.page.html',
  styleUrls: ['./neal.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButton, IonBadge, IonIcon, IonList, IonItem, IonLabel, IonButtons, IonMenuButton]
})
export class NealPage {
  private activatedRoute = inject(ActivatedRoute);
  constructor() { }

}
