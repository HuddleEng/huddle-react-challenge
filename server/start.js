// Entrypoint that allows for es6 style imports
require("@babel/register")({
    presets: ["@babel/preset-env"]
});

module.exports = require('./server.js');