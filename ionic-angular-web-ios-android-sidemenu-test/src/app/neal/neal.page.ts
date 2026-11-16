import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ApiService, Contact, Item } from '../api.service';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonBadge, IonIcon, IonList, IonItem, IonLabel, IonButtons, IonMenuButton, IonListHeader, IonNote, IonRefresher, IonRefresherContent}  from '@ionic/angular/standalone';

// import { IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent } from '@ionic/angular/standalone';


@Component({
  selector: 'app-neal',
  templateUrl: './neal.page.html',
  styleUrls: ['./neal.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButton, IonBadge, IonIcon, IonList, IonItem, IonLabel, IonButtons, IonMenuButton, IonListHeader, IonNote, IonRefresher, IonRefresherContent]
})
export class NealPage {
  private activatedRoute = inject(ActivatedRoute);
  private api = inject(ApiService);
  items: Item[] = [];
  contacts: Contact[] = [];
  error = '';

  ionViewWillEnter() {
    this.load();
  }

  load(event?: CustomEvent) {
    this.error = '';
    this.api.getItems().subscribe({
      next: (items) => { this.items = items; event && (event.target as HTMLIonRefresherElement).complete(); },
      error: () => { this.error = 'Could not reach the API. Is the backend running?'; event && (event.target as HTMLIonRefresherElement).complete(); },
    });
    this.api.getContacts().subscribe({
      next: (contacts) => (this.contacts = contacts),
      error: () => (this.error = 'Could not reach the API. Is the backend running?'),
    });
  }

}
