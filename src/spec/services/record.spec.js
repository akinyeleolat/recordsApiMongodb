import chai from 'chai';
import chaiHttp from 'chai-http';
import RecordServices from '../../services/Record';


chai.use(chaiHttp);
const { expect } = chai;


const serviceTest = describe('Services - User', () => {
  const RecordServicesInstance = new RecordServices();

  describe('Create instance of service', () => {
    it('should create instance of instance service', async () => {
      expect(RecordServicesInstance).to.not.equal(null);
    });
    it('Exposes the filtering function method', () => {
      expect(RecordServicesInstance.getRecordsByDateRangeFilterByCount).to.not.equal(undefined);
      expect(RecordServicesInstance.getRecordsByDateRangeFilterByCount).to.be.instanceOf(Function);
    });
    it('Exposes the date method', () => {
      expect(RecordServicesInstance.setStartDate).to.not.equal(undefined);
      expect(RecordServicesInstance.setStartDate).to.be.instanceOf(Function);
      expect(RecordServicesInstance.setEndDate).to.not.equal(undefined);
      expect(RecordServicesInstance.setEndDate).to.be.instanceOf(Function);
    });
  });
});

export default serviceTest;
