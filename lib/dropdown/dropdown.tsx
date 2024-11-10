import type { FlipOptions, Placement, ShiftOptions, SizeOptions } from '@floating-ui/react';

import { flip, offset, shift, size, useFloating } from '@floating-ui/react';
import { type ElementType, type MouseEvent, useCallback, useEffect, useMemo, useRef, useState } from 'react';

import type { DropdownOption, DropdownProps } from './types.ts';

import {
  clsxStyle,
  clsxUnique,
  convertBsKeyToVar,
  filterOptions,
  generateRandomId,
  getFirstNonEmptyClass,
  getTruthyKeyOrDefault,
  isValueValid,
  mergeProps,
} from '../tools';
import DropdownDivider from './dropdown-divider.tsx';
import DropdownHeader from './dropdown-header.tsx';
import DropdownItem from './dropdown-item.tsx';
import DropdownItemText from './dropdown-item-text.tsx';
import DropdownMenu from './dropdown-menu.tsx';
import DropdownToggle from './dropdown-toggle.tsx';

interface IOption extends DropdownOption {
  id: number | string;
}

type MenuAlignment = 'end' | 'start' | false;

const Dropdown = function Dropdown<T extends ElementType = 'div'>(props: DropdownProps<T>) {
  const {
    as: Component = 'div',
    autoClose = true,
    btnGroup,
    buttonProps,
    center,
    children,
    className,
    customMenu,
    dropend,
    dropOldClass,
    dropstart,
    dropup,
    dropupCenter,
    menuProps,
    offset: offsetByDefault,
    options: defaultOptions,
    split,
    strategy = 'absolute',
    style,
    toggle,
    toggleProps,
    variables,
    visible,
    ...rest
  } = props;
  const initialOptions = (defaultOptions ?? []).map((item, index) => ({
    ...item,
    id: item.id ?? index,
  }));
  const [options] = useState<IOption[]>(initialOptions);
  const [show, setShow] = useState(visible ?? false);
  const dropdownToggleId = useRef(generateRandomId());
  const [menuAlignment, setMenuAlignment] = useState<MenuAlignment>();
  const [mouseEnterDropdownMenu, setMouseEnterDropdownMenu] = useState(false);

  const { floatingStyles, refs } = useFloating({
    middleware: [
      offset(() => offsetByDefault ?? 0, [show]),
      shift((state) => state as ShiftOptions, [show]),
      flip((state) => state as FlipOptions, [show]),
      size((state) => state as SizeOptions, [show]),
    ],
    onOpenChange: setShow,
    open: show,
    placement: getTruthyKeyOrDefault(
      {
        bottom: center,
        'bottom-end': menuAlignment === 'end',
        'bottom-start': menuAlignment === 'start',
        'left-start': dropstart,
        'right-start': dropend,
        top: dropupCenter,
        'top-start': dropup,
      },
      'bottom-start',
    ) as Placement,
    strategy,
  });

  const renderOptions = useMemo(() => {
    const finalClass = clsxUnique(
      !dropOldClass &&
        getFirstNonEmptyClass({
          'btn-group': split || btnGroup,
          dropdown: true,
          'dropdown-center': center,
          'dropup-center': dropupCenter,
        }),
      dropup && 'dropup',
      dropend && 'dropend',
      dropstart && 'dropstart',
      className,
    );
    const finalStyle = clsxStyle({ ...variables, ...style }, true, (_, key) => {
      return convertBsKeyToVar(key);
    });

    return filterOptions(
      {
        className: finalClass,
        style: finalStyle,
      },
      isValueValid,
    );
  }, [btnGroup, center, className, dropOldClass, dropend, dropstart, dropup, dropupCenter, split, style, variables]);

  const handleToggle = useCallback(
    (e?: boolean | MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
      if (typeof e === 'boolean') {
        setShow(e);
      } else if (e) {
        setShow(!show);
      } else {
        setShow(false);
      }

      (toggleProps?.onClick as (e?: MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => void)?.(
        e as MouseEvent<HTMLAnchorElement | HTMLButtonElement>,
      );
    },
    [show, toggleProps?.onClick],
  );
  const handleMouseEnterMenu = useCallback(() => {
    if (!customMenu) {
      return;
    }

    setMouseEnterDropdownMenu(true);
  }, [customMenu]);
  const handleMouseLeaveMenu = useCallback(() => {
    if (!customMenu) {
      return;
    }

    setMouseEnterDropdownMenu(false);
  }, [customMenu]);

  useEffect(() => {
    if (typeof visible === 'boolean') {
      setShow(visible);
    }
  }, [visible]);
  useEffect(() => {
    if (!autoClose || mouseEnterDropdownMenu) {
      return;
    }

    const handleClickOutside = (e: HTMLElementEventMap['click']) => {
      const target = e.target as HTMLAnchorElement | HTMLButtonElement;
      if (target.className.includes('dropdown')) {
        if (autoClose === 'outside') {
          return;
        }

        if (target.dataset.toggleId !== dropdownToggleId.current) {
          handleToggle();
        }
      } else if (autoClose !== 'inside') {
        handleToggle();
      }
    };

    document.body.addEventListener('click', handleClickOutside);
    return () => document.body.removeEventListener('click', handleClickOutside);
  }, [autoClose, mouseEnterDropdownMenu, handleToggle]);
  useEffect(() => {
    if (!menuProps || !menuProps.className?.includes('dropdown-menu-')) {
      return;
    }

    const element = refs.floating.current as HTMLUListElement | null;
    if (element) {
      const position = getComputedStyle(element).getPropertyValue('--bs-position');
      if (position) {
        setMenuAlignment(position as MenuAlignment);
      } else {
        setMenuAlignment(false);
      }
    }
  }, [menuProps, refs.floating]);

  return (
    <Component {...rest} {...renderOptions}>
      {split ? (
        <>
          {!(split && dropstart) && (
            <DropdownToggle dropOldClass {...buttonProps}>
              {toggle}
            </DropdownToggle>
          )}

          <DropdownToggle
            aria-expanded={show ? 'true' : 'false'}
            className="dropdown-toggle-split"
            show={show}
            {...toggleProps}
            data-toggle-id={dropdownToggleId.current}
            onClick={handleToggle}
            onRef={refs.setReference}
          >
            <span className="visually-hidden">Toggle Dropdown</span>
          </DropdownToggle>
        </>
      ) : (
        <DropdownToggle
          aria-expanded={show ? 'true' : 'false'}
          show={show}
          {...toggleProps}
          data-toggle-id={dropdownToggleId.current}
          onClick={handleToggle}
          onRef={refs.setReference}
        >
          {dropstart && (
            <span className="dropdown-nbsp" data-toggle-id={dropdownToggleId.current}>
              &nbsp;
            </span>
          )}
          {toggle}
          {!dropstart && (
            <span className="dropdown-nbsp" data-toggle-id={dropdownToggleId.current}>
              &nbsp;
            </span>
          )}
        </DropdownToggle>
      )}

      <DropdownMenu
        {...mergeProps(menuProps, { style: { ...menuProps?.style, ...floatingStyles } })}
        onMouseEnter={handleMouseEnterMenu}
        onMouseLeave={handleMouseLeaveMenu}
        onRef={refs.setFloating}
        show={show}
      >
        {customMenu ? (
          children
        ) : (
          <>
            {options.map((item) => {
              return item.header ? (
                <DropdownHeader key={item.id}>{item.header}</DropdownHeader>
              ) : item.itemText ? (
                <DropdownItemText key={item.id}>{item.itemText}</DropdownItemText>
              ) : item.divider ? (
                <DropdownDivider key={item.id} />
              ) : item.as === 'a' ? (
                <DropdownItem active={item.active} as="a" disabled={item.disabled} href={item.href} key={item.id}>
                  {item.item}
                </DropdownItem>
              ) : (
                <DropdownItem active={item.active} as="button" disabled={item.disabled} key={item.id}>
                  {item.item}
                </DropdownItem>
              );
            })}
          </>
        )}
      </DropdownMenu>

      {split && dropstart && (
        <DropdownToggle dropOldClass {...buttonProps}>
          {toggle}
        </DropdownToggle>
      )}
    </Component>
  );
};

Dropdown.Toggle = DropdownToggle;

Dropdown.Item = DropdownItem;

Dropdown.ItemText = DropdownItemText;

Dropdown.Menu = DropdownMenu;

Dropdown.Divider = DropdownDivider;

Dropdown.Header = DropdownHeader;

Dropdown.displayName = 'BRL.Dropdown';

export default Dropdown;
