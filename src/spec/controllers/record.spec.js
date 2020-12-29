import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../app';
import { goodData, getData } from '../../fixtures/record';

chai.use(chaiHttp);
const { expect } = chai;

const agent = chai.request.agent(app);

describe('Records Controller', () => {
  it('should fetch records', async () => {
    try {
      const res = await agent.post('/v1/records').send(goodData);
      expect(res.status).to.be.equal(200);
      expect(res).to.be.an('object');
      expect(res.body).to.have.property('msg').equal('Success');
    } catch (error) {
      console.log(error);
    }
  });
  it('should fetch records', async () => {
    try {
      const data = getData({ startDate: '2017-01-30' });
      const res = await agent.post('/v1/records').send(data);
      expect(res.status).to.be.equal(200);
      expect(res).to.be.an('object');
      expect(res.body).to.have.property('msg').equal('Success');
    } catch (error) {
      console.log(error);
    }
  });
});
