```jsx
<Navbar
  className="bg-body-tertiary"
  container={
    <form className="d-flex" role="search">
      <input aria-label="Search" className="form-control me-2" placeholder="Search" type="search" />
      <button className="btn btn-outline-success" type="submit">
        Search
      </button>
    </form>
  }
/>

<Navbar
  className="bg-body-tertiary"
  container={
    <>
      <a className="navbar-brand">Navbar</a>
      <form className="d-flex" role="search">
        <input aria-label="Search" className="form-control me-2" placeholder="Search" type="search" />
        <button className="btn btn-outline-success" type="submit">
          Search
        </button>
      </form>
    </>
  }
/>

<Navbar
  className="bg-body-tertiary"
  container={
    <div className="input-group">
              <span className="input-group-text" id="basic-addon1">
                @
              </span>
      <input
        aria-describedby="basic-addon1"
        aria-label="Username"
        className="form-control"
        placeholder="Username"
        type="text"
      />
    </div>
  }
  containerProps={{
    as: 'form',
  }}
/>

<Navbar
  className="bg-body-tertiary"
  container={
    <>
      <button className="btn btn-outline-success me-2" type="button">
        Main button
      </button>
      <button className="btn btn-sm btn-outline-secondary" type="button">
        Smaller button
      </button>
    </>
  }
  containerProps={{
    as: 'form',
    className: 'justify-content-start',
  }}
/>
```
