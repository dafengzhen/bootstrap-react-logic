import {
  type KeyboardEvent,
  type ChangeEvent,
  type ElementType,
  type FocusEvent,
  useCallback,
  useEffect,
  useState,
  useMemo,
  useRef,
} from 'react';

import type { InputOtpProps } from './types.ts';

import {
  convertBsKeyToVar,
  generateRandomId,
  filterOptions,
  isValueValid,
  clsxUnique,
  mergeProps,
  clsxStyle,
  isArray,
} from '../tools';
import { Input } from '../input';

interface IOtp {
  value: string;
  id: string;
}

const InputOtp = function InputOtp<T extends ElementType = 'div'>(props: InputOtpProps<T>) {
  const {
    as: Component = 'div',
    maxLength = 1,
    defaultValue,
    dropOldClass,
    inputProps,
    length = 4,
    className,
    variables,
    style,
    ...rest
  } = props;

  const [otp, setOtp] = useState<IOtp[]>(() =>
    Array.from({ length }).map((_, index) => ({
      value: isArray(defaultValue) ? String(defaultValue[index]) : '',
      id: generateRandomId(),
    })),
  );

  const otpRefs = useRef<Map<string, HTMLInputElement | undefined | null>>(new Map());

  const mountedRef = useRef(false);

  useEffect(() => {
    if (mountedRef.current) {
      const currentRefs = otpRefs.current;
      return () => {
        currentRefs.clear();
      };
    } else {
      mountedRef.current = true;
    }
  }, []);

  const renderOptions = useMemo(() => {
    const finalClass = clsxUnique(!dropOldClass && 'd-flex gap-4', className);
    const finalStyle = clsxStyle({ ...variables, ...style }, true, (_, key) => {
      return convertBsKeyToVar(key);
    });

    return filterOptions({ className: finalClass, style: finalStyle }, isValueValid);
  }, [dropOldClass, className, variables, style]);

  const focusInput = useCallback(
    (index: number) => {
      otpRefs.current.get(otp[index].id)?.focus();
    },
    [otp],
  );

  const handleChange = useCallback(
    (index: number, value: string) => {
      setOtp((prevOtp) => {
        const newOtp = prevOtp.map((otpItem, idx) => (idx === index ? { ...otpItem, value } : otpItem));

        if (value.length === maxLength) {
          if (value && index < newOtp.length - 1) {
            focusInput(index + 1);
          }
        }

        return newOtp;
      });
    },
    [focusInput, maxLength],
  );

  const handleKeyDown = useCallback(
    (index: number, e: KeyboardEvent<HTMLInputElement>) => {
      const key = e.key;
      if (key === 'Backspace' && !otp[index].value && index > 0) {
        focusInput(index - 1);
      }

      if ((key === 'ArrowLeft' && index > 0) || (key === 'ArrowRight' && index < otp.length - 1)) {
        focusInput(key === 'ArrowLeft' ? index - 1 : index + 1);
        e.preventDefault();
      }
    },
    [otp, focusInput],
  );

  const handleFocus = useCallback(
    (index: number) => {
      otpRefs.current.get(otp[index].id)?.select();
    },
    [otp],
  );

  const onRef = useCallback(
    (instance: HTMLInputElement | null, item: IOtp) => {
      otpRefs.current.set(item.id, instance);
      (inputProps as any)?.onRef?.(instance);
    },
    [inputProps],
  );

  const onChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>, index: number) => {
      handleChange(index, e.target.value);
      (inputProps as any)?.onChange?.(e);
    },
    [handleChange, inputProps],
  );

  const onKeyDown = useCallback(
    (e: KeyboardEvent<HTMLInputElement>, index: number) => {
      handleKeyDown(index, e);
      (inputProps as any)?.onKeyDown?.(e);
    },
    [handleKeyDown, inputProps],
  );

  const onFocus = useCallback(
    (e: FocusEvent<HTMLInputElement>, index: number) => {
      handleFocus(index);
      (inputProps as any)?.onFocus?.(e);
    },
    [handleFocus, inputProps],
  );

  return (
    <Component {...rest} {...renderOptions}>
      {otp.map((item, index) => {
        return (
          <Input
            className="text-center"
            {...mergeProps(inputProps, {
              onKeyDown: (e: KeyboardEvent<HTMLInputElement>) => onKeyDown(e, index),
              onRef: (instance: HTMLInputElement | null) => onRef(instance, item),
              onChange: (e: ChangeEvent<HTMLInputElement>) => onChange(e, index),
              onFocus: (e: FocusEvent<HTMLInputElement>) => onFocus(e, index),
            })}
            maxLength={maxLength}
            value={item.value}
            key={item.id}
          />
        );
      })}
    </Component>
  );
};

InputOtp.displayName = 'BRL.InputOtp';

export default InputOtp;
