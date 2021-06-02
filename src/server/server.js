import fs from 'fs';
import path from 'path';
import handlebars from 'handlebars';
import Hapi from '@hapi/hapi';
import ReactDom from 'react-dom/server';
import App from '../App';
import React from 'react';
import { setPath } from 'hookrouter';

import EmptyPage from '../pages/Empty';

const init = async () => {
  const server = Hapi.server({
    port: 3000,
    host: 'localhost',
  });

  await server.register(require('@hapi/inert'));

  server.route({
    method: 'GET',
    path: '/main.js',
    handler: (request, h) => {
      const a = h.file(path.join(process.cwd(), 'dist', 'main.js'));
      console.log(a);
    },
  });

  server.route({
    method: 'GET',
    path: '/{any*}',
    handler: (request, h) => {
      setPath(request.path);
      const pathIndexHTML = path.join(process.cwd(), 'dist', 'index.html');
      const template = handlebars.compile(fs.readFileSync(pathIndexHTML, 'utf8'));

      const res = ReactDom.renderToString(<EmptyPage />);
      const page = template({
        content: res,
      });
      console.log(page);
      return page;
    },
  });

  await server.start();
  console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

init();
