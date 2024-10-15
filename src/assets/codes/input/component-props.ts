const inputComponentPropsCodes = {
  inputComponentProps: {
    code: `
type SlotValueKeys = 'container' | 'start' | 'end' | 'component';

type Props = {
  /**
   * size.
   */
  size?: 'lg' | 'sm';

  /**
   * nativeSize.
   */
  nativeSize?: number | undefined;

  /**
   * readonlyPlainText.
   */
  readonlyPlainText?: boolean;

  /**
   * invalid.
   */
  invalid?: boolean;

  /**
   * color
   */
  color?: boolean;

  /**
   * nativeColor.
   */
  nativeColor?: string | undefined;

  /**
   * startContent.
   */
  startContent?: ReactNode;

  /**
   * endContent.
   */
  endContent?: ReactNode;

  /**
   * startEndContentClasses.
   */
  startEndContentClasses?: Partial<Record<SlotValueKeys, SlotValue>>;

  /**
   * onRef.
   */
  onRef?: LegacyRef<ElementRef<T>>;
};
    `,
  },
  inputOtpComponentProps: {
    code: `
type Props = {
  /**
   * length.
   */
  length?: number;

  /**
   * defaultValue.
   */
  defaultValue?: (string | number)[];

  /**
   * inputProps.
   */
  inputProps?: InputProps<'input'>;
};
    `,
  },
  textareaComponentProps: {
    code: `
type Props = {
  /**
   * disabled.
   */
  disabled?: boolean;

  /**
   * readonly.
   */
  readonly?: boolean;
};
    `,
  },
  labelComponentProps: {
    code: `
type Props = {
  /**
   * colFormLabel.
   */
  colFormLabel?: boolean;

  /**
   * inputGroupText.
   */
  inputGroupText?: boolean;
};
    `,
  },
  textComponentProps: {
    code: `
type Props = {};
    `,
  },
};

export default inputComponentPropsCodes;
