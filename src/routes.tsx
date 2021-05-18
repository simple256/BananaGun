import React from 'react';
import HomePage from './pages/Home';
import EmptyPage from './pages/Empty';
import PokedexPage from './pages/Pokedex';

enum EnumLink {
  HOME = '/',
  POKEDEX = './pokedex',
  LEGENDARIES = './legendaries',
  DOCUMENTATION = './documentation',
}

interface IGeneralMenu {
  component: () => JSX.Element;
  title: string;
  link: EnumLink;
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

// interface IAccMenu {
//   [n: string]: () => JSX.Element;
// }

/**
 * FIXME: НЕ РАБОТАЕТ ENUM, всегда 404
 */
// const routes = GENERAL_MENU.reduce((acc: IAccMenu, item: IGeneralMenu) => {
//   acc[item.link] = item.component;
//   return acc;
// }, {});

/**
 * Вот так работает
 */
const routes = {
  '/': () => <HomePage />,
  '/pokedex': () => <PokedexPage />,
  '/legendaries': () => <EmptyPage title={'legendaries'} />,
  '/documentation': () => <EmptyPage title={'documentation'} />,
}

export default routes;
export {EnumLink, GENERAL_MENU};
