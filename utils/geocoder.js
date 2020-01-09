const NodeGeocoder = require('node-geocoder');
 
const options = {
  provider: process.env.GEOCODER_PROVIDER,
 
  httpAdapter: 'https', // Default
  apiKey: process.env.GEOCODER_KEY, // for Mapquest, OpenCage, Google Premier
  formatter: null         // 'gpx', 'string', ...
};
 
var geocoder = NodeGeocoder(options);
 
module.exports = geocoder;