import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'Dynamic route resolved from folder [id].',
    id: req.params.id
  });
});

export default router;
