import { Error as ErrorType } from '../constants';

export class AccessError extends Error {
  status = ErrorType.ACCESS;

  constructor(message = 'Access error') {
    super(message);
  }
}
