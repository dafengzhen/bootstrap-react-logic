import {
  type ElementType,
  isValidElement,
  type MouseEvent,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

import type { SidebarHeader, SidebarHeaderObject, SidebarOption, SidebarProps } from './types.ts';

import globalStyles from '../bootstrap-react-logic.module.css';
import { BiChevronRight, classx, classxWithOptions, convertBsKeyToVar, stylex } from '../tools';
import SidebarItem from './sidebar-item.tsx';

interface IOption extends SidebarOption {
  id: number | string;
}

const generateInitialOptions = (options: SidebarOption[] = [], parentId?: number | string): IOption[] =>
  options.map((item, index) => {
    const id = item.id ?? (parentId !== undefined ? `${parentId}${index}` : `${index}`);
    const isFirstLevel = parentId === undefined || parentId === null;
    const isLeaf = !isFirstLevel && (!item.children || item.children.length === 0);

    return {
      ...item,
      children: item.children ? generateInitialOptions(item.children, id) : undefined,
      id,
      isLeaf,
      parentId,
    };
  });

const isCustomHeader = (header: SidebarHeader): header is SidebarHeaderObject =>
  typeof header === 'object' &&
  !isValidElement(header) &&
  header !== null &&
  ('end' in header || 'icon' in header || 'name' in header);

const Sidebar = function Sidebar<T extends ElementType = 'div'>(props: SidebarProps<T>) {
  const {
    as: Component = 'div' as ElementType,
    body,
    className,
    collapsible,
    dark,
    dropOldClass,
    footer,
    header,
    onCollapse: onCollapseByDefault,
    onOptionChange,
    options: optionsByDefault,
    preventToggleActive,
    style,
    variables,
    ...rest
  } = props;

  const [hasVerticalScrollbar, setHasVerticalScrollbar] = useState(false);
  const sidebar = useRef<HTMLUListElement>(null);

  const renderOptions = useMemo(() => {
    const finalClass = classx(
      !dropOldClass && `d-flex flex-column flex-shrink-0 ${globalStyles.brlHFull} ${globalStyles.brlMaxHScreen}`,
      dark && 'text-bg-dark',
      collapsible ? 'py-3' : !body && 'p-3',
      className,
    );
    const finalStyle = stylex((_, key) => ({ tKey: convertBsKeyToVar(key) }), variables, style);

    return {
      className: finalClass,
      style: finalStyle,
    };
  }, [body, className, collapsible, dark, dropOldClass, style, variables]);

  const options = useMemo(() => generateInitialOptions(optionsByDefault), [optionsByDefault]);

  const onCollapse = useCallback(
    (e: MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      onCollapseByDefault?.();
    },
    [onCollapseByDefault],
  );

  useEffect(() => {
    const element = sidebar.current;
    if (!element) {
      return;
    }

    const handleResize = () => {
      setHasVerticalScrollbar(element.scrollHeight > element.clientHeight);
    };

    element.addEventListener('resize', handleResize);
    handleResize();

    return () => element.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Component {...rest} {...renderOptions}>
      {header && isCustomHeader(header) ? (
        <>
          <div
            className={classxWithOptions(
              null,
              'd-flex align-items-center gap-2',
              collapsible
                ? `${hasVerticalScrollbar ? 'px-2' : 'justify-content-center px-3'}`
                : header.end && 'justify-content-between',
              body && 'p-3',
            )}
          >
            {!collapsible && header.end ? (
              <>
                <div className="d-flex align-items-center gap-2">
                  {header.icon && header.icon}
                  {header.name && header.name}
                </div>
                {header.end}
              </>
            ) : (
              <>
                {header.icon && header.icon}
                {!collapsible && header.name && header.name}
              </>
            )}
          </div>

          {options && options.length > 0 && <hr />}
        </>
      ) : (
        header
      )}

      {body
        ? body
        : options &&
          options.length > 0 && (
            <ul
              className={classxWithOptions(
                null,
                'nav nav-pills flex-column mb-auto flex-nowrap overflow-y-auto',
                collapsible && 'text-center',
                dark ? globalStyles.brlNavToggleDark : globalStyles.brlNavToggle,
              )}
              ref={sidebar}
            >
              {options.map((item) => (
                <SidebarItem
                  collapsible={collapsible}
                  dark={dark}
                  key={item.id}
                  onOptionChange={onOptionChange}
                  option={item}
                  options={options}
                  preventToggleActive={preventToggleActive}
                />
              ))}
            </ul>
          )}

      {collapsible ? (
        <>
          {((options && options.length > 0) || header) && <hr />}
          <ul className={classxWithOptions(null, 'nav nav-pills flex-column', !hasVerticalScrollbar && 'text-center')}>
            <li className="nav-item">
              <a
                className={classxWithOptions(null, 'nav-link py-1', dark ? 'text-white' : 'link-body-emphasis')}
                href=""
                onClick={onCollapse}
              >
                <BiChevronRight />
              </a>
            </li>
          </ul>
        </>
      ) : (
        footer && (
          <>
            {((options && options.length > 0) || header) && <hr />}
            {footer}
          </>
        )
      )}
    </Component>
  );
};

Sidebar.Item = SidebarItem;

Sidebar.displayName = 'BRL.Sidebar';

export default Sidebar;
