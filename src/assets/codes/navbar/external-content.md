```jsx
const [show, setShow] = useState(false);

<Navbar
  className="navbar-dark bg-dark"
  externalContent={
    <div className={`collapse ${show ? 'show' : ''}`} data-bs-theme="dark" id="navbarToggleExternalContent">
      <div className="bg-dark p-4">
        <h5 className="text-body-emphasis h4">Collapsed content</h5>
        <span className="text-body-secondary">Toggleable via the navbar brand.</span>
      </div>
    </div>
  }
  toggler
  togglerProps={{
    onClick: () => setShow(!show),
  }}
/>;
```
