import path from 'node:path';
import express from 'express';
import morgan from 'morgan';
import { fileURLToPath } from 'node:url';
import { loadRoutes } from './core/autoLoader.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function createApp() {
  const app = express();

  app.use(express.json());
  app.use(morgan('dev'));

  await loadRoutes(app, path.join(__dirname, 'api'), '/api');

  app.get('/', (_req, res) => {
    res.json({
      success: true,
      message: 'Welcome to the API server!',
      routesBase: '/api/{version}/{module}'
    });
  });

  app.use((error, _req, res, _next) => {
    console.error('Unhandled error:', error);
    res.status(500).json({ success: false, error: 'Internal server error' });
  });

  return app;
}
