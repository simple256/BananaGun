import React from 'react';
import pokemons from './constants';
import PokemonCard from '../../components/PokemonCard';
import Header from '../../components/Header';

import s from './Pokedex.module.scss';

function PokedexPage() {
  return (
    <div className={s.root}>
      <Header />
      <div className={s.content}>
        { (pokemons as Array<object>).map((item) => <PokemonCard item={item}/>) }
      </div>
    </div>

  );
}

export default PokedexPage;
