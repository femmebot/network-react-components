"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const onePromiseAtAtTime_1 = require("~shared/utils/onePromiseAtAtTime");
it('only caches a promise that is currently beign executed', () => __awaiter(this, void 0, void 0, function* () {
    let count = 0;
    const myPromise = onePromiseAtAtTime_1.default(() => new Promise(resolve => {
        count += 1;
        setTimeout(resolve, 5);
    }));
    yield Promise.all([
        myPromise(),
        myPromise(),
        () => {
            expect(count).toEqual(1);
        },
    ]);
    yield myPromise();
    expect(count).toEqual(2);
}));
it('forwards arguments and returns values', () => __awaiter(this, void 0, void 0, function* () {
    const myPromise = onePromiseAtAtTime_1.default(v => Promise.resolve(v));
    const result = yield myPromise('value');
    expect(result).toEqual('value');
}));
it('persists rejected promises', () => __awaiter(this, void 0, void 0, function* () {
    let rejectedCount = 0;
    const rejectedPromise = onePromiseAtAtTime_1.default(() => new Promise((_resolve, reject) => {
        rejectedCount += 1;
        setTimeout(() => reject('Something happened'), 5);
    }));
    try {
        yield rejectedPromise();
        // tslint:disable-next-line:no-empty
    }
    catch (e) { }
    try {
        yield rejectedPromise();
        // tslint:disable-next-line:no-empty
    }
    catch (e) { }
    expect(rejectedCount).toEqual(2);
}));
//# sourceMappingURL=onePromiseAtATime.test.js.map