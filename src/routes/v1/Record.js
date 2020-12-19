import express from 'express';
import { getAllRecords, getAllRecordsByDate } from '../../controllers/Record';
// import { validateUserLogin } from '../../middlewares/validations/user';

const router = express.Router();
router.get('/', getAllRecords);
router.post('/', getAllRecordsByDate);
export default router;
