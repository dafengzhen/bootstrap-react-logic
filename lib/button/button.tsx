import type { Props } from '@lib/button/types.ts';
import clsx from 'clsx';

export default function Button(props: Props) {
  const { className, variant = 'primary', as } = props;

  const Component = as || 'button';

  return (
    <Component
      className={clsx('btn', `btn-${variant}`, className)}
      role="button"
    >
      btn
    </Component>
  );
}
