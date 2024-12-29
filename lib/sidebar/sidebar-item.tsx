import { type ElementType, type MouseEvent, useCallback, useMemo } from 'react';

import type { SidebarItemProps, SidebarOption } from './types.ts';

import globalStyles from '../global.module.scss';
import { classx, classxWithOptions, convertBsKeyToVar, stylex } from '../tools';

const toggleSidebarOptionActiveById = (options: SidebarOption[] = [], id: number | string): SidebarOption[] =>
  options.map((option) => ({
    ...option,
    active: option.id === id ? !option.active : false,
    children: option.children ? toggleSidebarOptionActiveById(option.children, id) : option.children,
  }));

const SidebarItem = function SidebarItem<T extends ElementType = 'li'>(props: SidebarItemProps<T>) {
  const {
    as: Component = 'li' as ElementType,
    className,
    collapsible,
    dark,
    dropOldClass,
    onOptionChange: onOptionChangeByDefault,
    option,
    options: optionsByDefault,
    preventToggleActive,
    style,
    variables,
    ...rest
  } = props;

  const {
    active,
    children: childrenByDefault,
    disabled,
    href = '',
    icon,
    isLeaf,
    name,
    onClick: onClickByDefault,
  } = option;

  const renderOptions = useMemo(() => {
    const finalClass = classx(!dropOldClass && 'nav-item', className);
    const finalStyle = stylex((_, key) => ({ tKey: convertBsKeyToVar(key) }), variables, style);

    return {
      className: finalClass,
      style: finalStyle,
    };
  }, [className, dropOldClass, style, variables]);

  const handleClick = useCallback(
    (e: MouseEvent<HTMLAnchorElement>) => {
      if (!href || href === '#') {
        e.preventDefault();
      }

      if (!preventToggleActive && option.active) {
        return;
      }

      const newOptions = toggleSidebarOptionActiveById(optionsByDefault, option.id!);
      onOptionChangeByDefault?.(newOptions);
      onClickByDefault?.(e);
    },
    [href, onClickByDefault, onOptionChangeByDefault, option.active, option.id, optionsByDefault, preventToggleActive],
  );

  return (
    <Component {...rest} {...renderOptions}>
      {(!collapsible || (collapsible && icon)) && (
        <a
          className={classxWithOptions(
            null,
            'nav-link',
            active && 'active',
            disabled && 'disabled',
            dark ? 'text-white' : !active && 'link-body-emphasis',
            collapsible && 'rounded-0',
            !collapsible && isLeaf && 'ms-3',
          )}
          href={href}
          onClick={handleClick}
          title={typeof name === 'string' ? name : undefined}
        >
          {icon && icon}
          {!collapsible && <span className="ms-2">{name}</span>}
        </a>
      )}

      {childrenByDefault && childrenByDefault.length > 0 && (
        <ul
          className={classxWithOptions(
            null,
            'nav nav-pills flex-column mb-auto flex-nowrap overflow-y-auto',
            collapsible && 'text-center',
            dark ? globalStyles.brlNavToggleDark : globalStyles.brlNavToggle,
          )}
        >
          {childrenByDefault.map((item) => (
            <SidebarItem
              collapsible={collapsible}
              dark={dark}
              key={item.id}
              onOptionChange={onOptionChangeByDefault}
              option={item}
              options={optionsByDefault}
              preventToggleActive={preventToggleActive}
            />
          ))}
        </ul>
      )}
    </Component>
  );
};

SidebarItem.displayName = 'BRL.SidebarItem';

export default SidebarItem;
