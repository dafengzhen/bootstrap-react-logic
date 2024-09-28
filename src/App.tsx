import { NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import clsx from 'clsx';

interface IMenu {
  name: 'Button';
  to: '/pages/button';
}

function App() {
  const [menus] = useState<IMenu[]>([
    {
      name: 'Button',
      to: '/pages/button',
    },
  ]);

  const location = useLocation();
  const navigate = useNavigate();

  function onClickReturn() {
    navigate(-1);
  }

  return (
    <div className="container-fluid p-4">
      <div className="row">
        <div className="col-4 col-sm-2">
          {location.pathname !== '/' && (
            <button
              type="button"
              className="btn btn-light mb-2"
              onClick={onClickReturn}
            >
              <i className="bi bi-chevron-left me-2"></i>
              <span>Return</span>
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
        <div className="col-8 col-sm-10">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default App;
