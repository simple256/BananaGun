import React, { ReactElement } from 'react';
import cn from 'classnames';
import s from './Heading.module.scss';

interface IHeadingLevel {
  [n: string]: number;
}

interface IHeadingProps {
  size?: 'xs' | 's' | 'm' | 'l' | 'xl';
  className?: string;
  children?: ReactElement;
}

const HEADING_LEVEL: IHeadingLevel = {
  xl: 1,
  l: 2,
  m: 3,
  s: 4,
  xs: 5,
};

const Heading: React.FC<IHeadingProps> = ({ children, size, className }) => {
  const sizeOrDefault = size || 'm';

  const headingProps = {
    className: cn(s[sizeOrDefault], className),
  };

  return React.createElement(`h${HEADING_LEVEL[sizeOrDefault]}`, headingProps, children);
};

export default React.memo(Heading);
