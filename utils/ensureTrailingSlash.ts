export default (value: string) =>
  value[value.length - 1] === '/' ? value : `${value}/`;
