"use strict";

var _guards = require("../../utils/guards");

it('checks value is promise', function () {
  expect((0, _guards.isPromise)(5)).toBeFalsy();
  expect((0, _guards.isPromise)(undefined)).toBeFalsy();
  expect((0, _guards.isPromise)(null)).toBeFalsy();
  expect((0, _guards.isPromise)({})).toBeFalsy(); // tslint:disable-next-line:no-empty

  expect((0, _guards.isPromise)(function () {})).toBeFalsy();
  expect((0, _guards.isPromise)('not-promise')).toBeFalsy();
  expect((0, _guards.isPromise)([])).toBeFalsy();
  expect((0, _guards.isPromise)(Promise.resolve())).toBeTruthy();
});