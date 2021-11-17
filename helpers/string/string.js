export const stringToId = (str) =>
  typeof str !== 'string' && !Number.isInteger(str)
    ? ''
    : str.trim().toLowerCase().replace(/\s+/g, '-');
