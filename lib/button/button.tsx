import type { Props } from '@lib/button/types.ts';
import clsx from 'clsx';

export default function Button(props: Props) {
  const { className, variant, as } = props;

  const Component = as || 'button';

  return (
    <Component
      className={clsx('btn', variant && `btn-${variant}`, className)}
      role="button"
    >
      btn
    </Component>
  );
}
