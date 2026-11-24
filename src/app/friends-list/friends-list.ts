import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-friends-list',
  imports: [FormsModule],
  template: `
    <section class="card card-green">
      <div class="icon">👥</div>
      <div>
        <h2>Liste des amis</h2>

        <input [(ngModel)]="nom" />
        <input [(ngModel)]="nom" />
        <input [(ngModel)]="nom" />

        <ul>
          @for (ami of amis(); track ami) {
            <li>{{ ami }}</li>
          } @empty {
            <li>Aucun ami pour le moment</li>
          }
        </ul>
      </div>
    </section>
  `,
})
export class FriendsList {
  nom = signal('Ahmed');
  amis = signal(['Sami', 'Sarra', 'Amine']);
}