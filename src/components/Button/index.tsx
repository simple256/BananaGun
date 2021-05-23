import React from 'react';
import cn from 'classnames';
import { BUTTON_COLORS, BUTTON_SIZE, BUTTON_WIDTHS } from './constants';

import s from './Button.module.scss';
import { ValueOf } from '../../utils/types';

interface IButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  width?: ValueOf<typeof BUTTON_WIDTHS>;
  color?: ValueOf<typeof BUTTON_COLORS>;
  size?: ValueOf<typeof BUTTON_SIZE>;
  className?: string;
  children?: JSX.Element;
}

const Button: React.FC<IButtonProps> = ({
  children,
  onClick,
  width = BUTTON_WIDTHS.NORMAL,
  color = BUTTON_COLORS.GREEN,
  size = BUTTON_SIZE.SMALL,
  className = '',
}) => {
  const colorClass = s[`btn__color-${color}` as keyof typeof s];
  const sizeClass = s[`btn__size-${size}` as keyof typeof s];
  const widthClass = s[`btn__width-${width}` as keyof typeof s];
  return (
    <button type="button" className={cn(s.root, colorClass, sizeClass, widthClass, className)} onClick={onClick}>
      {children}
    </button>
  );
};

export default React.memo(Button);
