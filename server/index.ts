import express from 'express';
import apiRouter from './routes/api';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

// API Routes
app.use('/api', apiRouter);

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', service: 'CaterNinja Node.js API Service', timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`🚀 CaterNinja Express Server running on http://localhost:${PORT}`);
});
