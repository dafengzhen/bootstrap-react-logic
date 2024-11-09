import { NavLink, Outlet, ScrollRestoration, useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import { GlobalContext, type Layout, type Theme } from '@contexts/global-context.ts';
import { MenuEnum } from '@src/routes.tsx';
import { useTranslation } from 'react-i18next';
import { sortByProperty } from '@src/tools';

export const LOCAL_STORAGE_KEY_PREFIX = '_brl_';

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const fullscreen = useState(false);
  const layout = useState<Layout>('default');
  const theme = useState<Theme>('light');
  const isCenter = layout[0] === 'center';
  const isFullscreen = fullscreen[0] && location.pathname !== '/';
  const [menus] = useState<
    {
      name: string;
      to: string;
    }[]
  >(
    sortByProperty(
      Object.keys(MenuEnum).map((key) => ({
        name: key,
        to: MenuEnum[key as keyof typeof MenuEnum],
      })),
      'name',
    ),
  );
  const isLoadLanguage = useRef(false);

  const { i18n } = useTranslation();

  useEffect(() => {
    if (typeof localStorage !== 'undefined') {
      const retrieveOrSetDefault = <T extends string | boolean>(
        key: string,
        defaultValue: string,
        setter: (value: T) => void,
        mapValue: (value: string) => T,
        callback?: (value: T) => void,
      ) => {
        const item = localStorage.getItem(key);
        let mappedValue: T;

        if (item) {
          mappedValue = mapValue(item);
          setter(mappedValue);
        } else {
          localStorage.setItem(key, defaultValue);
          mappedValue = mapValue(defaultValue);
          setter(mappedValue);
        }

        if (callback) {
          callback(mappedValue);
        }
      };

      retrieveOrSetDefault<boolean>(
        LOCAL_STORAGE_KEY_PREFIX + 'options_fullscreen',
        'false',
        fullscreen[1],
        (v) => v === 'true',
      );

      retrieveOrSetDefault<'light' | 'dark'>(
        LOCAL_STORAGE_KEY_PREFIX + 'options_theme',
        'light',
        theme[1],
        (v) => (v === 'light' ? 'light' : 'dark'),
        (value) => {
          document.documentElement.setAttribute('data-bs-theme', value);
        },
      );

      retrieveOrSetDefault<'center' | 'fullscreen'>(
        LOCAL_STORAGE_KEY_PREFIX + 'options_layout',
        'default',
        layout[1],
        (v) => (v === 'center' ? 'center' : 'fullscreen'),
      );

      retrieveOrSetDefault<'en' | 'zh'>(
        LOCAL_STORAGE_KEY_PREFIX + 'options_language',
        'en',
        () => {},
        (v) => (v === 'en' ? 'en' : 'zh'),
        (value) => {
          if (!isLoadLanguage.current) {
            isLoadLanguage.current = true;
            setTimeout(() => {
              i18n.changeLanguage(value);
            }, 1000);
          }
        },
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function onClickReturn() {
    navigate(-1);
  }

  function onClickHouse() {
    navigate('/');
  }

  return (
    <GlobalContext.Provider value={{ fullscreen, theme, layout }}>
      <div className={clsx('container-fluid p-2 p-sm-4', isCenter && 'container')}>
        <div className="row g-2 g-sm-4">
          {!isFullscreen && (
            <div className="col-4 col-sm-2">
              <div
                className={clsx(
                  'position-fixed row g-2 g-sm-4 ps-0 sm:tw-w-full sm:tw-pe-[1.375rem]',
                  isCenter && 'container',
                )}
              >
                <div className="col-10 col-sm-2 overflow-y-auto">
                  {location.pathname !== '/' && (
                    <div className="d-flex gap-2 mb-2">
                      <button type="button" className="btn btn-light" onClick={onClickHouse}>
                        <i className="bi bi-house-door-fill"></i>
                      </button>

                      <button type="button" className="btn btn-light w-100" onClick={onClickReturn}>
                        <i className="bi bi-chevron-left"></i>
                      </button>
                    </div>
                  )}

                  <div className="list-group">
                    {menus.map((item) => {
                      return (
                        <NavLink
                          key={item.name}
                          className={({ isActive, isPending }) => {
                            return clsx(
                              'list-group-item list-group-item-action text-truncate',
                              isActive && 'active',
                              isPending && 'pending',
                            );
                          }}
                          to={item.to}
                        >
                          {item.name}
                        </NavLink>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className={clsx('overflow-hidden', !isFullscreen ? 'col' : '"col-8 col-sm-10"')}>
            <Outlet />
          </div>
        </div>
      </div>
      <ScrollRestoration />
    </GlobalContext.Provider>
  );
}

export default App;
