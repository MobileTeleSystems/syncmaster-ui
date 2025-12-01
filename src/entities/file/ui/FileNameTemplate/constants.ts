/** Regexp to filename template */
export const FILE_NAME_TEMPLATE_PATTERN = 
  /^[\w.-]*(\{index\}){0,1}[\w.-]*(\{run_id\}|\{run_created_at\})[\w.-]*(\{index\}){0,1}[\w.-]*\{extension\}$/iu;
