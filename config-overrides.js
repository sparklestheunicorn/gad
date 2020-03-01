const {override, addWebpackAlias} = require("customize-cra");
const path = require("path");

module.exports = override(
  // alias some packages, so always imported from root node_modules (prevents >1 versions being imported, when using npm link) 
  addWebpackAlias({
    // reason: dependencies of this repo, and dev-dependencies of @debate-map/server-link, causing dupe with npm link
    firebase: path.resolve(__dirname, "node_modules/firebase"),
    mobx: path.resolve(__dirname, "node_modules/mobx"),
    // reason: dependencies of @debate-map/server-link, causing dupe with npm link
    "js-vextensions": path.resolve(__dirname, "node_modules/js-vextensions"),
    "mobx-firelink": path.resolve(__dirname, "node_modules/mobx-firelink"),
  }),
);