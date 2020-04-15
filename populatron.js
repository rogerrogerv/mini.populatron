const neatCsv = require("neat-csv");
const fs = require("fs");

const totalPopulation = (callback) => {
  fs.readFile("./cities.csv", async (err, data) => {
    if (err) {
      throw err;
    }
    console.log(await neatCsv(data));
  });
};

module.exports = {
  totalPopulation(onFinished) {},
};
