const checkboxComponentPropsCodes = {
  checkboxComponentProps: {
    code: `
type SlotValueKeys = 'container' | 'checkbox' | 'label';

type Props = {
  /**
   * indeterminate.
   */
  indeterminate?: boolean;

  /**
   * disabled.
   */
  disabled?: boolean;
  
  /**
   * contentClasses.
   */
  contentClasses?: Partial<Record<SlotValueKeys, SlotValue>>;

  /**
   * switch.
   */
  switch?: boolean;

  /**
   * inline.
   */
  inline?: boolean;

  /**
   * reverse.
   */
  reverse?: boolean;
};
    `,
  },
};

export default checkboxComponentPropsCodes;
