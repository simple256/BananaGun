import React, { useState } from 'react';
import PokemonCard from '../../components/PokemonCard';
import Heading from '../../components/Heading';

import s from './Pokedex.module.scss';

import { useData } from '../../hook/getData';
import { IPokemonData, PokemonRequest } from '../../interface/pokemon';
import useDebounce from '../../hook/useDebounce';

interface IQuery {
  name?: string;
  limit?: number;
}

function PokedexPage() {
  const [searchValue, setSearchValue] = useState('');
  const [query, setQuery] = useState<IQuery>({ limit: 12 });

  const debounceValue = useDebounce(searchValue, 500);

  const { data, isError, isLoading }: IPokemonData = useData('getPokemons', query, [debounceValue]);
  if (isLoading) {
    return <div className={s.root}>Loading...</div>;
  }
  if (isError) {
    return <div className={s.root}>Error! Data not loaded!</div>;
  }
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const updatedValue = event.target.value;
    setSearchValue(updatedValue);
    setQuery((state: IQuery) => ({
      ...state,
      name: updatedValue,
    }));
  };
  return (
    <div className={s.root}>
      <Heading size="m" className={s.inputTitle}>
        <div>
          {data?.total} <b>Pokemons</b> for you to choose your favorite
        </div>
      </Heading>
      <div className={s.inputContainer}>
        <input
          className={s.inputField}
          placeholder="Encuentra tu pokémon..."
          type="text"
          value={searchValue}
          onChange={handleSearchChange}
        />
      </div>
      <div className={s.content}>
        {((data?.pokemons as PokemonRequest[]) || []).map((item: PokemonRequest) => (
          <PokemonCard key={item.name_clean} item={item} />
        ))}
      </div>
    </div>
  );
}

export default PokedexPage;
