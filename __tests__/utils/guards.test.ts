import {isPromise} from '~shared/utils/guards'

it('checks value is promise', () => {
  expect(isPromise(5)).toBeFalsy()
  expect(isPromise(undefined)).toBeFalsy()
  expect(isPromise(null)).toBeFalsy()
  expect(isPromise({})).toBeFalsy()
  // tslint:disable-next-line:no-empty
  expect(isPromise(() => {})).toBeFalsy()
  expect(isPromise('not-promise')).toBeFalsy()
  expect(isPromise([])).toBeFalsy()

  expect(isPromise(Promise.resolve())).toBeTruthy()
})
