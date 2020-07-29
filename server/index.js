import React from 'react';
import {reactToString} from 'react/server';
import express from 'express';
import App from '../src/app';

const app = express();

app.get('/', (req, res) => {

  const Page = <App></App>

  const content = reactToString(Page)

  res.send(
    `
    <html>
        <head>
            <meta charset="utf-8">
            <title> react APP</title>
        </head>
        <body>
            <div id="root">${content}</div>
        </body>
    </html>
     
    `
  )
});

app.listen(8090, () => {
  console.log('监听8090');
})