/** Regexp to filename template, which must include `{extension}` and `{index}` placeholder (e.g. qwerty_{index}.{extension}) */
export const FILE_NAME_TEMPLATE_REGEXP =
  /^(?=.*\{index\})(?=.*\{extension\})([a-zA-Z0-9._\-]*\{(?:index|extension|run_created_at|run_id)\}[a-zA-Z0-9._\-]*)*$/;

export const fileNamePlaceholder = '{run_created_at}_{index}.{extension}';
