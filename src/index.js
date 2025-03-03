const { app } = require("@azure/functions");
const getNextWednesdaySpiderManComics = require("./functions/NextWednesdaySpiderManComics");

app.http("getNextWednesdaySpiderManComics", {
  methods: ["GET"],
  authLevel: "anonymous",
  handler: getNextWednesdaySpiderManComics,
});
