import React from 'react';

import './Heading.module.scss';

interface IHeading {
  children: JSX.Element;
  className?: string;
}

const Heading: React.FC<IHeading> = ({ children, className }) => {
  if (!(children?.type && children?.props?.children)) {
    return <></>;
  }
  return React.createElement(children?.type, {className}, children.props.children);
};

export default Heading;
