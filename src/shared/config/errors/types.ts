interface DefaultError {
  code: string;
  message: string;
}

type LocationTypeError = 'body' | 'query';

export interface FormFieldError extends DefaultError {
  location: [Extract<LocationTypeError, 'body'>, string];
}

export interface MessageError {
  error: DefaultError;
}

export interface FormFieldsError {
  error: DefaultError & {
    details: FormFieldError[];
  };
}
