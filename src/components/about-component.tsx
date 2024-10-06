import CustomSimpleCardLink from '@components/custom-simple-card-link.tsx';

export default function AboutComponent() {
  return (
    <div className="card">
      <div className="card-header">
        <CustomSimpleCardLink title="Other" hash="other" />
      </div>
      <div className="card-body">
        <div>
          <p className="small">
            In the table, "-" represents an undefined value.
          </p>
          <p className="small">
            In the table, "..." indicates that there are other common properties
            or events. For more details, you can refer to the React JSX type
            hints.
          </p>
          <p className="small">
            If the component properties above do not achieve the desired effect,
            you can use a combination of <code>className</code>,{' '}
            <code>style</code>, <code>slot</code>, and custom JS logic to
            accomplish it.
          </p>
          <p className="small">
            If the use case requires a high level of complexity, you might
            consider forking a copy, rebuilding it, or looking for a better
            third-party library or alternative solution.
          </p>
          <p className="small">
            If you have a better implementation approach or other questions,
            feel free to submit an{' '}
            <a
              href="https://github.com/dafengzhen/bootstrap-react-logic/issues"
              target="_blank"
              className="small"
            >
              issue
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
