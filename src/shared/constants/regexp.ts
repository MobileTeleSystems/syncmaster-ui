/** Regexp like absolute path in unix and windows OS (e.g. /home) */
export const ABSOLUTE_PATH_REGEXP = /^(?:[a-zA-Z]:\\|\/)/;

/** Regexp to table name (e.g. schema.table) */
export const TABLE_NAME_PATTERN = /^[\w\d]+\.[\w\d]+$/iu;

/** Regexp to input only digits and digits with fractional part (e.g. 123.22) */
export const NUMBER_REGEXP = /\d*\.?\d+$/;

/** Regexp to input only digits and (e.g. 354) */
export const INTEGER_REGEXP = /^\d+$/;
