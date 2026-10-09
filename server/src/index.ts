import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { apiRouter } from './routes/api.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;
const clientUrl = process.env.CLIENT_URL || 'http://localhost:5173';

app.use(cors({
  origin: [clientUrl, 'http://localhost:5173', 'http://127.0.0.1:5173'],
  credentials: true,
}));

app.use(express.json());

// Routes
app.use('/api', apiRouter);

// Root route
app.get('/', (_req, res) => {
  res.json({
    message: "Divy's Sketchbook Portfolio API is running",
    endpoints: {
      health: '/api/health',
      profile: '/api/profile',
    },
  });
});

app.listen(port, () => {
  console.log(`🎨 Sketchbook Portfolio Backend listening at http://localhost:${port}`);
});

export default app;
