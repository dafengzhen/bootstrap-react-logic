export default function IndexPage() {
  return (
    <div className="d-flex flex-column gap-3">
      <div className="card">
        <div className="card-header">
          <div className="d-flex align-items-center justify-content-between">
            <div>Bootstrap React Logic</div>
            <div className="d-flex gap-2">
              <a href="https://github.com/dafengzhen/bootstrap-react-logic" className="link-dark" target="_blank">
                <i className="bi bi-github tw-cursor-pointer"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="card-body">
          <div className="mb-4 lh-lg">
            <div className="card-title h5">Getting started</div>
          </div>

          <div className="mb-4 lh-lg">
            <div className="card-title">
              BRL is a React component library integrated with{' '}
              <a href="https://getbootstrap.com" target="_blank">
                &nbsp;Bootstrap&nbsp;
              </a>
              , offering a set of components and utilities to help developers build user interfaces in{' '}
              <a href="https://react.dev" target="_blank">
                &nbsp;React&nbsp;
              </a>{' '}
              applications, enhancing development efficiency.
            </div>
          </div>

          <div className="mb-4 lh-lg">
            <div className="card-title h5">Features</div>
            <ul>
              <li className="card-text">
                <span className="fw-semibold">Bootstrap Integration: </span>Consistent with Bootstrap UI elements,
                ensuring unified appearance and behavior.
              </li>
              <li className="card-text">
                <span className="fw-semibold">Built with React: </span>Components are built using React, following React
                development patterns, making them easy to integrate and maintain.
              </li>
            </ul>
          </div>

          <div className="mb-4 lh-lg">
            <div className="card-title h5">Installation</div>
            <ol>
              <li className="card-text">
                Before installation, ensure that <span className="fw-semibold">Bootstrap</span> is already installed in
                your project. You can install it via npm:
              </li>
              <li className="card-text">
                <div className="d-flex gap-2">
                  <div className="user-select-none">#</div>
                  <pre>
                    <code className="nohighlight">
                      npm <span className="text-danger">install</span> bootstrap-react-logic
                    </code>
                  </pre>
                </div>
              </li>
            </ol>
          </div>

          <div className="mb-4 lh-lg">
            <div className="card-title h5">Usage</div>
            <ol>
              <li className="card-text">
                Import Bootstrap styles: To ensure BRL components are styled correctly, first import the global CSS
                file:
              </li>
              <li className="card-text">
                <div className="d-flex gap-2">
                  <div className="user-select-none">#</div>
                  <pre>
                    <code className="nohighlight">
                      <span className="text-danger">import</span>{' '}
                      'bootstrap-react-logic/dist-lib/bootstrap-react-logic.css';
                    </code>
                  </pre>
                </div>
              </li>
              <li className="card-text">
                Import and use BRL components: Now you can use the components provided by BRL just like any other React
                component. For example, to use the Button component:
              </li>
              <li className="card-text">
                <div className="d-flex gap-2">
                  <div className="user-select-none">#</div>
                  <pre>
                    <code className="nohighlight">
                      import &#123; Button &#125; from 'bootstrap-react-logic';
                      <br />
                      <span className="text-danger">&lt;Button</span> variant="primary"
                      <span className="text-danger">&gt;</span>Primary
                      <span className="text-danger">&lt;/Button&gt;</span>;
                    </code>
                  </pre>
                </div>
              </li>
            </ol>
          </div>

          <div className="mb-4 lh-lg">
            <div className="card-title h5">Available Components</div>
            <div className="card-text">
              For more examples and complete component documentation, please refer to the{' '}
              <a href="https://dafengzhen.github.io/bootstrap-react-logic" target="_blank">
                documentation
              </a>
              .
            </div>
          </div>

          <div className="mb-4 lh-lg">
            <div className="card-title h5">License</div>
            <div className="card-text">
              <a href="https://opensource.org/licenses/MIT" target="_blank">
                MIT
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
