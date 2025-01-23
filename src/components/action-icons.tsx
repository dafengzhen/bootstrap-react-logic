import {
  handleClipboard,
  handleToggleLanguage,
  handleToggleLayout,
  handleToggleState,
  handleToggleTheme,
} from '@tools/handlers';
import clsx from 'clsx';

export const ActionIcons = ({
  center,
  code,
  dark,
  fullscreen,
  fullscreenState,
  i18n,
  isOpen,
  layoutState,
  onClickCode,
  showCode = true,
  themeState,
}: {
  center?: boolean;
  code?: string;
  dark?: boolean;
  fullscreen?: boolean;
  fullscreenState: any;
  i18n: any;
  isOpen: boolean;
  layoutState: any;
  onClickCode: () => void;
  showCode?: boolean;
  themeState: any;
}) => {
  return (
    <div className="d-flex align-items-center gap-2">
      {showCode && (
        <>
          <i
            className={clsx('bi cursor-pointer', isOpen ? 'bi-code-slash text-primary' : 'bi-code')}
            onClick={onClickCode}
            title="Code"
          ></i>
          <i className="bi bi-clipboard2 cursor-pointer" onClick={() => handleClipboard(code)} title="Clipboard"></i>
        </>
      )}
      <i
        className={clsx('bi cursor-pointer', fullscreen ? 'bi-fullscreen-exit text-primary' : 'bi-fullscreen')}
        onClick={() => handleToggleState(fullscreenState, 'options_fullscreen', 'true', 'false')}
        title="Full / Full Exit"
      ></i>
      <i
        className={clsx('bi cursor-pointer', center ? 'bi-fullscreen-exit text-primary' : 'bi-arrows-fullscreen')}
        onClick={() => handleToggleLayout(layoutState)}
        title="Center / Full"
      ></i>
      <i
        className={clsx('bi cursor-pointer', dark ? 'bi-moon-stars-fill text-primary' : 'bi-brightness-high')}
        onClick={() => handleToggleTheme(themeState)}
        title="Light / Dark"
      ></i>

      <select
        className="form-select form-select-sm"
        onChange={() => {
          handleToggleLanguage(i18n);
        }}
        style={{ backgroundImage: 'none', paddingRight: '0.5rem' }}
        value={i18n.language}
      >
        <option value="en">EN</option>
        <option value="zh">ZH</option>
      </select>
    </div>
  );
};
