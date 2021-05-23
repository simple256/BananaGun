import React from 'react';
import { navigate } from 'hookrouter';

import s from './Home.module.scss';
import Button from '../../components/Button';
import Layout from '../../components/Layout';
import Parallax from '../../components/Parallax';

import { BUTTON_COLORS, BUTTON_SIZE, BUTTON_WIDTHS } from '../../components/Button/constants';
import Heading from '../../components/Heading';

const HomePage = () => {
  return (
    <div className={s.root}>
      <Layout className={s.contentWrap}>
        <div className={s.leftContent}>
          <div className={s.contentText}>
            <Heading>
              <h1>
                <b>Find</b>
                <> all your favorite </>
                <b>Pokemon</b>
              </h1>
            </Heading>
            <Heading>
              <h3>You can know the type of Pokemon, its strengths, disadvantages and abilities</h3>
            </Heading>
          </div>
          <Button
            // EnumLink не работает с ENUM  onClick={() => navigate('/pokedex')}
            onClick={() => navigate('/pokedex')}
            width={BUTTON_WIDTHS.NORMAL}
            size={BUTTON_SIZE.SMALL}
            className=""
            color={BUTTON_COLORS.GREEN}>
            <>See pokemons</>
          </Button>
        </div>
        <Parallax />
      </Layout>
    </div>
  );
};

export default HomePage;
