const onePromiseAtATime = <T, TParams>(
  f: (...args: TParams[]) => Promise<T>
) => {
  let promise: Promise<T> | null

  return (...args: TParams[]) => {
    if (promise) {
      return promise
    }

    return (promise = f(...args)
      .then(r => {
        promise = null
        return r
      })
      .catch(e => {
        promise = null
        return Promise.reject(e)
      }))
  }
}

export default onePromiseAtATime
