import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-navbar',
  template: `
    <nav class="app-nav">
      @for (link of links(); track link) {
        <a href="#" [class.active]="link === active()" (click)="select($event, link)">
          {{ link }}
        </a>
      }
    </nav>
  `,
})
export class Navbar {
  links = signal(['Accueil', 'Profil', 'Conférences', 'Amis', 'Notifications', 'Admin']);
  active = signal('Accueil');

  select(event: Event, link: string) {
    event.preventDefault();
    this.active.set(link);
  }
}