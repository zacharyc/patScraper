// Using tinyrq from this website: https://www.codementor.io/johnnyb/how-to-write-a-web-scraper-in-nodejs-du108266t
// Simple script for scraping the patagonia website and producing a table of thier stores
// Will be used on patagoniafanboy.com

var fs = require("fs");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

var file = fs.readFileSync("./page.html", "utf8");

const dom = new JSDOM(file);

console.log("here");
// console.log(file);

var doc = dom.window.document;

var results = doc.querySelector(".stores-header").textContent;
console.log(results);