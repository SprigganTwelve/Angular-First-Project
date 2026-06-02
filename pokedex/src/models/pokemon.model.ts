
//-- list array
export interface PokemonListResponse {
  count: number;
  results: { name: string; url: string }[];
}

//-- leight-weight data retreival
export interface PokemonPreview {
  name: string;
  id: number;
  image: string;
}

//-- Details response
export interface PokemonDetail {
  id: number;
  name: string;
  height: number;   //  décimètres
  weight: number;   //  hectogrammes
  types: { type: { name: string } }[];
  stats: { base_stat: number; stat: { name: string } }[];
  sprites: {
    other: {
      'official-artwork': { front_default: string };
    };
  };
}