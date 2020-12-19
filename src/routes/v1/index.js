import { Router } from 'express';
import userRoute from './user';

const router = Router();


router.use('/auth', userRoute);
router.all('/', (req, res) => {
  res.send({ message: 'Hello from templates!' });
});

export default router;
