import { Router } from 'express';

const router = Router();

router.post('/register', (req, res) => {
  const { email } = req.body || {};

  res.status(201).json({
    success: true,
    version: req.apiVersion,
    module: 'auth',
    action: 'register',
    email: email || null
  });
});

router.post('/login', (_req, res) => {
  res.json({
    success: true,
    token: 'demo-token'
  });
});

export default router;
