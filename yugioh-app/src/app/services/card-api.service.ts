import { inject, Injectable } from '@angular/core';

import { HttpClient, HttpParams } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { env } from '../../env/env';
import { Card, CardResponse, CardFilters } from '../models/model.index';


@Injectable({ providedIn: 'root' })
export class CardApiService {
  private http = inject(HttpClient);
  private base = env.apiBaseUrl;

  //-- paginated list
  getCards(filters: CardFilters = {}, num = 20, offset = 0): Observable<CardResponse> {
    let params = new HttpParams().set('num', num).set('offset', offset);

    //-- add parameters only if registered
    if (filters.fname)     params = params.set('fname', filters.fname);
    if (filters.type)      params = params.set('type', filters.type);
    if (filters.attribute) params = params.set('attribute', filters.attribute);
    if (filters.archetype) params = params.set('archetype', filters.archetype);

    return this.http.get<CardResponse>(`${this.base}/cardinfo.php`, { params });
  }

  //-- get card by id
  getCardById(id: number): Observable<Card> {
    const params = new HttpParams().set('id', id);
    return this.http
      .get<CardResponse>(`${this.base}/cardinfo.php`, { params })
      .pipe(map(res => res.data[0]));
  }

  //-- get random card
  getRandomCard(): Observable<Card> {
    return this.http.get<Card>(`${this.base}/randomcard.php`);
  }
}