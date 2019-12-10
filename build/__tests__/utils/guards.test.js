"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const guards_1 = require("~shared/utils/guards");
it('checks value is promise', () => {
    expect(guards_1.isPromise(5)).toBeFalsy();
    expect(guards_1.isPromise(undefined)).toBeFalsy();
    expect(guards_1.isPromise(null)).toBeFalsy();
    expect(guards_1.isPromise({})).toBeFalsy();
    // tslint:disable-next-line:no-empty
    expect(guards_1.isPromise(() => { })).toBeFalsy();
    expect(guards_1.isPromise('not-promise')).toBeFalsy();
    expect(guards_1.isPromise([])).toBeFalsy();
    expect(guards_1.isPromise(Promise.resolve())).toBeTruthy();
});
//# sourceMappingURL=guards.test.js.map