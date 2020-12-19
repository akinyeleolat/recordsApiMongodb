import express from 'express';
import { getRecordsByDateRangeFilterByCount } from '../../controllers/Record';
import { validateRecordInput } from '../../middlewares/validations/record';

const router = express.Router();
router.post('/', validateRecordInput, getRecordsByDateRangeFilterByCount);
export default router;
