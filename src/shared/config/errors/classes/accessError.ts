import { ErrorStatusCode } from '../constants';

export class AccessError extends Error {
  status = ErrorStatusCode.ACCESS;

  constructor(message = 'Access error') {
    super(message);
  }
}
