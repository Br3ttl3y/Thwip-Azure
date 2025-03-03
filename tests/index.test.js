const { app } = require("@azure/functions");
const getNextWednesdaySpiderManComics = require("../src/functions/NextWednesdaySpiderManComics");

jest.mock("@azure/functions", () => ({
  app: {
    http: jest.fn(),
  },
}));

describe("index", () => {
  it("registers the getNextWednesdaySpiderManComics function", () => {
    // Arrange
    const expectedFunctionName = "getNextWednesdaySpiderManComics";
    const expectedConfig = {
      methods: ["GET"],
      authLevel: "anonymous",
      handler: getNextWednesdaySpiderManComics,
    };

    // Act
    require("../src/index");

    // Assert
    expect(app.http).toHaveBeenCalledWith(expectedFunctionName, expectedConfig);
  });
});
