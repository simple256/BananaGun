import React, { PropsWithChildren } from 'react';
import HomePage from './pages/Home';
import EmptyPage from './pages/Empty';
import PokedexPage from './pages/Pokedex';
import Pokemon, { PokemonProps } from './pages/Pokemon';

enum EnumLink {
  HOME = '/',
  POKEDEX = '/pokedex',
  LEGENDARIES = '/legendaries',
  DOCUMENTATION = '/documentation',
  POKEMON = '/pokedex/:id',
}

type AnyPropsWithChildren = PropsWithChildren<any>;

interface IGeneralMenu {
  component: (props: AnyPropsWithChildren) => JSX.Element;
  title: string;
  link: EnumLink;
}

interface IAccMenu {
  [n: string]: (props: AnyPropsWithChildren) => JSX.Element;
}

const GENERAL_MENU: IGeneralMenu[] = [
  {
    title: 'Home',
    link: EnumLink.HOME,
    component: () => <HomePage />,
  },
  {
    title: 'Pokédex',
    link: EnumLink.POKEDEX,
    component: () => <PokedexPage />,
  },
  {
    title: 'Legendaries',
    link: EnumLink.LEGENDARIES,
    component: () => <EmptyPage title="Legendaries" />,
  },
  {
    title: 'Documentation',
    link: EnumLink.DOCUMENTATION,
    component: () => <EmptyPage title="Documentation" />,
  },
];

const SECOND_ROUTES: IGeneralMenu[] = [
  {
    title: 'Pokemon',
    link: EnumLink.POKEMON,
    component: ({ id }: PokemonProps) => <Pokemon id={id} />,
  },
];

/**
 * FIXME: НЕ РАБОТАЕТ ENUM, всегда 404
 */
const routes = [...GENERAL_MENU, ...SECOND_ROUTES].reduce((acc: IAccMenu, item: IGeneralMenu) => {
  acc[item.link] = item.component;
  return acc;
}, {});

export { routes, EnumLink, GENERAL_MENU };
