import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-notifications',
  template: `
    <section class="card card-orange">
      <div class="icon">🔔</div>
      <div>
        <h2>Zone de notifications</h2>
        <p>Vous avez {{ nbNotifications() }} nouvelles notifications.</p>
        <button (click)="toggle()">
          {{ visible() ? 'Masquer' : 'Afficher' }} les notifications
        </button>

        @if (visible()) {
          <ul>
            @for (n of messages(); track n) {
              <li>{{ n }}</li>
            }
          </ul>
        }
      </div>
    </section>
  `,
})
export class Notifications {
  nbNotifications = signal(2);
  messages = signal(['Nouvelle conférence : Angular 21', 'Votre inscription a été confirmée']);
  visible = signal(false);

  toggle() {
    this.visible.update((v) => !v);
  }
}