const { getMarvelApiData } = require("../src/utils/marvelApi");

describe("getMarvelApiData Integration Test", () => {
  const url = "http://gateway.marvel.com/v1/public/characters";
  const params = { id: 1009610 }; // Spider-Man (Peter Parker) character ID

  it("should fetch data from Marvel API with correct parameters", async () => {
    try {
      const data = await getMarvelApiData(url, params);

      console.log(data); // Log the response data for debugging

      expect(data).toHaveProperty("data.results");
      expect(data.data.results.length).toBeGreaterThan(0);
      expect(data.data.results[0].id).toBe(params.id); // Verify the character ID
    } catch (error) {
      console.error(`Error: ${error.message}`); // Log the error message for debugging
      throw error; // Re-throw the error to fail the test
    }
  });
});
