```jsx
<Nav
  options={[
    {
      active: true,
      link: 'Home',
      linkProps: {
        as: 'button',
      },
      pane: (
        <p>
          This is some placeholder content the <strong>Home tab's</strong> associated content. Clicking another
          tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control
          the content visibility and styling. You can use it with tabs, pills, and any other <code>.nav</code>
          -powered navigation.
        </p>
      ),
    },
    {
      link: 'Profile',
      linkProps: {
        as: 'button',
      },
      pane: (
        <p>
          This is some placeholder content the <strong>Profile tab's</strong> associated content. Clicking
          another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to
          control the content visibility and styling. You can use it with tabs, pills, and any other{' '}
          <code>.nav</code>-powered navigation.
        </p>
      ),
    },
    {
      link: 'Contact',
      linkProps: {
        as: 'button',
      },
      pane: (
        <p>
          This is some placeholder content the <strong>Contact tab's</strong> associated content. Clicking
          another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to
          control the content visibility and styling. You can use it with tabs, pills, and any other{' '}
          <code>.nav</code>-powered navigation.
        </p>
      ),
    },
    {
      disabled: true,
      link: 'Disabled',
      linkProps: {
        as: 'button',
      },
    },
  ]}
  tabs
/>

<Nav
  as="nav"
  options={[
    {
      active: true,
      link: 'Home',
      linkProps: {
        as: 'button',
      },
      pane: (
        <p>
          This is some placeholder content the <strong>Home tab's</strong> associated content. Clicking another
          tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control
          the content visibility and styling. You can use it with tabs, pills, and any other <code>.nav</code>
          -powered navigation.
        </p>
      ),
    },
    {
      link: 'Profile',
      linkProps: {
        as: 'button',
      },
      pane: (
        <p>
          This is some placeholder content the <strong>Profile tab's</strong> associated content. Clicking
          another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to
          control the content visibility and styling. You can use it with tabs, pills, and any other{' '}
          <code>.nav</code>-powered navigation.
        </p>
      ),
    },
    {
      link: 'Contact',
      linkProps: {
        as: 'button',
      },
      pane: (
        <p>
          This is some placeholder content the <strong>Contact tab's</strong> associated content. Clicking
          another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to
          control the content visibility and styling. You can use it with tabs, pills, and any other{' '}
          <code>.nav</code>-powered navigation.
        </p>
      ),
    },
    {
      disabled: true,
      link: 'Disabled',
      linkProps: {
        as: 'button',
      },
    },
  ]}
  skipItem
  tabs
/>

<Nav
  options={[
    {
      active: true,
      link: 'Home',
      linkProps: {
        as: 'button',
      },
      pane: (
        <p>
          This is some placeholder content the <strong>Home tab's</strong> associated content. Clicking another
          tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control
          the content visibility and styling. You can use it with tabs, pills, and any other <code>.nav</code>
          -powered navigation.
        </p>
      ),
    },
    {
      link: 'Profile',
      linkProps: {
        as: 'button',
      },
      pane: (
        <p>
          This is some placeholder content the <strong>Profile tab's</strong> associated content. Clicking
          another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to
          control the content visibility and styling. You can use it with tabs, pills, and any other{' '}
          <code>.nav</code>-powered navigation.
        </p>
      ),
    },
    {
      link: 'Contact',
      linkProps: {
        as: 'button',
      },
      pane: (
        <p>
          This is some placeholder content the <strong>Contact tab's</strong> associated content. Clicking
          another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to
          control the content visibility and styling. You can use it with tabs, pills, and any other{' '}
          <code>.nav</code>-powered navigation.
        </p>
      ),
    },
    {
      disabled: true,
      link: 'Disabled',
      linkProps: {
        as: 'button',
      },
    },
  ]}
  pills
/>

<div className="d-flex align-items-start">
  <Nav
    as="nav"
    className="me-3"
    options={[
      {
        active: true,
        link: 'Home',
        linkProps: {
          as: 'button',
        },
        pane: (
          <p>
            This is some placeholder content the <strong>Home tab's</strong> associated content. Clicking
            another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to
            control the content visibility and styling. You can use it with tabs, pills, and any other{' '}
            <code>.nav</code>
            -powered navigation.
          </p>
        ),
      },
      {
        link: 'Profile',
        linkProps: {
          as: 'button',
        },
        pane: (
          <p>
            This is some placeholder content the <strong>Profile tab's</strong> associated content. Clicking
            another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to
            control the content visibility and styling. You can use it with tabs, pills, and any other{' '}
            <code>.nav</code>-powered navigation.
          </p>
        ),
      },
      {
        link: 'Contact',
        linkProps: {
          as: 'button',
        },
        pane: (
          <p>
            This is some placeholder content the <strong>Contact tab's</strong> associated content. Clicking
            another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to
            control the content visibility and styling. You can use it with tabs, pills, and any other{' '}
            <code>.nav</code>-powered navigation.
          </p>
        ),
      },
      {
        disabled: true,
        link: 'Disabled',
        linkProps: {
          as: 'button',
        },
      },
    ]}
    pills
    skipItem
    vertical
  />
</div>
```
