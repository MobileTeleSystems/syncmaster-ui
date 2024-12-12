import { QueryClient } from '@tanstack/react-query';
import { FormProps } from 'antd';

/**
 * Interface as Props for component "ManagedForm"
 *
 * @template T - Form values type.
 * @template R - Response type of request.
 */
export interface ManagedFormProps<T, R> extends Omit<FormProps<T>, 'form' | 'onFinish' | 'onError'> {
  /** Function for sending form data */
  mutationFunction: (params: T) => Promise<R>;
  /** Callback on success response from request */
  onSuccess: (response: R) => void;
  /** Notification message text on success response from request */
  successMessage?: string;
  /** Callback on error response from request */
  onError?: (error: unknown) => void;
  /** Keys for invalidate cache of other requests */
  keysInvalidateQueries?: Parameters<QueryClient['invalidateQueries']>[];
  /** Flag that hides a spin if the request is successful  */
  isHiddenLoadingOnSuccess?: boolean;
}
