const radioComponentPropsCodes = {
  radioComponentProps: {
    code: `
type SlotValueKeys = 'container' | 'checkbox' | 'label';

type Props = {
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

export default radioComponentPropsCodes;
