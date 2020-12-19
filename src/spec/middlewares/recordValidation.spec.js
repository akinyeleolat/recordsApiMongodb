import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../app';
import { getData, emptyData } from '../../fixtures/record';

chai.use(chaiHttp);
const { expect } = chai;

describe('Record validations', () => {
  it('should return 400 on empty request body or if any of the field is empty', (done) => {
    chai
      .request(app)
      .post('/v1/records')
      .send(emptyData)
      .end((err, res) => {
        expect(res.status && res.body.status).to.be.equal(400);
        expect(res).to.be.an('object');
        expect(res.body).to.have.property('message');
        expect(res.body.message.startDate)
          .to.be.an('array')
          .that.does.include('The startDate field is required.');
        expect(res.body.message.endDate)
          .to.be.an('array')
          .that.does.include('The endDate field is required.');
        expect(res.body.message.minCount)
          .to.be.an('array')
          .that.does.include('The minCount field is required.');
        expect(res.body.message.maxCount)
          .to.be.an('array')
          .that.does.include('The maxCount field is required.');
        done();
      });
  });

  it('should return 400 if date is invalid', (done) => {
    chai
      .request(app)
      .post('/v1/records')
      .send(getData({ startDate: '2017/09/90' }))
      .end((err, res) => {
        expect(res.body.message.startDate)
          .to.be.an('array')
          .that.does.include('The startDate format is invalid.');
        done();
      });
  });

  it('should return 400 if date is invalid', (done) => {
    chai
      .request(app)
      .post('/v1/records')
      .send(getData({ startDate: '2017' }))
      .end((err, res) => {
        expect(res.body.message.startDate)
          .to.be.an('array')
          .that.does.include('The startDate format is invalid.');
        done();
      });
  });
});
