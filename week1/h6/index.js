const escapeStringRegexp = require('escape-string-regexp');
 
const escapedString = escapeStringRegexp('How much $ for a 🦄?');

console.log(new RegExp(escapedString));