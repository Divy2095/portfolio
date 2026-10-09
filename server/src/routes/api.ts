import { Router } from 'express';

export const apiRouter = Router();

apiRouter.get('/health', (_req, res) => {
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    service: 'sketchbook-portfolio-backend',
  });
});

apiRouter.get('/profile', (_req, res) => {
  res.json({
    name: 'Divy',
    role: 'Engineering Student & Software Builder',
    focus: 'Systems, Graphics, Linux & Web',
    status: 'Sketching & Experimenting',
  });
});
