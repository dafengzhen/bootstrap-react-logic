import { NavLink, Outlet, ScrollRestoration, useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import clsx from 'clsx';
import { GlobalContext, type Layout, type Theme } from '@contexts/global-context.ts';

interface IMenu {
  name: 'Button' | 'ButtonGroup' | 'Input' | 'InputGroup' | 'Select' | 'Checkbox' | 'Radio';
  to:
    | '/pages/button'
    | '/pages/button-group'
    | '/pages/input'
    | '/pages/input-group'
    | '/pages/select'
    | '/pages/checkbox'
    | '/pages/radio';
}

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const fullscreen = useState(false);
  const layout = useState<Layout>('default');
  const theme = useState<Theme>('light');
  const isCenter = layout[0] === 'center';
  const isFullscreen = fullscreen[0] && location.pathname !== '/';
  const [menus] = useState<IMenu[]>([
    {
      name: 'Button',
      to: '/pages/button',
    },
    {
      name: 'ButtonGroup',
      to: '/pages/button-group',
    },
    {
      name: 'Input',
      to: '/pages/input',
    },
    {
      name: 'InputGroup',
      to: '/pages/input-group',
    },
    {
      name: 'Select',
      to: '/pages/select',
    },
    {
      name: 'Checkbox',
      to: '/pages/checkbox',
    },
    {
      name: 'Radio',
      to: '/pages/radio',
    },
  ]);

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
