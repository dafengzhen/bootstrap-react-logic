import { type ReactNode } from 'react';
import { getStateByHash, kebabToCamelCase, kebabToCamelCaseLowerFirst, updateState } from '@src/tools';
import ExampleDynamicCard from '@components/example-dynamic-card.tsx';
import ExamplePropsCard from '@components/example-props-card.tsx';
import ExampleGeneralPropsCard from '@components/example-general-props-card.tsx';

export default function Example({
  children,
  hash,
  items,
  props,
  state,
  t,
}: {
  hash: string;
  state: any;
  t?: any;
  children?: ReactNode;
  props?: boolean;
  items?: {
    attr: string | ReactNode;
    type?: ReactNode;
    desc?: ReactNode;
    default?: ReactNode;
  }[];
}) {
  const [getState, setState] = state;
  const stateByHash = getStateByHash(hash, getState);
  if (!stateByHash) {
    return <></>;
  }

  const path = stateByHash.path;
  const value: any = stateByHash.value;
  const isOpen = value.openCode || false;
  const code = value.code || '';

  function toggleCode() {
    updateState(setState, `${path}.openCode`, !isOpen);
  }

  if (props) {
    const _hash = kebabToCamelCase(hash.endsWith('ComponentProps') ? hash.split('ComponentProps')[0] : hash);
    const _tHash = t(`${kebabToCamelCaseLowerFirst(_hash)}.name`) || _hash;

    if (hash === 'generalComponentProps') {
      return (
        <ExampleGeneralPropsCard title={_tHash} hash={hash} isOpen={isOpen} toggleCode={toggleCode} code={code}>
          {children}
        </ExampleGeneralPropsCard>
      );
    }

    return (
      <ExamplePropsCard title={_tHash} hash={hash} isOpen={isOpen} toggleCode={toggleCode} code={code} items={items}>
        {children}
      </ExamplePropsCard>
    );
  }

  return (
    <ExampleDynamicCard title={t(hash)} hash={hash} isOpen={isOpen} toggleCode={toggleCode} code={code}>
      <div className="d-flex flex-column gap-2 overflow-x-auto">{children}</div>
    </ExampleDynamicCard>
  );
}
