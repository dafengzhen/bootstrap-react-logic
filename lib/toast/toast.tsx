import { type ElementType, useMemo } from 'react';

import type { ToastOption as IToastOption, ToastProps } from './types.ts';

import ToastContainer from './toast-container.tsx';
import ToastItem from './toast-item.tsx';

interface IOption extends IToastOption {
  id: number | string;
}

const generateInitialOptions = (options: IToastOption[] = []): IOption[] =>
  options.map((item, index) => ({
    ...item,
    id: item.id ?? index,
  }));

const Toast = <T extends ElementType = 'div'>({
  options: defaultOptions = [],
  containerProps,
  container,
  placement,
  position,
  ...rest
}: ToastProps<T>) => {
  const options = useMemo(() => generateInitialOptions(defaultOptions), [defaultOptions]);

  return container ? (
    <ToastContainer {...containerProps} placement={placement} position={position}>
      {options.map(({ id, ...restProps }) => (
        <ToastItem key={id} {...(restProps as any)} />
      ))}
    </ToastContainer>
  ) : (
    <ToastItem {...(rest as any)} />
  );
};

Toast.displayName = 'BRL.Toast';

export default Toast;
