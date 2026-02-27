/** Returns the number of translations per new line */
export const getCountLines = (value: string): number =>
  typeof value === 'string' ? value.split(/\r\n|\r|\n/).length : 0;
