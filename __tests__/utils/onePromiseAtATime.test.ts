import onePromiseAtATime from '~shared/utils/onePromiseAtAtTime';

it('only caches a promise that is currently beign executed', async () => {
  let count = 0;
  const myPromise = onePromiseAtATime(
    () =>
      new Promise(resolve => {
        count += 1;
        setTimeout(resolve, 5);
      })
  );

  await Promise.all([
    myPromise(),
    myPromise(),
    () => {
      expect(count).toEqual(1);
    },
  ]);

  await myPromise();
  expect(count).toEqual(2);
});

it('forwards arguments and returns values', async () => {
  const myPromise = onePromiseAtATime(v => Promise.resolve(v));

  const result = await myPromise('value');
  expect(result).toEqual('value');
});

it('persists rejected promises', async () => {
  let rejectedCount = 0;
  const rejectedPromise = onePromiseAtATime(
    () =>
      new Promise((_resolve, reject) => {
        rejectedCount += 1;
        setTimeout(() => reject('Something happened'), 5);
      })
  );
  try {
    await rejectedPromise();
    // tslint:disable-next-line:no-empty
  } catch (e) {}
  try {
    await rejectedPromise();
    // tslint:disable-next-line:no-empty
  } catch (e) {}

  expect(rejectedCount).toEqual(2);
});
