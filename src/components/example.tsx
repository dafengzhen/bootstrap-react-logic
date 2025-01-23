import ExampleDynamicCard from '@components/example-dynamic-card.tsx';
import ExampleGeneralPropsCard from '@components/example-general-props-card.tsx';
import ExamplePropsCard from '@components/example-props-card.tsx';
import { getStateByHash, kebabToCamelCase, kebabToCamelCaseLowerFirst, updateState } from '@src/tools';
import clsx from 'clsx';
import { type ReactNode } from 'react';

export default function Example({
  alignItemsCenter,
  bg,
  bodyClassName,
  children,
  codeLanguage,
  contentId,
  dark,
  events,
  gap3,
  hash,
  inline,
  items,
  mw400,
  overflowXAuto,
  parentClassName,
  props,
  row,
  state,
  t,
  textNowrap,
  types,
  wrap,
}: {
  alignItemsCenter?: boolean;
  bg?: boolean | string;
  bodyClassName?: string;
  children?: ReactNode;
  codeLanguage?: 'html' | 'javascript' | 'tsx' | 'typescript' | string;
  contentId?: string;
  dark?: boolean;
  events?: boolean;
  gap3?: boolean;
  hash: string;
  inline?: boolean;
  items?: {
    attr: ReactNode | string;
    default?: ReactNode;
    desc?: ReactNode;
    type?: ReactNode;
  }[];
  mw400?: boolean;
  overflowXAuto?: boolean;
  parentClassName?: string;
  props?: boolean;
  row?: boolean;
  showCode?: boolean;
  state: any;
  t?: any;
  textNowrap?: boolean;
  types?: boolean;
  wrap?: boolean;
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

  if (props || events || types) {
    if (hash === 'commonComponentProps') {
      return (
        <ExampleGeneralPropsCard
          code={code}
          codeLanguage={codeLanguage || 'typescript'}
          hash={hash}
          isOpen={isOpen}
          showCode={false}
          toggleCode={toggleCode}
        >
          {children}
        </ExampleGeneralPropsCard>
      );
    }

    const _hash = kebabToCamelCase(hash.endsWith('ComponentProps') ? hash.split('ComponentProps')[0] : hash);
    const _tHash = t(`${kebabToCamelCaseLowerFirst(_hash)}.name`) || _hash;

    return (
      <ExamplePropsCard
        code={code}
        codeLanguage={codeLanguage || 'typescript'}
        hash={props ? hash : events ? _hash + 'ComponentEvents' : types ? _hash + 'ComponentTypes' : hash}
        isOpen={isOpen}
        items={items}
        showCode={false}
        title={_tHash}
        toggleCode={toggleCode}
      >
        {children}
      </ExamplePropsCard>
    );
  }

  return (
    <ExampleDynamicCard
      bg={bg}
      bodyClassName={bodyClassName}
      code={code}
      codeLanguage={codeLanguage}
      dark={dark}
      hash={hash}
      isOpen={isOpen}
      title={t(hash)}
      toggleCode={toggleCode}
    >
      <div
        className={clsx(
          'position-relative',
          parentClassName || parentClassName === '' ? parentClassName : `${inline ? 'd-inline-flex' : 'd-flex'}`,
          overflowXAuto && 'overflow-x-auto',
          row ? 'flex-row' : 'flex-column',
          wrap && 'flex-wrap',
          textNowrap && 'text-nowrap',
          alignItemsCenter && 'align-items-center',
          gap3 ? 'gap-3' : 'gap-2',
          mw400 && 'w-[400px]',
        )}
        id={contentId}
      >
        {children}
      </div>
    </ExampleDynamicCard>
  );
}
