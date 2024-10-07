const selectComponentPropsCodes = {
  selectComponentProps: {
    code: `
type Props {
  /**
   * as.
   */
  as?: 'select';

  /**
   * size.
   */
  size?: 'lg' | 'sm';

  /**
   * nativeSize (HTMLAttributes).
   */
  nativeSize?: number | undefined;

  /**
   * disabled.
   */
  disabled?: boolean;
};
    `,
  },
  selectOptionComponentProps: {
    code: `
type Props {
  /**
   * as.
   */
  as?: 'option';

  /**
   * disabled.
   */
  disabled?: boolean;
};
    `,
  },
  selectMultipleComponentProps: {
    code: `
type SlotValueKeys =
  | 'mainContainer'
  | 'optionsContainer'
  | 'placeholder'
  | 'activeOption'
  | 'clearIcon'
  | 'countDisplay'
  | 'floatingMenu'
  | 'header'
  | 'topDivider'
  | 'optionItem'
  | 'selectButton'
  | 'bottomDivider';

type SlotValue = string | ((originalClass: string) => string | undefined);

interface IOption {
  id?: string | number;
  value?: string | number;
  active?: boolean;
  disabled?: boolean;
  divider?: 'top' | 'bottom';
  header?: string;
  text: string;
}

type Props {
  /**
   * as.
   */
  as?: div;

  /**
   * disabled.
   */
  disabled?: boolean;

  /**
   * single.
   */
  single?: boolean;

  /**
   * hideActiveOptions.
   */
  hideActiveOptions?: boolean;

  /**
   * placeholder.
   */
  placeholder?: string;

  /**
   * selectableCount.
   */
  selectableCount?: number;

  /**
   * options.
   */
  options?: IOption[];

  /**
   * contentClasses.
   */
  contentClasses?: Partial<Record<SlotValueKeys, SlotValue>>;

  /**
   * onChange.
   */
  onChange?: (value: (string | number)[]) => void;
};
    `,
  },
  generalProps: {
    code: `
    
    `,
  },
  generalEvents: {
    code: `
    
    `,
  },
};

export default selectComponentPropsCodes;
