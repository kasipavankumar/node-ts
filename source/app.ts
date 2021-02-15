import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import morgan from 'morgan';
import express, { Application, Request, Response } from 'express';
import dotenv from 'dotenv';

// Initialize an Express application.
const app: Application = express();
dotenv.config();

// Configuration
app.set('PORT', (process.env.PORT as string) || 5000);

// Middleware
app.use(cors());
app.use(helmet());
app.use(compression());
app.use(morgan('combined'));

// Routes
app.get('/', (req: Request, res: Response) => {
  return res.status(200).send('Hello, world!');
});

export default app;
