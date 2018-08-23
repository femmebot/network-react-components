export function castToArray<T>(data: T | T[] | null): T[] {
  if (data == null) {
    const emptyArray: T[] = new Array()
    return emptyArray
  }

  if (data instanceof Array) {
    return data
  }

  return [data]
}
