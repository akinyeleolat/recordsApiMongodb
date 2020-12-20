import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../app';
import { goodData } from '../../fixtures/record';

chai.use(chaiHttp);
const { expect } = chai;

describe('Records Controller', () => {
//   it('should return 404 for a user that does not exist', (done) => {
//     chai
//       .request(app)
//       .post('/auth/login')
//       .send({ email: 'ututu@rr.com', password: 'tetete123' })
//       .end((err, res) => {
//         expect(res.status).to.be.equal(404);
//         expect(res.body)
//           .to.have.property('message')
//           .equal('User does not exist');
//         done();
//       });
//   });

  //   it('should not allow wrong user credentials', (done) => {
  //     chai
  //       .request(app)
  //       .post('/auth/login')
  //       .send({ email: goodUserData.email, password: 'tetete123' })
  //       .end((err, res) => {
  //         expect(res.status).to.be.equal(400);
  //         expect(res.body)
  //           .to.have.property('message')
  //           .equal('User credentials are invalid');
  //         done();
  //       });
  //   });

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
