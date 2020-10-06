const quicksort = require('./quicksort');
const selectionsort = require('./selectionsort');
const insertionsort = require('./insertion');
const bubblesort = require('./bubblesort');
// const { expect } = require('chai');

describe('Quicksort', () => {
  test('sorts array', () => {
    const qs = [4,  5,  7,  8, 12, 32, 47, 88];
    expect(qs).toStrictEqual(quicksort([5, 4, 7, 8, 12, 32, 88, 47]));
  });
  test('sorts array', () => {
    const qs = [20, 21, 21, 22, 22, 23, 24];
    expect(qs).toStrictEqual(quicksort([23, 22, 24, 21, 20, 21, 22]));
  });

  test(`error`, () => {
    expect(Err).toThrow(`please add an array`);
  });
});

describe('Selection Sort', () => {
  test('sorts array', () => {
    const ss = [4,  5,  7,  8, 12, 32, 47, 88];
    expect(ss).toStrictEqual(selectionsort([5, 4, 7, 8, 12, 32, 88, 47]));
  });
  test('sorts array', () => {
    const ss = [20, 21, 21, 22, 22, 23, 24];
    expect(ss).toStrictEqual(quicksort([23, 22, 24, 21, 20, 21, 22]));
  });
});

describe('Insertion Sort', () => {
  test('sorts array', () => {
    const is = [4,  5,  7,  8, 12, 32, 47, 88];
    expect(is).toStrictEqual(insertionsort([5, 4, 7, 8, 12, 32, 88, 47]));
  });
  test('sorts array', () => {
    const is = [20, 21, 21, 22, 22, 23, 24];
    expect(is).toStrictEqual(quicksort([23, 22, 24, 21, 20, 21, 22]));
  });
});

describe('Bubble Sort', () => {
  test('sorts array', () => {
    const bs = [4,  5,  7,  8, 12, 32, 47, 88];
    expect(bs).toStrictEqual(bubblesort([5, 4, 7, 8, 12, 32, 88, 47]));
  });
  test('sorts array', () => {
    const bs = [20, 21, 21, 22, 22, 23, 24];
    expect(bs).toStrictEqual(quicksort([23, 22, 24, 21, 20, 21, 22]));
  });
});