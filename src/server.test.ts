import req from 'supertest';
import server from './server';

test('[GET] /', async () => {
  const res = await req(server).get('/');
  expect(res.text).toBe('Hello ts-node circle ci test!9');
});
