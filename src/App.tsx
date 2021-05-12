import React from 'react';
import cn from 'classnames';
import style from './app.module.scss';

const App = () => {
  return <div className={cn(style.header, 'color-whitesmoke')}>Hello, I react App Component!</div>;
};

export default App;
