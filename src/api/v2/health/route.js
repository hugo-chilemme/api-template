import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.json({
    success: true,
    version: req.apiVersion,
    status: 'ok'
  });
});

export default router;
