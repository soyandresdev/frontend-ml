import request from 'supertest';
import app from '../server';

describe('API Request TEST:', () => {
  it('passes response api all items basic', async (done) => {
    const results = await request(app).get('/api/item');
    expect(results.statusCode).not.toBe(401);
    done();
  });

  it('passes response api all items search', async (done) => {
    const results = await request(app).get('/api/item?q=huawei');
    expect(results.statusCode).not.toBe(401);
    done();
  });

  it('passes response api get item from id', async (done) => {
    const results = await request(app).get('/api/item/MLA844616745');
    expect(results.statusCode).not.toBe(401);
    done();
  });
});
