import * as React from 'react';

export type IntrinsicElements = React.JSX.IntrinsicElements;

export type SlotValue =
  | string
  | ((originalClass: string) => string | undefined);
