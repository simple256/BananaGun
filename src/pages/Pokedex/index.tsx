import React from 'react';
import pokemons from './constants';
import PokemonCard from '../../components/PokemonCard';

import s from './Pokedex.module.scss';

import { ICardItem } from '../../components/PokemonCard/interface';

function PokedexPage() {
  return (
    <div className={s.root}>
      <div className={s.content}>
        {(pokemons as ICardItem[]).map((item: ICardItem) => (
          <PokemonCard key={item.name_clean} item={item} />
        ))}
      </div>
    </div>
  );
}

export default PokedexPage;
