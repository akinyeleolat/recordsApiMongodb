import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../app';
import { goodData } from '../../fixtures/record';

chai.use(chaiHttp);
const { expect } = chai;

describe('Records Controller', () => {
  it('should fetch records', (done) => {
    chai
      .request(app)
      .post('/v1/records')
      .send(goodData)
      .end((err, res) => {
        expect(res.status).to.be.equal(200);
        expect(res).to.be.an('object');
        expect(res.body)
          .to.have.property('msg')
          .equal(true);
        done();
      });
  });
});
