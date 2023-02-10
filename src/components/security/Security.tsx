import { ReactNode, useState } from 'react';
import {
  attempt,
  SecurityOptions,
  useSecurity,
  Errors,
  SecurityResult,
} from '@/components/security/Security.hooks';

export type SecurityProps<TValues = unknown, TErrors extends Errors = Errors> = SecurityOptions<
  TValues,
  TErrors
> & {
  children?: ReactNode | ((arg: SecurityResult<TValues>) => ReactNode);
};
export const Security = <TValues, TErrors extends Errors>({
  children,
  ...options
}: SecurityProps<TValues, TErrors>) => {
  return <>{attempt(children, useSecurity<TValues, TErrors>(options))}</>;
};
