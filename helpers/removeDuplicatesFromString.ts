export const removeDuplicatesFromString = (str: string) => [...new Set(str)].join('').trim();