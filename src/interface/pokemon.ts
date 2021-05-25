const pokemonItem = {
  name_clean: 'squirtle',
  abilities: ['torrent', 'rain-dish'],
  stats: {
    hp: 44,
    attack: 48,
    defense: 65,
    'special-attack': 50,
    'special-defense': 64,
    speed: 43,
  },
  types: ['water'],
  img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png',
  name: 'squirtle',
  base_experience: 63,
  height: 5,
  id: 7,
  is_default: true,
  order: 10,
  weight: 90,
};

type PokemonRequest = typeof pokemonItem;

interface IData {
  total?: number;
  pokemons?: PokemonRequest[] | never[];
}

interface IPokemonData {
  data: IData | null;
  isError: boolean;
  isLoading: boolean;
}

export { IData, IPokemonData, PokemonRequest };
