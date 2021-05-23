import React from 'react';
import Header from '../../components/Header';

import s from './Empty.module.scss';

interface IEmptyPage {
  title: string;
}
const EmptyPage: React.FC<IEmptyPage> = ({ title }) => {
  return (
    <div className={s.root}>
      <Header />
      <div>Empty page for {title}</div>
    </div>
  );
};

export default EmptyPage;
