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


      const result = await this.RecordModel.aggregate(
        [
          {
            $match: {
              createdAt: {
                $gte: new Date(startDate),
                $lt: new Date(endDate),
              },
            }
          },
          {
            $project: {
              _id: 0,
              key: 1,
              createdAt: 1,
              TotalCounts: {
                $sum: '$counts'
              }
            }
          },
          {
            $match: {
              TotalCounts: {
                $gte: minCount,
                $lte: maxCount,
              },
            }
          },
        ]
      ).sort({ createdAt: 'asc' });


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
