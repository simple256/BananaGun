import React from 'react';
import { navigate } from 'hookrouter';
import Button from '../../components/Button';
import { BUTTON_COLORS, BUTTON_SIZE, BUTTON_WIDTHS } from '../../components/Button/constants';

import s from './NotFound.module.scss';
import { ReactComponent as RocketTrioLogoSVG } from './assets/Team_Rocket_trio_OS.svg';

const NotFoundPage = () => {
  return (
    <div className={s.root}>
      <div className={s.errorCode}>
        404
      </div>
      <div className={s.rocketTeamLogo}>
        <RocketTrioLogoSVG />
      </div>
      <div className={s.text}>
        <h3 className={s['text-first']}>The rocket team&nbsp;</h3>
        <h3 className={s['text-second']}>has won this time.</h3>
      </div>
      <Button
        className={s.buttonReturn}
        onClick={() => navigate('/')}
        width={BUTTON_WIDTHS.NORMAL}
        size={BUTTON_SIZE.BIG}
        color={BUTTON_COLORS.YELLOW}>
        Return
      </Button>
    </div>
  );
};

export default NotFoundPage;
