import React from 'react';

export interface PokemonProps {
  id: string | number;
}

const Pokemon: React.FC<PokemonProps> = ({ id }) => {
  return <div>Pokemon id {id}</div>;
};

export default Pokemon;
