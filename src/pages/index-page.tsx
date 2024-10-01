import useHighlightCode from '@hooks/use-highlight-code.ts';

export default function IndexPage() {
  useHighlightCode();

  return (
    <div className="d-flex flex-column gap-3">
      <div className="card">
        <div className="card-header">
          <div className="d-flex align-items-center justify-content-between">
            <div>Docs</div>
            <div className="d-flex gap-2">
              <a
                href="https://github.com/dafengzhen/bootstrap-react-logic"
                target="_blank"
                className="link-dark"
              >
                <i className="bi bi-github tw-cursor-pointer"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="card-body">
          <div className="mb-4">
            <div className="card-title">
              Bootstrap React Logic (BRL) 是一个专为
              <a href="https://react.dev" target="_blank">
                &nbsp;React&nbsp;
              </a>
              应用设计的逻辑操作库，旨在与
              <a href="https://getbootstrap.com" target="_blank">
                &nbsp;Bootstrap&nbsp;
              </a>
              样式无缝结合，帮助开发者轻松构建丰富的交互式用户界面
            </div>

            <div className="card-text">
              BRL
              提供了一系列强大且灵活的逻辑组件，简化了状态管理和事件处理，使得创建动态、响应迅速的
              UI 变得更加高效。无论是复杂的表单处理、数据展示还是用户交互，BRL
              都能提供流畅的体验，助力开发者快速实现创意设计，提升开发效率
            </div>
          </div>

          <div className="h5 mb-4">一、安装</div>
          <div className="mb-4">
            <div className="mb-4">
              在安装之前请确保已经存在 <code>bootstrap</code> 依赖
            </div>

            <div className="mb-2">使用 npm 安装 BRL：</div>
            <div className="d-flex gap-2">
              <div className="user-select-none">#</div>
              <pre>
                <code className="nohighlight">
                  npm <span className="text-danger">install&nbsp;</span>
                  bootstrap-react-logic
                </code>
              </pre>
            </div>
          </div>

          <div className="h5 mb-4">二、使用</div>

          <div className="h5 mb-4">三、问题</div>
          <div className="mb-4">
            <div className="mb-2">Q: 为什么创建，和其他第三方库有什么区别?</div>
            <div>
              <div>1. 封装为组件，可以提高复用性和开发效率</div>
              <div>
                2.
                与其他第三方库相比，该库是根据项目的具体需求而开发的，因此可能并不适合所有用户的需求
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
