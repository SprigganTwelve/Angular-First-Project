import { TestBed } from '@angular/core/testing';

import { PokemonApiServices } from './pokemon.api';

describe('PokemonApi', () => {
  let service: PokemonApiServices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokemonApiServices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
