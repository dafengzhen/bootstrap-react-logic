import CustomSimpleCardLink from '@components/custom-simple-card-link.tsx';

export default function AboutComponent() {
  return (
    <div className="card">
      <div className="card-header">
        <CustomSimpleCardLink title="其他" hash="other" />
      </div>
      <div className="card-body">
        <div>
          <p className="small">表格中的 "-" 代表着未定义该值</p>
          <p className="small">
            表格中的 "..." 代表着还有其他通用属性或事件，具体可以参考 React JSX
            的类型提示
          </p>
          <p
            className="small"
            dangerouslySetInnerHTML={{
              __html: `如果上述组件属性无法达到你想要的效果，可以结合使用
            <code>className</code>、<code>style</code>、<code>render</code> 自定义 JS
            逻辑来完成`,
            }}
          ></p>
          <p className="small">
            如果用例是需要高度复杂的，则可以考虑 Fork
            一份，重新构建或者寻找更好的第三方库或其他方案
          </p>
          <p className="small">
            如果有更好的实现方式或者其他问题，欢迎提交
            <a
              href="https://github.com/dafengzhen/bootstrap-react-logic/issues"
              target="_blank"
              className="small"
            >
              &nbsp;issues
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
