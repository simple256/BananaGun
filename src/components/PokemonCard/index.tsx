import React, { FC } from 'react';
import Heading from '../Heading';

import { IPokemonCard } from './interface';

import s from './PokemonCard.module.scss';
import toCapitalizeFirstLetter from '../../utils/formatter';

const PokemonCard: FC<IPokemonCard> = ({ item }) => {
  return (
    <div className={s.root}>
      <div className={s.infoWrap}>
        <Heading size="s" className={s.titleName}>
          <>{toCapitalizeFirstLetter(item.name)}</>
        </Heading>
        <div className={s.statWrap}>
          <div className={s.statItem}>
            <div className={s.statValue}>{item.stats.attack}</div>
            Attack
          </div>
          <div className={s.statItem}>
            <div className={s.statValue}>{item.stats.defense}</div>
            Defense
          </div>
        </div>
        <div className={s.labelWrap}>
          <span className={s.label}>{item.types.join(', ')}</span>
        </div>
      </div>
      <div className={s.pictureWrap}>
        <img src={item.img} alt={item.name} />
      </div>
    </div>
  );
};

export default PokemonCard;
