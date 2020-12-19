import { Router } from 'express';
import recordRoute from './Record';

const router = Router();


router.use('/records', recordRoute);
router.all('/', (req, res) => {
  res.send({ message: 'Hello from templates!' });
});

export default router;
