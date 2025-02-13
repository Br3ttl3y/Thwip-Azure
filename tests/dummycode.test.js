const sum = require("../src/dummycode");

test("Runs dummy sum function: 1+2=3", () => {
    expect(sum(1,2)).toBe(3);
});