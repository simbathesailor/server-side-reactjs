const express = require("express");
const fs = require("fs");
const path = require("path");
const React = require("react");
const webpack = require("webpack");
const ReactDOMServer = require("react-dom/server.js");
//import App from "./src/App.js";
const getWebpackConfig = require("./webpack.server.config.js");

const app = express();
const port = 3008;

console.log("__dirname", path.dirname);

// Now this plain import of App component will
// not work, because node doesnot knowm how to parse
// jsx.
const handler = (req, res) => {
  res.set("Content-Type", "text/html");

  // I am trying to get the complete code from the parent components and
  // transform using babel to something whih the ReactDOMServer.renderToString can understand

  const config = getWebpackConfig({
    path: `${__dirname}/src/App.js`,
  });
  console.log(
    "🚀 ~ file: start-node-server.js ~ line 29 ~ handler ~ config",
    config
  );

  process.env.BABEL_ENV = "production";
  process.env.NODE_ENV = "production";
  const compiler = webpack(config);

  compiler.run((err, stats) => {
    console.log(
      "🚀 ~ file: start-node-server.js ~ line 33 ~ compiler.run ~ err, stats",
      err,
      stats
    );
  });

  // const v = ReactDOMServer.renderToString(App);

  // console.log("🚀 ~ file: start-node-server.js ~ line 12 ~ app.get ~ v", v);

  fs.readFile("./public/index.html", "utf8", function (err, data) {
    if (err) throw err;

    // Inserts the rendered React HTML into our main div
    const document = data.replace(
      /<div id="root"><\/div>/,
      `<div id="root">Hello bhaya</div>`
    );

    // Sends the response back to the client
    res.send(document);
  });
};

app.use("/build", express.static(path.join(__dirname, "build")));

app.get("*", handler);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
