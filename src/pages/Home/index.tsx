import React from 'react';
import Header from '../../components/Header';

import s from './Home.module.scss';
import Button from '../../components/Button/index';
import Layout from '../../components/Layout';
import Parallax from '../../components/Parallax';

import { BUTTON_COLORS, BUTTON_SIZE, BUTTON_WIDTHS } from '../../components/Button/constants';
import Heading from '../../components/Heading';

const HomePage = () => {
  return (
    <div className={s.root}>
      <Header />
      <Layout className={s.contentWrap}>
        <div className={s.leftContent}>
          <div className={s.contentText}>
            <Heading>
              <h1>Find all your favorite Pokemon</h1>
            </Heading>
            <Heading>
              <h3>You can know the type of Pokemon, its strengths, disadvantages and abilities</h3>
            </Heading>
          </div>
          <Button
            onClick={() => true}
            width={BUTTON_WIDTHS.NORMAL}
            size={BUTTON_SIZE.SMALL}
            color={BUTTON_COLORS.GREEN}>
            See pokemons
          </Button>
        </div>
        <Parallax />
      </Layout>
    </div>
  );
};

export default HomePage;
