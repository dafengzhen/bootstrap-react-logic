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
};
    `,
  },
};

export default inputGroupComponentPropsCodes;
