import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import rateLimit from 'express-rate-limit';
import helmet from 'helmet';
import morgan from 'morgan';

// Import routes
import authRoutes from './routes/auth';
import battleRoutes from './routes/battle';
import characterRoutes from './routes/characters';
import equipmentRoutes from './routes/equipment';
import exampleRoutes from './routes/example';
import experienceRoutes from './routes/experience';
import inventoryRoutes from './routes/inventory';
import mapRoutes from './routes/maps';
import monsterRoutes from './routes/monsters';

// Import database connection
import { connectDatabase } from './database/prisma';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

// Security middleware
app.use(helmet());

// CORS configuration
app.use(
  cors({
    origin: process.env.CORS_ORIGIN || 'http://localhost:5173',
    credentials: true,
  })
);

// Rate limiting
const limiter = rateLimit({
  windowMs: parseInt(process.env.RATE_LIMIT_WINDOW_MS || '900000'), // 15 minutes
  max: parseInt(process.env.RATE_LIMIT_MAX_REQUESTS || '100'), // limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP, please try again later.',
});

app.use('/api/', limiter);

// Body parsing middleware
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Logging middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
} else {
  app.use(morgan('combined'));
}

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'OK',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development',
  });
});

// API routes
app.use('/api/auth', authRoutes);
app.use('/api/characters', characterRoutes);
app.use('/api/equipment', equipmentRoutes);
app.use('/api/experience', experienceRoutes);
app.use('/api/monsters', monsterRoutes);
app.use('/api/maps', mapRoutes);
app.use('/api/battle', battleRoutes);
app.use('/api/inventory', inventoryRoutes);
app.use('/api/examples', exampleRoutes);

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found',
    errorStatus: 404,
    data: { path: req.originalUrl },
  });
});

// Global error handler
app.use((err: Error, req: express.Request, res: express.Response) => {
  console.error('Global error handler:', err);
  res.status(500).json({
    success: false,
    message: process.env.NODE_ENV === 'development' ? err.message : 'Something went wrong',
    errorStatus: 500,
  });
});

// Initialize database and start server
async function startServer() {
  try {
    await connectDatabase();
    console.log('✅ Database connected successfully');

    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
      console.log(`📊 Environment: ${process.env.NODE_ENV || 'development'}`);
      console.log(`🔗 Health check: http://localhost:${PORT}/health`);
    });
  } catch (error) {
    console.error('❌ Failed to start server:', error);
    process.exit(1);
  }
}

startServer();

export default app;
