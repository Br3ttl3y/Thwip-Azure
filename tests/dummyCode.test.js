const dummyCode = require("../src/dummyCode");

test("Runs dummy sum function: 1+2=3", () => {
  expect(dummyCode.sum(1, 2)).toBe(3);
});

test("Runs dummy difference function: 2-1=1", () => {
  expect(dummyCode.difference(2, 1)).toBe(1);
});
