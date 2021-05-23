declare module '*.svg' {
  import React from 'react';

  export const ReactComponent: React.FunctionComponent<React.SVGProps<SVGAElement>>;
  const src: string;
  export default src;
}

declare module '*.png' {
  const content: any;
  export default content;
}
