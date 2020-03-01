const {override, addBabelPlugin} = require("customize-cra");
const path = require("path");

module.exports = override(
  // add an alias for "firebase", "mobx", etc., so that we always import from the root node_modules (for when using npm link) 
  /*addWebpackAlias({
    firebase: path.resolve(__dirname, "node_modules/firebase"),
    mobx: path.resolve(__dirname, "node_modules/mobx"),
  }),*/
);