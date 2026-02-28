export default function v2Layout(req, _res, next) {
  req.apiVersion = 'v2';
  next();
}
