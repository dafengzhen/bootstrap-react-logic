import { NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import clsx from 'clsx';
import { GlobalContext } from '@contexts/global-context.ts';

interface IMenu {
  name: 'Button' | 'ButtonGroup';
  to: '/pages/button' | '/pages/button-group';
}

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const fullscreen = useState(false);
  const theme = useState<'light' | 'dark'>('light');
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
  ]);

  function onClickReturn() {
    navigate(-1);
  }

  return (
    <GlobalContext.Provider value={{ fullscreen, theme }}>
      <div className="container-fluid p-2 p-sm-4">
        <div className="row g-4">
          {!isFullscreen && (
            <div className="col-4 col-sm-2">
              {location.pathname !== '/' && (
                <button
                  type="button"
                  className="btn btn-light mb-2"
                  onClick={onClickReturn}
                >
                  <i className="bi bi-chevron-left me-2"></i>
                  <span>Back</span>
                </button>
              )}

              <div className="list-group">
                {menus.map((item) => {
                  return (
                    <NavLink
                      key={item.name}
                      className={({ isActive, isPending }) => {
                        return clsx(
                          'list-group-item list-group-item-action',
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

          <div
            className={clsx(
              'overflow-hidden',
              !isFullscreen ? 'col' : '"col-8 col-sm-10"',
            )}
          >
            <Outlet />
          </div>
        </div>
      </div>
    </GlobalContext.Provider>
  );
}

export default App;
