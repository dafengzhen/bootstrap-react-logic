const inputGroupComponentPropsCodes = {
  inputGroupComponentProps: {
    code: `
type Props = {
  /**
   * nowrap.
   */
  nowrap?: boolean;

  /**
   * size.
   */
  size?: 'lg' | 'sm';

  /**
   * hasValidation.
   */
  hasValidation?: boolean;
};
    `,
  },
  inputGroupTextComponentProps: {
    code: `
type Props = {
  /**
   * as.
   */
  as?: 'div' | 'span';

  /**
   * invalidFeedback.
   */
  invalidFeedback?: boolean;
};
    `,
  },
};

export default inputGroupComponentPropsCodes;
