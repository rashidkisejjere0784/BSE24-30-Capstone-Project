const request = require('supertest');
const { app, server } = require('./server');  // Import both app and server

describe('Server running test', () => {
  afterAll(() => {
    server.close();  // Close the server after all tests
  });

  it('should respond with 200 OK on the root route', async () => {
    const res = await request(app).get('/health');
    expect(res.statusCode).toEqual(200);
    expect(res.text).toBe('Server is healthy!');
  });
});