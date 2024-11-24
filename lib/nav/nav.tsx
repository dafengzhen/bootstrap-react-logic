import { type ElementType, type MouseEvent, useCallback, useState, useMemo } from 'react';

import type { NavOption, NavProps } from './types.ts';

import { convertBsKeyToVar, clsxUnique, stylex } from '../tools';
import NavTabContent from './nav-tab-content.tsx';
import NavTabPane from './nav-tab-pane.tsx';
import NavItem from './nav-item.tsx';
import NavLink from './nav-link.tsx';

interface IOption extends NavOption {
  id: number | string;
}

const Nav = function Nav<T extends ElementType = 'nav' | 'ul'>(props: NavProps<T>) {
  const {
    as: Component = 'ul' as ElementType,
    onChange: onChangeByDefault,
    options: defaultOptions,
    contentProps,
    dropOldClass,
    horizontal,
    className,
    justified,
    underline,
    variables,
    skipItem,
    vertical,
    pills,
    style,
    fill,
    tabs,
    ...rest
  } = props;
  const initialOptions = (defaultOptions ?? []).map((item, index) => ({
    ...item,
    id: item.id ?? index,
  }));
  const [options, setOptions] = useState<IOption[]>(initialOptions);
  const [currentOption, setCurrentOption] = useState<IOption | null>(null);

  const existTabPane = useMemo(() => options.some((item) => item.pane), [options]);

  const renderOptions = useMemo(() => {
    const finalClass = clsxUnique(
      !dropOldClass && 'nav',
      horizontal && `justify-content-${horizontal}`,
      vertical && 'flex-column',
      tabs && 'nav-tabs',
      pills && 'nav-pills',
      underline && 'nav-underline',
      fill && 'nav-fill',
      justified && 'nav-justified',
      className,
    );
    const finalStyle = stylex((_, key) => ({ tKey: convertBsKeyToVar(key) }), variables, style);

    return {
      className: finalClass,
      style: finalStyle,
    };
  }, [className, dropOldClass, fill, horizontal, justified, pills, style, tabs, underline, variables, vertical]);

  const onClickLink = useCallback(
    (item: IOption, index: number, e: MouseEvent<HTMLElement>) => {
      if (existTabPane) {
        if (currentOption?.id === item.id) {
          return;
        }

        setOptions((prevOptions) => {
          const updatedOptions = prevOptions.map((optionItem, idx) => ({
            ...optionItem,
            active: idx === index,
          }));

          setCurrentOption(updatedOptions[index]);
          return updatedOptions;
        });
      }

      onChangeByDefault?.(item.id, e);
    },
    [currentOption?.id, existTabPane, onChangeByDefault],
  );

  return (
    <>
      <Component {...rest} {...renderOptions}>
        {options.map((item, index) => {
          return skipItem ? (
            <NavLink
              disabled={item.disabled}
              active={item.active}
              href={item.href}
              {...item.linkProps}
              onClick={(e: MouseEvent<HTMLElement>) => onClickLink(item, index, e)}
              key={item.id}
            >
              {item.link}
            </NavLink>
          ) : (
            <NavItem {...item.itemProps} key={item.id}>
              <NavLink
                disabled={item.disabled}
                active={item.active}
                href={item.href}
                {...item.linkProps}
                onClick={(e: MouseEvent<HTMLElement>) => onClickLink(item, index, e)}
              >
                {item.link}
              </NavLink>
              {item.item && item.item}
            </NavItem>
          );
        })}
      </Component>

      {existTabPane && (
        <NavTabContent {...contentProps}>
          {options.map((item) => {
            return (
              <NavTabPane active={item.active} fade={item.fade} {...item.paneProps} key={item.id}>
                {item.pane}
              </NavTabPane>
            );
          })}
        </NavTabContent>
      )}
    </>
  );
};

Nav.Item = NavItem;

Nav.Link = NavLink;

Nav.TabContent = NavTabContent;

Nav.TabPane = NavTabPane;

Nav.displayName = 'BRL.Nav';

export default Nav;
