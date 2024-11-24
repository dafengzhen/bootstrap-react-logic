import {
  handleToggleLanguage,
  handleToggleLayout,
  handleToggleState,
  handleToggleTheme,
  handleClipboard,
} from '@tools/handlers';
import clsx from 'clsx';

export const ActionIcons = ({
  fullscreenState,
  showCode = true,
  layoutState,
  onClickCode,
  fullscreen,
  themeState,
  center,
  isOpen,
  code,
  dark,
  i18n,
}: {
  onClickCode: () => void;
  fullscreen?: boolean;
  fullscreenState: any;
  showCode?: boolean;
  center?: boolean;
  layoutState: any;
  isOpen: boolean;
  themeState: any;
  dark?: boolean;
  code?: string;
  i18n: any;
}) => {
  return (
    <div className="d-flex align-items-center gap-2">
      {showCode && (
        <>
          <i
            className={clsx('bi tw-cursor-pointer', isOpen ? 'bi-code-slash text-primary' : 'bi-code')}
            onClick={onClickCode}
            title="Code"
          ></i>
          <i className="bi bi-clipboard2 tw-cursor-pointer" onClick={() => handleClipboard(code)} title="Clipboard"></i>
        </>
      )}
      <i
        className={clsx('bi tw-cursor-pointer', fullscreen ? 'bi-fullscreen-exit text-primary' : 'bi-fullscreen')}
        onClick={() => handleToggleState(fullscreenState, 'options_fullscreen', 'true', 'false')}
        title="Full / Full Exit"
      ></i>
      <i
        className={clsx('bi tw-cursor-pointer', center ? 'bi-fullscreen-exit text-primary' : 'bi-arrows-fullscreen')}
        onClick={() => handleToggleLayout(layoutState)}
        title="Center / Full"
      ></i>
      <i
        className={clsx('bi tw-cursor-pointer', dark ? 'bi-moon-stars-fill text-primary' : 'bi-brightness-high')}
        onClick={() => handleToggleTheme(themeState)}
        title="Light / Dark"
      ></i>

      <select
        onChange={() => {
          handleToggleLanguage(i18n);
        }}
        style={{ backgroundImage: 'none', paddingRight: '0.5rem' }}
        className="form-select form-select-sm"
        value={i18n.language}
      >
        <option value="en">EN</option>
        <option value="zh">ZH</option>
      </select>
    </div>
  );
};
