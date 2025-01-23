import { GlobalContext, type Layout, type Theme } from '@contexts/global-context.ts';
import { MenuEnum } from '@src/routes.tsx';
import { sortByProperty } from '@src/tools';
import clsx from 'clsx';
import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink, Outlet, ScrollRestoration, useLocation, useNavigate } from 'react-router-dom';

export const LOCAL_STORAGE_KEY_PREFIX = '_brl_';

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const fullscreen = useState(false);
  const layout = useState<Layout>('default');
  const theme = useState<Theme>('light');
  const isDark = theme[0] === 'dark';
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
      const retrieveOrSetDefault = <T extends boolean | string>(
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

      retrieveOrSetDefault<'dark' | 'light'>(
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
    <GlobalContext.Provider value={{ fullscreen, layout, theme }}>
      <div className={clsx('container-fluid p-2 p-sm-4', isCenter && 'container')}>
        <div className="row g-2 g-sm-4">
          {!isFullscreen && (
            <div className="col-4 col-sm-2">
              <div className={clsx('position-fixed g-2 g-sm-4 ps-0 sm-w-full-pe-1rem')}>
                <div className={clsx('row', isCenter && 'container')}>
                  <div className="col-10 col-sm-2">
                    <div
                      className="overflow-y-auto"
                      style={{
                        height: 'calc(100vh - 3rem)',
                        paddingRight: 'calc(var(--bs-gutter-x) * 0.5)',
                      }}
                    >
                      {location.pathname !== '/' && (
                        <div className="d-flex flex-wrap gap-2 mb-2">
                          <button
                            className={clsx('btn', isDark ? 'btn-dark' : 'btn-outline-light')}
                            onClick={onClickHouse}
                            type="button"
                          >
                            <span style={{ color: '#712cf9' }}>B</span>
                            <span style={{ color: '#0074a6' }}>R</span>
                            <span style={{ color: '#3950D0' }}>L</span>
                          </button>

                          <button
                            className={clsx('btn w-100', isDark ? 'btn-dark' : 'btn-outline-light')}
                            onClick={onClickReturn}
                            type="button"
                          >
                            <i className="bi bi-chevron-left" style={{ color: '#3950D0' }}></i>
                          </button>
                        </div>
                      )}

                      <div className={clsx('list-group', !isDark && 'list-group-flush')}>
                        {menus.map((item) => {
                          return (
                            <NavLink
                              className={({ isActive, isPending }) => {
                                return clsx(
                                  'list-group-item list-group-item-action text-truncate',
                                  isActive && 'active',
                                  isPending && 'pending',
                                  !isDark && 'rounded border-1',
                                );
                              }}
                              key={item.name}
                              style={{
                                borderColor: isDark ? undefined : '#f8f9fa',
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
