import {
  type ChangeEvent,
  type ElementType,
  type FocusEvent,
  type KeyboardEvent,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

import type { InputOtpProps } from './types.ts';

import { Input } from '../input';
import { classx, convertBsKeyToVar, generateRandomId, isArray, mergeProps, stylex } from '../tools';

interface IOtp {
  id: string;
  value: string;
}

const InputOtp = function InputOtp<T extends ElementType = 'input'>(props: InputOtpProps<T>) {
  const {
    as: Component = 'div' as ElementType,
    className,
    defaultValue,
    dropOldClass,
    inputProps,
    length = 4,
    maxLength = 1,
    style,
    variables,
    ...rest
  } = props;

  const [otp, setOtp] = useState<IOtp[]>(() =>
    Array.from({ length }).map((_, index) => ({
      id: generateRandomId(),
      value: isArray(defaultValue) ? String(defaultValue[index]) : '',
    })),
  );

  const otpRefs = useRef<Map<string, HTMLInputElement | null | undefined>>(new Map());

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
    const finalClass = classx(!dropOldClass && 'd-flex gap-4', className);
    const finalStyle = stylex((_, key) => ({ tKey: convertBsKeyToVar(key) }), variables, style);

    return { className: finalClass, style: finalStyle };
  }, [className, dropOldClass, style, variables]);

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
              onChange: (e: ChangeEvent<HTMLInputElement>) => onChange(e, index),
              onFocus: (e: FocusEvent<HTMLInputElement>) => onFocus(e, index),
              onKeyDown: (e: KeyboardEvent<HTMLInputElement>) => onKeyDown(e, index),
              onRef: (instance: HTMLInputElement | null) => onRef(instance, item),
            })}
            key={item.id}
            maxLength={maxLength}
            value={item.value}
          />
        );
      })}
    </Component>
  );
};

InputOtp.displayName = 'BRL.InputOtp';

export default InputOtp;
