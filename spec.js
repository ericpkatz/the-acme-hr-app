const app = require('supertest')(require('./app'));
const { expect } = require('chai');
const db = require('./db');
const { conn, Employee } = db;

describe('Our App', ()=> {
  beforeEach(async()=> {
    await conn.sync({ force: true });
    await Promise.all([
      Employee.create(),
      Employee.create(),
    ]);

  });
  describe('our home page', ()=> {
    it('has welcome message', async()=> {
      const response = await app.get('/');
      expect(response.status).to.equal(200);
      expect(response.text).to.contain('Welcome to Acme HR');
    });
  });
  describe('Data Layer', ()=> {
    it('has 2 employees', async()=> {
      const employees = await Employee.findAll();
      expect(employees.length).to.equal(2);

    });
  });
});
