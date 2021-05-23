import React from 'react';
import { A, usePath } from 'hookrouter';
import cn from 'classnames';

import { GENERAL_MENU } from '../../routes';

import s from './Header.module.scss';
import { ReactComponent as PokemonLogoSVG } from './assets/Logo.svg';

const Header = () => {
  const path = usePath();
  return (
    <div className={s.root}>
      <div className={s.wrap}>
        <div className={s.pokemonLogo}>
          <PokemonLogoSVG />
        </div>
        <div className={s.menuWrap}>
          {GENERAL_MENU.map(({ title, link }) => {
            return (
              <A
                key={title}
                href={link}
                className={cn(s.menuLink, {
                  [s.activeLink]: link === path,
                })}>
                {title}
              </A>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default React.memo(Header);
