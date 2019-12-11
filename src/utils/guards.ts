export const isPromise = (value: any): value is Promise<any> => {
  if (value !== null && typeof value === 'object') {
    return value && typeof value.then === 'function';
  }
  return false;
};
