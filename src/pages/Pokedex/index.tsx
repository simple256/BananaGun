import React, { useEffect, useState } from 'react';
import PokemonCard from '../../components/PokemonCard';
import Heading from '../../components/Heading';

import req from '../../utils/request';

import s from './Pokedex.module.scss';

import { ICardItem } from '../../components/PokemonCard/interface';
import { IData, IPokemonData } from './interface';

const usePokemons = () => {
  const [data, setData] = useState<IData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    const getPokemons = async () => {
      setIsLoading(true);
      // const url = `${config.client.server.protocol}://${config.client.server.host}${config.client.endpoint.getPokemons.uri.pathname}`;
      try {
        const result: IData = await req<IData>('getPokemons');
        setData(result);
      } catch {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getPokemons();
  }, []);

  return {
    data,
    isError,
    isLoading,
  };
};

function PokedexPage() {
  const { data, isError, isLoading }: IPokemonData = usePokemons();
  if (isLoading) {
    return <div className={s.root}>Loading...</div>;
  }
  if (isError) {
    return <div className={s.root}>Error! Data not loaded!</div>;
  }
  return (
    <div className={s.root}>
      <Heading>
        {data?.total ? (
          <h4>
            Total count is <b>{data?.total}</b>
          </h4>
        ) : (
          <></>
        )}
      </Heading>
      <div className={s.content}>
        {((data?.pokemons as ICardItem[]) || []).map((item: ICardItem) => (
          <PokemonCard key={item.name_clean} item={item} />
        ))}
      </div>
    </div>
  );
}

export default PokedexPage;
