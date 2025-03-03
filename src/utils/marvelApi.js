const axios = require("axios");
const md5 = require("md5");
const marvelConfig = require("../config/marvelConfig");

const getMarvelApiData = async (url, params = {}) => {
  const { PUBLIC_KEY, PRIVATE_KEY } = marvelConfig;

  const ts = new Date().getTime();
  const hash = md5(ts + PRIVATE_KEY + PUBLIC_KEY);

  const axiosParams = {
    ts,
    apikey: PUBLIC_KEY,
    hash,
    ...params,
  };

  try {
    const response = await axios.get(url, {
      params: axiosParams,
    });

    return response.data;
  } catch (error) {
    throw new Error(`Marel API error: ${error.message}`);
  }
};

module.exports = {
  getMarvelApiData,
};
