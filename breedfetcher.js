const request = require('request');
const fetchBreedDescription = function(breedName,callback)  {
  request('https://api.thecatapi.com/v1/breeds/search?q=' + breedName
    , (error, response, body) => {
      if (error) {
         console.log("API Error",error);
         return;
      }
      // console.error('error:', error); // Print the error if one occurred
      // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
      // console.log('body:', body); // Print the HTML for the Google homepage.
      // console.log(typeof body);
      const data = JSON.parse(body);
      //console.log(data);
      // console.log(typeof data);
      // console.log("data[0]", data[0]);
      if (data.length === 0) {
        return callback("Breed not found",null);   
      } 
      return callback(null,data[0].description);
    });
};
module.exports = {fetchBreedDescription};