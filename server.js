import "babel-polyfill";
import express from "express";
import dotenv from "dotenv";
import React from "react";
import ReactDomServer from "react-dom/server";
import { StaticRouter } from "react-router";
import BodyParser from 'body-parser';

import { App } from "./src/App";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(BodyParser.json());
app.use(express.static('build'));

app.get("*", (req, res) => {
  const context = {};
  const content = ReactDomServer.renderToString(
    <StaticRouter location={req.url} context={context}>
      <App />
    </StaticRouter>
  );

  const html = `
    <html lang="ru">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>SSR express React</title>
    </head>
    <body>
        <div id='root'>
            ${content}
        </div>
    </body>
    </html>
  `;

  res.send(html);
});

app.listen(PORT, () => {
  console.log("app runinng: ".concat(PORT));
});
