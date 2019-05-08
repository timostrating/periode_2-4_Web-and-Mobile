const request = require('request');

const options = {
    url: "https://api.github.com/search/repositories?q=topic:ruby+topic:rails",
    headers: {
      "User-Agent": "request"
    }
  };

function get_posts_old() {
    request(options, function (error, response, body) {
        console.error('error:', error); // Print the error if one occurred
        console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        console.log('body:', body); // Print the HTML for the Google homepage.
    });
}

get_posts_old()



function get_posts() {
    return new Promise((resolve, reject) => request(options, function (error, response, body) {
        if (error || response.statusCode != 200) reject(error)
        else resolve(body)
      })
    );
}

get_posts().then( (result) => console.log(result) )