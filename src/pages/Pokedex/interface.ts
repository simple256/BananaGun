import { ICardItem } from '../../components/PokemonCard/interface';

interface IData {
  total?: number;
  pokemons?: ICardItem[] | never[];
}

interface IPokemonData {
  data: IData | null;
  isError: boolean;
  isLoading: boolean;
}

export { IData, IPokemonData };
