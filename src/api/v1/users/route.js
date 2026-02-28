import { Router } from 'express';

const router = Router();

const users = [
  { id: '1', name: 'Ada Lovelace' },
  { id: '2', name: 'Alan Turing' }
];

router.get('/', (_req, res) => {
  res.json({ success: true, data: users });
});

router.post('/', (req, res) => {
  const user = {
    id: String(users.length + 1),
    name: req.body?.name || 'Unnamed'
  };

  users.push(user);
  res.status(201).json({ success: true, data: user });
});

export default router;
