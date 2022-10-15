const app = require('supertest')(require('./app'));
const { expect } = require('chai');

describe('Our App', ()=> {
  describe('our home page', ()=> {
    it('has welcome message', async()=> {
      const response = await app.get('/');
      expect(response.status).to.equal(200);
      expect(response.text).to.contain('Welcome to Acme HR');
    });
  });
});
