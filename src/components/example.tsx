import { kebabToCamelCaseLowerFirst, kebabToCamelCase, getStateByHash, updateState } from '@src/tools';
import ExampleGeneralPropsCard from '@components/example-general-props-card.tsx';
import ExampleDynamicCard from '@components/example-dynamic-card.tsx';
import ExamplePropsCard from '@components/example-props-card.tsx';
import { type ReactNode } from 'react';
import clsx from 'clsx';

export default function Example({
  alignItemsCenter,
  parentClassName,
  bodyClassName,
  overflowXAuto,
  codeLanguage,
  textNowrap,
  contentId,
  children,
  inline,
  events,
  items,
  mw400,
  props,
  types,
  state,
  dark,
  gap3,
  hash,
  wrap,
  row,
  bg,
  t,
}: {
  items?: {
    attr: ReactNode | string;
    default?: ReactNode;
    desc?: ReactNode;
    type?: ReactNode;
  }[];
  codeLanguage?: 'javascript' | 'typescript' | 'html' | string | 'tsx';
  alignItemsCenter?: boolean;
  parentClassName?: string;
  overflowXAuto?: boolean;
  bodyClassName?: string;
  bg?: boolean | string;
  children?: ReactNode;
  textNowrap?: boolean;
  contentId?: string;
  showCode?: boolean;
  inline?: boolean;
  events?: boolean;
  mw400?: boolean;
  props?: boolean;
  types?: boolean;
  dark?: boolean;
  gap3?: boolean;
  wrap?: boolean;
  row?: boolean;
  hash: string;
  state: any;
  t?: any;
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
          codeLanguage={codeLanguage || 'typescript'}
          toggleCode={toggleCode}
          showCode={false}
          isOpen={isOpen}
          code={code}
          hash={hash}
        >
          {children}
        </ExampleGeneralPropsCard>
      );
    }

    const _hash = kebabToCamelCase(hash.endsWith('ComponentProps') ? hash.split('ComponentProps')[0] : hash);
    const _tHash = t(`${kebabToCamelCaseLowerFirst(_hash)}.name`) || _hash;

    return (
      <ExamplePropsCard
        hash={props ? hash : events ? _hash + 'ComponentEvents' : types ? _hash + 'ComponentTypes' : hash}
        codeLanguage={codeLanguage || 'typescript'}
        toggleCode={toggleCode}
        showCode={false}
        isOpen={isOpen}
        title={_tHash}
        items={items}
        code={code}
      >
        {children}
      </ExamplePropsCard>
    );
  }

  return (
    <ExampleDynamicCard
      bodyClassName={bodyClassName}
      codeLanguage={codeLanguage}
      toggleCode={toggleCode}
      isOpen={isOpen}
      title={t(hash)}
      code={code}
      dark={dark}
      hash={hash}
      bg={bg}
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
          mw400 && 'tw-w-[400px]',
        )}
        id={contentId}
      >
        {children}
      </div>
    </ExampleDynamicCard>
  );
}
