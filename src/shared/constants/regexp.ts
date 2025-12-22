/** Regexp like absolute path in unix and windows OS (e.g. /home) */
export const ABSOLUTE_PATH_PATTERN = /^\/[\w\d ]+[\w\d \/]*/iu;

/** Regexp to table name (e.g. schema.table or namespace1.namespace2.table) */
export const TABLE_NAME_PATTERN = /^[\w\d]+(\.[\w\d]+)+$/iu;
