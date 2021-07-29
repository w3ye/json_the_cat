const request = require('request');

const fetchBreedDescription = (name, callback) => {
  const api = `https://api.thecatapi.com/v1/breeds/search?q=${name}`;
  
  request(api, (err, response, body) => {
    if (err) {
      callback(`Error: Incorrect url ${api}`);
      return;
    }

    let description = JSON.parse(body)[0].description;
    
    if (! description) {
      callback("Cat breed not found");
      return;
    } else callback(null, description);

  });
};

module.exports = {fetchBreedDescription};
