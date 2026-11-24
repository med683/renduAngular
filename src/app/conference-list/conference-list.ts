import { Component, computed, signal } from '@angular/core';
import { DatePipe, UpperCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Conference } from '../models/conference';

@Component({
  selector: 'app-conference-list',
  imports: [FormsModule, DatePipe, UpperCasePipe],
  templateUrl: './conference-list.html',
  styleUrl: './conference-list.css',
})
export class ConferenceList {
  conferences = signal<Conference[]>([
    {
      id: 1,
      title: 'Angular 21 Conference',
      description: 'Les nouveautés d’Angular 21',
      date: new Date(2027, 10, 15),
      place: 'Tunis',
      maxParticipants: 100,
      nbParticipants: 75,
    },
    {
      id: 2,
      title: 'Signals Workshop',
      description: 'Atelier pratique sur les Signals',
      date: new Date(2027, 10, 30),
      place: 'Ariana',
      maxParticipants: 50,
      nbParticipants: 44,
    },
    {
      id: 3,
      title: 'Web Conference',
      description: 'Les tendances du développement web',
      date: new Date(2027, 10, 20),
      place: 'Sousse',
      maxParticipants: 30,
      nbParticipants: 30,
    },
  ]);

  search = signal('');

  filtered = computed(() => {
    const term = this.search().trim().toLowerCase();
    return this.conferences().filter((c) => c.title.toLowerCase().includes(term));
  });

  remaining(c: Conference): number {
    return c.maxParticipants - c.nbParticipants;
  }

  register(c: Conference) {
    if (this.remaining(c) <= 0) return;
    this.conferences.update((list) =>
      list.map((x) => (x.id === c.id ? { ...x, nbParticipants: x.nbParticipants + 1 } : x)),
    );
  }
}