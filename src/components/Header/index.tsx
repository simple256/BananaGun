import React from 'react';

import s from './Header.module.scss';

import { ReactComponent as PokemonLogoSVG } from './assets/Logo.svg';

interface IMenuItem {
  id: number;
  value: string;
  link: string;
}

const MENU: IMenuItem[] = [
  {
    id: 1,
    value: 'Home',
    link: '#',
  },
  {
    id: 2,
    value: 'Pokédex',
    link: '#',
  },
  {
    id: 3,
    value: 'Legendaries',
    link: '#',
  },
  {
    id: 4,
    value: 'Documentation',
    link: '#',
  },
];

const Index = () => {
  return (
    <div className={s.root}>
      <div className={s.wrap}>
        <div className={s.pokemonLogo}>
          <PokemonLogoSVG />
        </div>
        <div className={s.menuWrap}>
          {MENU.map(({ link, value, id }) => (
            <a key={id} href={link} className={s.menuLink}>
              {value}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
