import { type ReactNode } from 'react';
import { getStateByHash, kebabToCamelCase, kebabToCamelCaseLowerFirst, updateState } from '@src/tools';
import ExampleDynamicCard from '@components/example-dynamic-card.tsx';
import ExamplePropsCard from '@components/example-props-card.tsx';
import ExampleGeneralPropsCard from '@components/example-general-props-card.tsx';
import clsx from 'clsx';

export default function Example({
  children,
  hash,
  items,
  props,
  state,
  t,
  codeLanguage,
  parentClassName,
  overflowXAuto,
  row,
  wrap,
  textNowrap,
  alignItemsCenter,
  dark,
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
  codeLanguage?: 'html' | 'tsx' | 'javascript' | 'typescript' | string;
  parentClassName?: string;
  overflowXAuto?: boolean;
  row?: boolean;
  wrap?: boolean;
  textNowrap?: boolean;
  alignItemsCenter?: boolean;
  dark?: boolean;
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
    if (hash === 'commonComponentProps') {
      return (
        <ExampleGeneralPropsCard
          hash={hash}
          isOpen={isOpen}
          toggleCode={toggleCode}
          code={code}
          codeLanguage={codeLanguage || 'typescript'}
        >
          {children}
        </ExampleGeneralPropsCard>
      );
    }

    const _hash = kebabToCamelCase(hash.endsWith('ComponentProps') ? hash.split('ComponentProps')[0] : hash);
    const _tHash = t(`${kebabToCamelCaseLowerFirst(_hash)}.name`) || _hash;

    return (
      <ExamplePropsCard
        title={_tHash}
        hash={hash}
        isOpen={isOpen}
        toggleCode={toggleCode}
        code={code}
        codeLanguage={codeLanguage || 'typescript'}
        items={items}
      >
        {children}
      </ExamplePropsCard>
    );
  }

  return (
    <ExampleDynamicCard
      title={t(hash)}
      hash={hash}
      isOpen={isOpen}
      toggleCode={toggleCode}
      code={code}
      codeLanguage={codeLanguage}
      dark={dark}
    >
      <div
        className={clsx(
          parentClassName ? parentClassName : 'd-flex gap-2',
          overflowXAuto && 'overflow-x-auto',
          row ? 'flex-row' : 'flex-column',
          wrap && 'flex-wrap',
          textNowrap && 'text-nowrap',
          alignItemsCenter && 'align-items-center',
        )}
      >
        {children}
      </div>
    </ExampleDynamicCard>
  );
}
