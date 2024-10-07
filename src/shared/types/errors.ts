interface ErrorDefault {
  code: string;
  message: string;
}

type ErrorLocationType = 'body' | 'query';

interface ErrorFormField extends ErrorDefault {
  location: [Extract<ErrorLocationType, 'body'>, string];
}

export interface ErrorMessage {
  error: ErrorDefault;
}

export interface ErrorFormFields {
  error: ErrorDefault & {
    details: ErrorFormField[];
  };
}
