// Using tinyrq from this website: https://www.codementor.io/johnnyb/how-to-write-a-web-scraper-in-nodejs-du108266t
// Simple script for scraping the patagonia website and producing a table of thier stores
// Will be used on patagoniafanboy.com
const request = require("tinyreq");

console.log("This should be happening")
request("http://patagonia.com/", function (err, body) {
    console.log(err || body); // Print out the HTML
});