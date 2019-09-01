import express from 'express';

const server = express();
server.get('/', (_, res) => {
  res.send('Hello ts-node circle ci test!');
});

export default server;
