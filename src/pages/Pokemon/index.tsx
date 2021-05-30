import React from 'react';
import useData from '../../hook/getData';
import { PokemonRequest } from '../../interface/pokemon';

export interface PokemonProps {
  id: string | number;
}

const Pokemon: React.FC<PokemonProps> = ({ id }) => {
  const { data, isLoading } = useData<PokemonRequest>('getPokemon', { id });
  return isLoading ? <div>Loading...</div> : <div>This pokemon id equal {data?.name}</div>;
};

export default Pokemon;
