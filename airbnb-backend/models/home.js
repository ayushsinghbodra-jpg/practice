const fs = require("fs");
const path = require("path");
const rootDir = require("../utils/pathUtil");
const { error } = require("console");
const { register } = require("module");

//fake databases
let registerHomes = [];

module.exports = class Home {
  constructor(Housename, Price, Location, Rating, HouseImage) {
    this.Housename = Housename;
    this.Price = Price;
    this.Location = Location;
    this.Rating = Rating;
    this.HouseImage = HouseImage;
  }

  save() {
    Home.fetchAll((registerHomes) => {
      registerHomes.push(this);
      const filePath = path.join(rootDir, "data", "registerHomeData.json");
      fs.writeFile(filePath, JSON.stringify(registerHomes), (error) => {
        console.log("File writting concluded", error);
      });
    });
  }

  static fetchAll(callback) {
    const filePath = path.join(rootDir, "data", "registerHomeData.json");
    const fileContent = fs.readFile(filePath, (error, data) => {
      if (!error) {
        callback(JSON.parse(data));
      } else {
        callback([]);
      }
    });
  }
};
