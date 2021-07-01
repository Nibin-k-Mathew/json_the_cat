const request = require('request');
let breed = process.argv[2];
request('https://api.thecatapi.com/v1/breeds/search?q='+breed 
, function (error, response, body) {
  if(error) {
  return console.log("sorry there was an error", error.errno);
  }
  // console.error('error:', error); // Print the error if one occurred
  // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  // console.log('body:', body); // Print the HTML for the Google homepage.
  // console.log(typeof body);
const data = JSON.parse(body);
// console.log(data);
// console.log(typeof data);
// console.log("data[0]", data[0]);
if(data[0] !== undefined){
console.log(data[0].description);
}
else {
  console.log("Breed not found");
}
});