import React from 'react';

import s from './Empty.module.scss';

interface IEmptyPage {
  title: string;
}
const EmptyPage: React.FC<IEmptyPage> = ({ title }) => {
  return (
    <div className={s.root}>
      <div>Empty page for {title}</div>
    </div>
  );
};

export default EmptyPage;
