const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/home/mike/workspace/cannonical-debate/gad-client/.cache/dev-404-page.js"))),
  "component---src-pages-argument-jsx": hot(preferDefault(require("/home/mike/workspace/cannonical-debate/gad-client/src/pages/Argument.jsx"))),
  "component---src-pages-claim-jsx": hot(preferDefault(require("/home/mike/workspace/cannonical-debate/gad-client/src/pages/Claim.jsx"))),
  "component---src-pages-home-jsx": hot(preferDefault(require("/home/mike/workspace/cannonical-debate/gad-client/src/pages/Home.jsx"))),
  "component---src-pages-positions-jsx": hot(preferDefault(require("/home/mike/workspace/cannonical-debate/gad-client/src/pages/Positions.jsx"))),
  "component---src-pages-questions-jsx": hot(preferDefault(require("/home/mike/workspace/cannonical-debate/gad-client/src/pages/Questions.jsx"))),
  "component---src-pages-reasons-jsx": hot(preferDefault(require("/home/mike/workspace/cannonical-debate/gad-client/src/pages/Reasons.jsx"))),
  "component---src-pages-welcome-jsx": hot(preferDefault(require("/home/mike/workspace/cannonical-debate/gad-client/src/pages/Welcome.jsx")))
}

