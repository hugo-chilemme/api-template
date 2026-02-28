export default function authLayout(req, res, next) {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({
      success: false,
      error: 'Missing Authorization header.'
    });
  }

  req.authenticated = true;
  next();
}
