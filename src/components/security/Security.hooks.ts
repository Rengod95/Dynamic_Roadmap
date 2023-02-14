import { useCallback, useEffect, useMemo, useState } from 'react';

export type Errors = Record<string, string>;

export const attempt = <T = any>(functionOrNot: ((...args: any) => T) | T, ...args: any) => {
  try {
    return typeof functionOrNot === 'function'
      ? (functionOrNot as (...args: any) => T)(...args)
      : functionOrNot;
  } catch (e) {
    return functionOrNot;
  }
};

export type Validate<TValues = unknown, TErrors extends Errors = Errors> = (
  values: TValues
) => TErrors;

export type SecurityOptions<TValues, TErrors extends Errors = Errors> = {
  values: TValues;
  validate: Validate<TValues, TErrors>;
  useErrorBoundary: boolean;
  onSuccess?: (values: TValues) => void;
  onError?: (errors: TErrors) => void;
};

export type SecurityResult<TValues> = {
  values: TValues;
  valid: boolean;
  errors?: Errors;
  reset: () => void;
};

export const useSecurity = function <TValues, TErrors extends Errors = Errors>({
  values,
  validate,
  useErrorBoundary = true,
  onSuccess,
  onError,
}: SecurityOptions<TValues, TErrors>) {
  const [errors, setErrors] = useState({});
  const valid = useMemo(() => !!errors && Object.keys(errors).length === 0, [errors]);
  const reset = useCallback(() => {
    setErrors({});
  }, []);

  useEffect(() => {
    if (!valid) return;
    (async () => {
      const errors = await validate(values);
      const valid = Object.keys(errors).length === 0;
      setErrors(errors);

      if (valid) onSuccess?.(values);
      else onError?.(errors);
    })();
  }, [valid, values]);

  if (useErrorBoundary && !valid) {
    const [message] = Object.values(errors);
    throw new Error(message as string);
  }

  return {
    values,
    valid,
    errors,
    reset,
  };
};
