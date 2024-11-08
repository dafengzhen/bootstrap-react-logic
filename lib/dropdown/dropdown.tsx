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
import DropdownToggle from './dropdown-toggle.tsx';
import DropdownItem from './dropdown-item.tsx';
import DropdownItemText from './dropdown-item-text.tsx';
import DropdownMenu from './dropdown-menu.tsx';
import DropdownDivider from './dropdown-divider.tsx';
import DropdownHeader from './dropdown-header.tsx';
import type { FlipOptions, Placement, ShiftOptions, SizeOptions } from '@floating-ui/react';
import { flip, offset, shift, size, useFloating } from '@floating-ui/react';

interface IOption extends DropdownOption {
  id: string | number;
}

type MenuAlignment = 'end' | 'start' | false;

const Dropdown = function Dropdown<T extends ElementType = 'div'>(props: DropdownProps<T>) {
  const {
    as: Component = 'div',
    dropOldClass,
    variables,
    className,
    style,
    options: defaultOptions,
    toggle,
    toggleProps,
    buttonProps,
    split,
    btnGroup,
    center,
    dropup,
    dropupCenter,
    dropend,
    dropstart,
    strategy = 'absolute',
    menuProps,
    children,
    customMenu,
    offset: offsetByDefault,
    autoClose = true,
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

  const { refs, floatingStyles } = useFloating({
    open: show,
    onOpenChange: setShow,
    middleware: [
      offset(() => offsetByDefault ?? 0, [show]),
      shift((state) => state as ShiftOptions, [show]),
      flip((state) => state as FlipOptions, [show]),
      size((state) => state as SizeOptions, [show]),
    ],
    placement: getTruthyKeyOrDefault(
      {
        'bottom-start': menuAlignment === 'start',
        'bottom-end': menuAlignment === 'end',
        'left-start': dropstart,
        'right-start': dropend,
        top: dropupCenter,
        'top-start': dropup,
        bottom: center,
      },
      'bottom-start',
    ) as Placement,
    strategy,
  });

  const renderOptions = useMemo(() => {
    const finalClass = clsxUnique(
      !dropOldClass &&
        getFirstNonEmptyClass({
          'dropup-center': dropupCenter,
          'dropdown-center': center,
          'btn-group': split || btnGroup,
          dropdown: true,
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
    (e?: MouseEvent<HTMLAnchorElement | HTMLButtonElement> | boolean) => {
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
      const target = e.target as HTMLButtonElement | HTMLAnchorElement;
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
            className="dropdown-toggle-split"
            aria-expanded={show ? 'true' : 'false'}
            show={show}
            {...toggleProps}
            onClick={handleToggle}
            data-toggle-id={dropdownToggleId.current}
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
          onClick={handleToggle}
          data-toggle-id={dropdownToggleId.current}
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
        show={show}
        onRef={refs.setFloating}
        onMouseEnter={handleMouseEnterMenu}
        onMouseLeave={handleMouseLeaveMenu}
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
                <DropdownItem as="a" key={item.id} href={item.href} active={item.active} disabled={item.disabled}>
                  {item.item}
                </DropdownItem>
              ) : (
                <DropdownItem as="button" key={item.id} active={item.active} disabled={item.disabled}>
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
