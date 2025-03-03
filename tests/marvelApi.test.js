const axios = require("axios");
const md5 = require("md5");
const { getMarvelApiData } = require("../src/utils/marvelApi");
const marvelConfig = require("../src/config/marvelConfig");

jest.mock("axios");
jest.mock("md5");

describe("getMarvelApiData", () => {
  const url = "http://gateway.marvel.com/v1/public/characters";
  const params = { name: "Spider-Man" };
  const ts = 1234567890;
  const hash = "mockedHash";
  const responseData = { data: { results: [{ id: 1, name: "Spider-Man" }] } };

  beforeEach(() => {
    jest.spyOn(Date.prototype, "getTime").mockReturnValue(ts);
    md5.mockReturnValue(hash);
    axios.get.mockResolvedValue({ data: responseData });
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("should fetch data from Marvel API with correct parameters", async () => {
    const data = await getMarvelApiData(url, params);

    expect(md5).toHaveBeenCalledWith(
      ts + marvelConfig.PRIVATE_KEY + marvelConfig.PUBLIC_KEY,
    );

    expect(axios.get).toHaveBeenCalledWith(url, {
      params: {
        ts,
        apikey: marvelConfig.PUBLIC_KEY,
        hash,
        ...params,
      },
    });

    expect(data).toEqual(responseData);
  });

  it("should throw an error when the API request fails", async () => {
    const errorMessage = "Network Error";
    axios.get.mockRejectedValue(new Error(errorMessage));

    await expect(getMarvelApiData(url, params)).rejects.toThrow(
      `Marel API error: ${errorMessage}`,
    );
  });

  it("should use default params when no params are provided", async () => {
    const data = await getMarvelApiData(url);

    expect(axios.get).toHaveBeenCalledWith(url, {
      params: {
        ts,
        apikey: marvelConfig.PUBLIC_KEY,
        hash,
      },
    });
    expect(data).toEqual(responseData);
  });
});
