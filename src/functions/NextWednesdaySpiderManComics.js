const date = require("../utils/date");
const { getMarvelApiData } = require("../utils/marvelApi");
const API_URLS = require("../constants/marvelApiUrls");
const API_CONST = require("../constants/marvelApiConstants");

module.exports = async function (context) {
  if (typeof context.log !== "function") {
    context.log = console.log;
  }

  const { SPIDERMAN_PETER_PARKER_ID } = API_CONST;
  const { BASE_URL, COMICS } = API_URLS;

  const nextWednesdayDate = date.getNextWednesday();
  context.log(`Next Wednesday's date: ${nextWednesdayDate}`);

  try {
    const params = {
      format: "comic",
      formatType: "comic",
      dateRange: `${nextWednesdayDate},${nextWednesdayDate}`,
      characters: SPIDERMAN_PETER_PARKER_ID,
      orderBy: "onsaleDate",
      limit: 1,
      offset: 0,
    };

    const url = `${BASE_URL}${COMICS}`;
    context.log(
      `Fetching data from URL: ${url} with params: ${JSON.stringify(params)}`,
    );
    const comics = await getMarvelApiData(url, params);

    context.log(`Fetched comics data: ${JSON.stringify(comics.data.results)}`);
    context.res = {
      status: 200,
      body: comics.data.results,
    };
  } catch (error) {
    context.log(`Error fetching comics data: ${error.message}`);
    context.res = {
      status: error.response?.status || 500,
      body:
        error.response?.data ||
        `Error getting next Wednesday's Spider-Man comics: ${error.message}`,
    };
  }
};
