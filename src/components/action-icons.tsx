import clsx from 'clsx';
import {
  handleClipboard,
  handleToggleLanguage,
  handleToggleLayout,
  handleToggleState,
  handleToggleTheme,
} from '@tools/handlers';
import useHighlightCode from '@hooks/use-highlight-code.ts';

export const ActionIcons = ({
  isOpen,
  code,
  fullscreen,
  fullscreenState,
  layoutState,
  center,
  themeState,
  dark,
  i18n,
  onClickCode,
}: {
  isOpen: boolean;
  code?: string;
  fullscreen?: boolean;
  fullscreenState: any;
  layoutState: any;
  center?: boolean;
  themeState: any;
  dark?: boolean;
  i18n: any;
  onClickCode: () => void;
}) => {
  useHighlightCode({ isOpen });

  return (
    <div className="d-flex gap-2">
      <i
        title="Code"
        className={clsx('bi tw-cursor-pointer', isOpen ? 'bi-code-slash text-primary' : 'bi-code')}
        onClick={onClickCode}
      ></i>
      <i title="Clipboard" className="bi bi-clipboard2 tw-cursor-pointer" onClick={() => handleClipboard(code)}></i>
      <i
        title="Full / Full Exit"
        className={clsx('bi tw-cursor-pointer', fullscreen ? 'bi-fullscreen-exit text-primary' : 'bi-fullscreen')}
        onClick={() => handleToggleState(fullscreenState, 'options_fullscreen', 'true', 'false')}
      ></i>
      <i
        title="Center / Full"
        className={clsx('bi tw-cursor-pointer', center ? 'bi-fullscreen-exit text-primary' : 'bi-arrows-fullscreen')}
        onClick={() => handleToggleLayout(layoutState)}
      ></i>
      <i
        title="Light / Dark"
        className={clsx('bi tw-cursor-pointer', dark ? 'bi-moon-stars-fill text-primary' : 'bi-brightness-high')}
        onClick={() => handleToggleTheme(themeState)}
      ></i>
      <i
        title="En / Zh"
        className={clsx('bi tw-cursor-pointer', i18n.language !== 'en' ? 'bi-translate text-primary' : 'bi-translate')}
        onClick={() => handleToggleLanguage(i18n)}
      ></i>
    </div>
  );
};
