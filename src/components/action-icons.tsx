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
  center?: boolean;
  layoutState: any;
  isOpen: boolean;
  themeState: any;
  dark?: boolean;
  code?: string;
  i18n: any;
}) => {
  return (
    <div className="d-flex gap-2">
      <i
        className={clsx('bi tw-cursor-pointer', isOpen ? 'bi-code-slash text-primary' : 'bi-code')}
        onClick={onClickCode}
        title="Code"
      ></i>
      <i className="bi bi-clipboard2 tw-cursor-pointer" onClick={() => handleClipboard(code)} title="Clipboard"></i>
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
      <i
        className={clsx('bi tw-cursor-pointer', i18n.language !== 'en' ? 'bi-translate text-primary' : 'bi-translate')}
        onClick={() => handleToggleLanguage(i18n)}
        title="En / Zh"
      ></i>
    </div>
  );
};
