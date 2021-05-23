import React from 'react';
import pokemons from './constants';
import PokemonCard, { ICardItem } from '../../components/PokemonCard';
import Header from '../../components/Header';

import s from './Pokedex.module.scss';

function PokedexPage() {
  return (
    <div className={s.root}>
      <Header />
      <div className={s.content}>
        {(pokemons as ICardItem[]).map((item: ICardItem) => (
          <PokemonCard key={item.name_clean} item={item} />
        ))}
      </div>
    </div>
  );
}

export default PokedexPage;
