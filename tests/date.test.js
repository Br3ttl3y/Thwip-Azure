const {
  getNextWednesday,
  _private: { formatDate },
} = require("../src/utils/date");

describe("formatDate", () => {
  beforeEach(() => {
    jest.useFakeTimers("modern");
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  test("formats a date correctly", () => {
    // Arrange
    const marchFirst = new Date(2025, 2, 1);
    jest.setSystemTime(marchFirst);

    const expected = "2025-03-01";

    // Act
    const actual = formatDate(marchFirst);

    // Assert
    expect(actual).toBe(expected);
  });

  test("formats a date with single-digit month and day correctly", () => {
    // Arrange
    const januaryFirst = new Date(2025, 1, 14);
    jest.setSystemTime(januaryFirst);

    const expected = "2025-02-14";

    // Act
    const actual = formatDate(januaryFirst);

    // Assert
    expect(actual).toBe(expected);
  });

  test("formats a date with double-digit month and day correctly", () => {
    // Arrange
    const decemberThirtyFirst = new Date(2025, 10, 11);
    jest.setSystemTime(decemberThirtyFirst);

    const expected = "2025-11-11";

    // Act
    const actual = formatDate(decemberThirtyFirst);

    // Assert
    expect(actual).toBe(expected);
  });
});

describe("getNextWednesday", () => {
  beforeEach(() => {
    jest.useFakeTimers("modern");
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  test("returns the correct date when today is Wednesday", () => {
    // Arrange - Set today as Wednesday
    const wednesday = new Date(2025, 2, 5);
    jest.setSystemTime(wednesday);

    const expected = "2025-03-12"; // Wednesday after 2025-03-05

    // Act
    const actual = getNextWednesday();

    // Assert
    expect(actual).toBe(expected);
  });

  test("returns the correct date when today is not Wednesday", () => {
    // Arrange - Set today as Monday
    const monday = new Date(2025, 2, 3);
    jest.setSystemTime(monday);

    const expected = "2025-03-05"; // Wednesday after 2025-03-03

    // Act
    const actual = getNextWednesday();

    // Assert
    expect(actual).toBe(expected);
  });

  test("returns the correct date when today is Sunday", () => {
    // Arrange - Set today as Sunday
    const sunday = new Date(2025, 2, 2);
    jest.setSystemTime(sunday);

    const expected = "2025-03-05"; // Wednesday after 2025-03-02

    // Act
    const actual = getNextWednesday();

    // Assert
    expect(actual).toBe(expected);
  });
});
