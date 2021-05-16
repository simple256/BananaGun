import React from 'react';

import './Heading.module.scss';

interface IHeading {
  children: JSX.Element;
}

const Heading: React.FC<IHeading> = ({ children }) => {
  if (!(children?.type && children?.props?.children)) {
    return <></>;
  }
  return React.createElement(children?.type, {}, children.props.children);
};

export default Heading;
