import { type ElementType, useCallback, useState } from 'react';

import type { AccordionOption, AccordionProps } from './types.ts';

import AccordionHeader from './accordion-header.tsx';
import AccordionBasic from './accordion-basic.tsx';
import AccordionBody from './accordion-body.tsx';
import AccordionItem from './accordion-item.tsx';

const Accordion = function Accordion<T extends ElementType = 'div'>(props: AccordionProps<T>) {
  const {
    onChange: onChangeByDefault,
    options: defaultOptions,
    as: Component = 'div',
    alwaysOpen,
    collapsing,
    ...rest
  } = props;
  const initialOptions = (defaultOptions ?? []).map((item, index) => ({
    ...item,
    collapsed: item.collapsed === undefined ? false : item.collapsed,
    show: item.show === undefined ? true : item.show,
    id: item.id ?? index,
  }));
  const [options, setOptions] = useState<AccordionOption[]>(initialOptions);
  const [currentOption, setCurrentOption] = useState<AccordionOption | undefined>(
    options.find((item) => !item.collapsed && item.show),
  );

  const onClickCurrentOption = useCallback((item: AccordionOption) => {
    setCurrentOption(item);
  }, []);

  const onClickHeader = useCallback(
    (index: number) => {
      setOptions((prevOptions) => {
        return prevOptions.map((optionItem, idx) => {
          let collapsed;
          let show;

          if (idx === index) {
            collapsed = !optionItem.collapsed;
            show = !optionItem.show;
          } else {
            if (alwaysOpen) {
              collapsed = optionItem.collapsed;
              show = optionItem.show;
            } else {
              collapsed = idx !== index;
              show = idx === index;
            }
          }

          return {
            ...optionItem,
            collapsed,
            show,
          };
        });
      });
    },
    [alwaysOpen],
  );

  const onChange = useCallback(
    (visible: boolean) => {
      const id = currentOption?.id;
      if (id !== undefined) {
        onChangeByDefault?.(id, visible);
      }
    },
    [currentOption?.id, onChangeByDefault],
  );

  return (
    <AccordionBasic as={Component as 'div'} {...rest}>
      {options.map((item, index) => {
        return (
          <AccordionItem key={item.id}>
            <AccordionHeader
              buttonProps={{
                onClick: () => {
                  onClickCurrentOption(item);
                  onClickHeader(index);
                },
              }}
              collapsed={item.collapsed}
            >
              {item.header}
            </AccordionHeader>
            <AccordionBody collapsing={collapsing} onChange={onChange} show={item.show}>
              {item.body}
            </AccordionBody>
          </AccordionItem>
        );
      })}
    </AccordionBasic>
  );
};

Accordion.displayName = 'BRL.Accordion';

export default Accordion;
