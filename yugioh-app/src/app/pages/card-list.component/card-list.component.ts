
import { Component, inject, input, signal, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CardApiService } from '../../services/card-api.service';
import { Card } from '../../models/card.model';

@Component({
  imports: [RouterLink],
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
})
export class CardDetailComponent implements OnInit {
  private api = inject(CardApiService);
  id = input.required<string>();   //--url params

  card = signal<Card | null>(null);
  loading = signal(true);

  ngOnInit() {
    this.api.getCardById(Number(this.id())).subscribe({
      next: c => { this.card.set(c); this.loading.set(false); },
      error: () => this.loading.set(false),
    });
  }
}