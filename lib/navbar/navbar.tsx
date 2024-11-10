import { type ElementType, useMemo, useState } from 'react';

import type { NavbarOption, NavbarProps } from './types.ts';

import { clsxStyle, clsxUnique, convertBsKeyToVar, filterOptions, isValueValid } from '../tools';
import NavbarBrand from './navbar-brand.tsx';
import NavbarCollapse from './navbar-collapse.tsx';
import NavbarContainer from './navbar-container.tsx';
import NavbarNav from './navbar-nav.tsx';
import NavbarNavItem from './navbar-nav-item.tsx';
import NavbarNavLink from './navbar-nav-link.tsx';
import NavbarText from './navbar-text.tsx';
import NavbarToggler from './navbar-toggler.tsx';
import NavbarTogglerIcon from './navbar-toggler-icon.tsx';

interface IOption extends NavbarOption {
  id: number | string;
}

const Navbar = function Navbar<T extends ElementType = 'nav'>(props: NavbarProps<T>) {
  const {
    as: Component = 'nav',
    brand,
    brandPosition,
    brandProps,
    className,
    collapse,
    collapseProps,
    container,
    containerProps,
    dropOldClass,
    expand,
    externalContent,
    fixed,
    nav,
    navProps,
    options: defaultOptions,
    scroll,
    skipItem,
    sticky,
    style,
    text,
    textProps,
    toggler,
    togglerIconProps,
    togglerProps,
    variables,
    ...rest
  } = props;
  const initialOptions = (defaultOptions ?? []).map((item, index) => ({
    ...item,
    id: item.id ?? index,
  }));
  const [options] = useState<IOption[]>(initialOptions);

  const renderOptions = useMemo(() => {
    const finalClass = clsxUnique(
      !dropOldClass && 'navbar',
      expand && (typeof expand === 'boolean' ? 'navbar-expand' : `navbar-expand-${expand}`),
      fixed && `fixed-${fixed}`,
      sticky && `sticky-${sticky}`,
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
  }, [className, dropOldClass, expand, fixed, sticky, style, variables]);

  return (
    <>
      <Component {...rest} {...renderOptions}>
        {externalContent && externalContent}

        <NavbarContainer {...containerProps}>
          {brand && (!brandPosition || brandPosition === 'left') && <NavbarBrand {...brandProps}>{brand}</NavbarBrand>}

          {toggler && (
            <NavbarToggler {...togglerProps}>
              <NavbarTogglerIcon {...togglerIconProps} />
            </NavbarToggler>
          )}

          {brand && brandPosition === 'right' && <NavbarBrand {...brandProps}>{brand}</NavbarBrand>}

          {container ? (
            container
          ) : (
            <>
              {(collapse || nav || !!options.length) && (
                <NavbarCollapse {...collapseProps}>
                  {brand && brandPosition === 'hidden' && <NavbarBrand {...brandProps}>{brand}</NavbarBrand>}

                  <NavbarNav {...navProps} scroll={scroll}>
                    {nav ? (
                      nav
                    ) : (
                      <>
                        {options.map((item) => {
                          return skipItem || (typeof item.item === 'boolean' && !item.item) ? (
                            <NavbarNavLink
                              active={item.active}
                              aria-current={item.active ? 'page' : undefined}
                              disabled={item.disabled}
                              href={item.href}
                              key={item.id}
                              {...item.linkProps}
                            >
                              {item.link}
                            </NavbarNavLink>
                          ) : (
                            <NavbarNavItem {...item.itemProps} key={item.id}>
                              <NavbarNavLink
                                active={item.active}
                                aria-current={item.active ? 'page' : undefined}
                                disabled={item.disabled}
                                href={item.href}
                                {...item.linkProps}
                              >
                                {item.link}
                              </NavbarNavLink>
                              {item.item && item.item}
                            </NavbarNavItem>
                          );
                        })}
                      </>
                    )}
                  </NavbarNav>
                  {text && <NavbarText {...textProps}>{text}</NavbarText>}
                  {collapse && collapse}
                </NavbarCollapse>
              )}
            </>
          )}
        </NavbarContainer>
      </Component>
    </>
  );
};

Navbar.Text = NavbarText;

Navbar.Brand = NavbarBrand;

Navbar.Toggler = NavbarToggler;

Navbar.TogglerIcon = NavbarTogglerIcon;

Navbar.Collapse = NavbarCollapse;

Navbar.Nav = NavbarNav;

Navbar.NavItem = NavbarNavItem;

Navbar.NavLink = NavbarNavLink;

Navbar.Container = NavbarContainer;

Navbar.displayName = 'BRL.Navbar';

export default Navbar;
