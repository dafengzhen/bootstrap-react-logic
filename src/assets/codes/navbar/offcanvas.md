```jsx
<Navbar
  brand="Offcanvas navbar"
  className="navbar-dark bg-dark"
  container={
    <div
      aria-labelledby="offcanvasDarkNavbarLabel"
      className="offcanvas offcanvas-end text-bg-dark"
      id="offcanvasDarkNavbar"
      tabIndex={-1}
    >
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">
          Dark offcanvas
        </h5>
        <button
          aria-label="Close"
          className="btn-close btn-close-white"
          data-bs-dismiss="offcanvas"
          type="button"
        ></button>
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li className="nav-item">
            <a aria-current="page" className="nav-link active" href="#">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Link
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              aria-expanded="false"
              className="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
              href="#"
              role="button"
            >
              Dropdown
            </a>
            <ul className="dropdown-menu dropdown-menu-dark">
              <li>
                <a className="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
            </ul>
          </li>
        </ul>
        <form className="d-flex mt-3" role="search">
          <input aria-label="Search" className="form-control me-2" placeholder="Search" type="search" />
          <button className="btn btn-success" type="submit">
            Search
          </button>
        </form>
      </div>
    </div>
  }
  fixed="top"
  toggler
/>
```
