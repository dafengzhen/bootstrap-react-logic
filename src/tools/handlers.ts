import { LOCAL_STORAGE_KEY_PREFIX } from '@src/App.tsx';

export const toggleLocalStorage = (key: string, value: any) => {
  localStorage.setItem(LOCAL_STORAGE_KEY_PREFIX + key, value);
};

export const handleClipboard = (code?: string) => {
  const trimmedCode = code?.trim();
  if (!trimmedCode || ['Nodata', 'nodata', 'TODO', 'todo'].includes(trimmedCode)) {
    alert(trimmedCode ?? 'TODO');
    return;
  }

  navigator.clipboard
    .writeText(trimmedCode)
    .then(() => alert('Code copied to clipboard'))
    .catch((e) => alert(`Failed to copy code: ${e?.message}`));
};

export const handleToggleState = (state: any, key: string, trueVal: string, falseVal: string) => {
  if (state) {
    const newValue = !state[0];
    state[1](newValue);
    toggleLocalStorage(key, newValue ? trueVal : falseVal);
  }
};

export const handleToggleLayout = (layoutState: any) => {
  if (layoutState) {
    const newLayout = layoutState[0] === 'center' ? 'fullscreen' : 'center';
    layoutState[1](newLayout);
    toggleLocalStorage('options_layout', newLayout);
  }
};

export const handleToggleTheme = (themeState: any) => {
  if (themeState) {
    const newTheme = themeState[0] === 'dark' ? 'light' : 'dark';
    themeState[1](newTheme);
    document.documentElement.setAttribute('data-bs-theme', newTheme);
    toggleLocalStorage('options_theme', newTheme);
  }
};

export const handleToggleLanguage = (i18n: any) => {
  const newLanguage = i18n.language === 'en' ? 'zh' : 'en';
  i18n.changeLanguage(newLanguage);
  toggleLocalStorage('options_language', newLanguage);
};

export const initCardState = (codeValue?: string) => ({
  code: codeValue?.trim(),
  openCode: false,
});

export const createState = (statesEnum: any, ...codes: any[]) => {
  return Object.fromEntries(
    Object.values(statesEnum)
      .map((enumKey) => {
        let code;
        for (const currentCodes of codes) {
          code = currentCodes[enumKey as any]?.code;
          if (code !== null && code !== undefined && code !== '') {
            break;
          }
        }

        if (code === null || code === undefined || code === '') {
          return;
        }

        return [enumKey, initCardState(code)];
      })
      .filter(Boolean) as any,
  );
};
