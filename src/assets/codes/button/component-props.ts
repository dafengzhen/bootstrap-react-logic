const buttonComponentPropsCodes = {
  buttonComponentProps: {
    code: `
type Props = {
  /**
   * variant.
   */
  variant?: 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark' | 'link';

  /**
   * outline.
   */
  outline?: 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark' | 'link';

  /**
   * rounded.
   */
  rounded?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'circle' | 'pill' | boolean;

  /**
   * size.
   */
  size?: 'lg' | 'sm';

  /**
   * active.
   */
  active?: boolean;

  /**
   * isLoading.
   */
  isLoading?: boolean;

  /**
   * startContent.
   */
  startContent?: ReactNode;

  /**
   * endContent.
   */
  endContent?: ReactNode;

  /**
   * disabled.
   */
  disabled?: boolean;
};
    `,
  },
};

export default buttonComponentPropsCodes;
