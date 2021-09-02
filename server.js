const express = require('express');
const path    = require('path');
// const webpack = require('webpack');
// const webpackDevMiddleware = require('webpack-dev-middleware');

const app = express();
// const config = require('./webpack.config.js');
// const compiler = webpack(config);

// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.
// app.use(
//   webpackDevMiddleware(compiler, {
//     publicPath: config.output.publicPath,
//   })
// );


// app.post("/", (req, res) => {
//     const cookie = "user=hussein; SameSite=Strict";

//     res.setHeader("set-cookie", [cookie]);
//     res.send("ok");
// })

app.use(
  express.static(path.join(__dirname, './public'))
);


let port = process.env.PORT;
if (port == null || port == "") {
  port = 8080;
}
app.listen(port);