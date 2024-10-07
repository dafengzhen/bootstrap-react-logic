import {
  type ChangeEvent,
  type ElementType,
  type KeyboardEvent,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import type { InputOtpProps } from './types.ts';
import {
  clsxUnique,
  filterAndTransformProperties,
  filterOptions,
  generateRandomId,
  InputVariablesEnum,
  isArray,
  isValueValid,
  mergeProps,
  VARIABLE_BS_PREFIX,
} from '../tools';
import { Input } from '../input';

interface IOtp {
  id: string;
  value: string;
}

const InputOtp = function InputOtp<T extends ElementType = 'div'>(
  props: InputOtpProps<T>,
) {
  const {
    as: Component = 'div',
    dropOldClass,
    variables,
    className,
    style,
    length = 4,
    defaultValue,
    inputProps,
    ...rest
  } = props;

  const [otp, setOtp] = useState<IOtp[]>(() =>
    Array.from({ length }).map((_, index) => ({
      id: generateRandomId(),
      value: isArray(defaultValue) ? String(defaultValue[index]) : '',
    })),
  );

  const otpRefs = useRef<Map<string, HTMLInputElement | null | undefined>>(
    new Map(),
  );

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
    const finalStyle = {
      ...filterAndTransformProperties(variables, (_, key) => {
        const _value = InputVariablesEnum[key];
        return {
          include: true,
          transformedKey: _value ? key : `${VARIABLE_BS_PREFIX}${_value}`,
        };
      }),
      ...style,
    };

    return filterOptions(
      { className: finalClass, style: finalStyle },
      isValueValid,
    );
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
        const newOtp = prevOtp.map((otpItem, idx) =>
          idx === index ? { ...otpItem, value } : otpItem,
        );

        if (value && index < newOtp.length - 1) {
          focusInput(index + 1);
        }

        return newOtp;
      });
    },
    [focusInput],
  );

  const handleKeyDown = useCallback(
    (index: number, e: KeyboardEvent<HTMLInputElement>) => {
      const key = e.key;
      if (key === 'Backspace' && !otp[index].value && index > 0) {
        focusInput(index - 1);
      }

      if (
        (key === 'ArrowLeft' && index > 0) ||
        (key === 'ArrowRight' && index < otp.length - 1)
      ) {
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

  return (
    <Component {...rest} {...renderOptions}>
      {otp.map((item, index) => {
        const onRef = (instance: HTMLInputElement | null | undefined) =>
          otpRefs.current.set(item.id, instance);
        const onChange = (e: ChangeEvent<HTMLInputElement>) =>
          handleChange(index, e.target.value as string);
        const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) =>
          handleKeyDown(index, e);
        const onFocus = () => handleFocus(index);

        /* eslint-disable @typescript-eslint/no-explicit-any */
        const _inputProps = inputProps as any;

        return (
          <Input
            maxLength={1}
            className="text-center"
            {...mergeProps(_inputProps, {
              onRef: (instance: HTMLInputElement | null | undefined) => {
                onRef(instance);
                _inputProps?.onRef?.(instance);
              },
              onChange: (e: ChangeEvent<HTMLInputElement>) => {
                onChange(e);
                _inputProps?.onChange?.(e);
              },
              onKeyDown: (e: KeyboardEvent<HTMLInputElement>) => {
                onKeyDown(e);
                _inputProps?.onKeyDown?.(e);
              },
              onFocus: () => {
                onFocus();
                _inputProps?.onFocus?.();
              },
            })}
            key={item.id}
            value={item.value}
          />
        );
      })}
    </Component>
  );
};

InputOtp.displayName = 'BRL.InputOtp';

export default InputOtp;
