import express from 'express';

function testeDuplicate(arg01: number, arg02: number): number {
  let newArg = arg01 + arg02;
  newArg += newArg + arg01 + arg02;
  return newArg;
}

function testeDuplicate2(arg01: number, arg02: number): number {
  let newArg = arg01 + arg02;
  newArg += newArg + arg01 + arg02;
  return newArg;
}

const server = express();
server.get('/', (_, res) => {
  res.send('Hello ts-node circle ci test!' + testeDuplicate(0, 3));
});

server.get('/teste', (_, res) => {
  res.send('Hello ts-node circle ci test!' + testeDuplicate2(3, 7));
});

export default server;
