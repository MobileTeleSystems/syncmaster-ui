/** Regexp to filename template, which must include `{extension}` and `{index}` placeholder (e.g. qwerty_{index}.{extension}) */
export const FILE_NAME_TEMPLATE_PATTERN =
  /^(?=.*\{index\})(?=.*\{extension\})([\w\d.\-]*\{(?:index|extension|run_created_at|run_id)\}[a-zA-Z0-9._\-]*)*$/iu;
