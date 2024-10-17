import type { CodeType } from '@src/types';

const generalCodes = {
  generalComponentProps: {
    code: `
type Props {
  /**
   * as.
   */
  as?: ElementType;

  /**
   * dropOldClass.
   */
  dropOldClass?: boolean;

  /**
   * variables.
   */
  variables?: CSSProperties;
}
    `,
  },
};

export default generalCodes as CodeType;
