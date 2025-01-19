import { type ElementType } from 'react';

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
  container,
  containerProps,
  options: optionsByDefault = [],
  placement,
  position,
  ...rest
}: ToastProps<T>) => {
  if (container) {
    const options = generateInitialOptions(optionsByDefault);

    return (
      <ToastContainer {...containerProps} placement={placement} position={position}>
        {options.map(({ id, ...restProps }) => (
          <ToastItem key={id} {...restProps} />
        ))}
      </ToastContainer>
    );
  }

  return <ToastItem {...(rest as any)} />;
};

Toast.displayName = 'BRL.Toast';

export default Toast;
