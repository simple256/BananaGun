import React from 'react';
import cn from 'classnames';
import { BUTTON_COLORS, BUTTON_SIZE, BUTTON_WIDTHS } from './constants';

import s from './Button.module.scss';
import './Button.scss';

type ValueOf<T> = T[keyof T];

interface IButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  width?: ValueOf<typeof BUTTON_WIDTHS>;
  color?: ValueOf<typeof BUTTON_COLORS>;
  size?: ValueOf<typeof BUTTON_SIZE>;
}

const Button: React.FC<IButtonProps> = ({
  children,
  onClick,
  width = BUTTON_WIDTHS.NORMAL,
  color = BUTTON_COLORS.GREEN,
  size = BUTTON_SIZE.SMALL,
}) => {
  const colorClass = `btn__color-${color}`;
  const sizeClass = `btn__size-${size}`;
  const widthClass = `btn__width-${width}`;
  return (
    <button type="button" className={cn(s.root, colorClass, sizeClass, widthClass)} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
