import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  template: `
    <section class="card card-blue">
      <div class="icon">🧑</div>
      <div>
        <h2>Profil utilisateur</h2>
        <p><strong>Nom :</strong> {{ nom() }}</p>
        <p><strong>Email :</strong> {{ email() }}</p>
      </div>
    </section>
  `,
})
export class UserProfile {
  nom = signal('Ahmed');
  email = signal('ahmed@gmail.com');
}