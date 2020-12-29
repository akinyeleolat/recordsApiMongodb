import moment from 'moment';
import RecordModel from '../models/Record';
import Error from '../utils/ErrorUtils';

const format = 'YYYY-MM-DD';
/**
 * Record services
 */
class RecordService {
  /**
     * initiate record model
     */
  constructor() {
    this.RecordModel = RecordModel;
  }


  /**
   *
   * @param {Date} startDate
   * @returns {object} records
   */
  setStartDate(startDate) {
    // normal date function can used
    this.startDate = moment(startDate).format(format);
    return this.startDate;
  }


  /**
   *
   * @param {Date} endDate
   * @returns {object} records
   */
  setEndDate(endDate) {
    this.endDate = moment(endDate).format(format);
    return this.endDate;
  }

  /**
   * get sum of all counts
   * @param {array} counts count
   * @returns {integer} totalCount
   */
  getTotalCount(counts) {
    this.totalCount = counts.reduce((total, num) => total + num);
    return this.totalCount;
  }

  /**
 *  build the object
 * @param {*} record
 * @param {*} totalCount
 * @return {object} value
 */
  buildObject(record, totalCount) {
    const { key, createdAt } = record;
    const value = {
      key,
      createdAt,
      totalCount
    };
    this.value = value;
    return this.value;
  }

  /**
  * get records by range
  * @param {date} from startdate
  * @param {date} to enddate
  * @param {integer} minCount minimum total count
  * @param {integer} maxCount maximum total count
  * @returns {object} records within range
  */
  async getRecordsByDateRangeFilterByCount(from, to, minCount, maxCount) {
    try {
      const startDate = this.setStartDate(from);
      const endDate = this.setEndDate(to);


      const recordData = await this.RecordModel.find({
        createdAt: {
          $gte: new Date(startDate),
          $lte: new Date(endDate)
        }
      });

      const result = recordData.map((record) => {
        const totalCount = this.getTotalCount(record.counts);
        return this.buildObject(record, totalCount);
      })
        .filter(list => list.totalCount <= maxCount && list.totalCount >= minCount)
        .sort((a, b) => b.createdAt - a.createdAt);


      if (!result || !result.length) {
        throw new Error('Data Error', 404, 'records does not exist');
      }

      return {
        code: 0,
        msg: 'Success',
        records: result
      };
    } catch (error) {
      return error;
    }
  }
}

export default RecordService;
