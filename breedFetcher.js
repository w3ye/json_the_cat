const request = require('request');
const api = 'https://api.thecatapi.com/v1/breeds/search?q=siberian';
const name = process.argv[2];

request(api, (err, response, body) => {
  if (err) return console.log(`Error: Incorrect url ${api}`);
  let bodyJson = JSON.parse(body);
  if (bodyJson.length === 0) return console.log("Cat breed not found");
  
});
