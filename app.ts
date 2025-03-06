import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors'
import cookieParser from 'cookie-parser'
import dotenv from 'dotenv'
import { connectDB } from './config/db';
import { errorHandler } from './middlewares/error-handler';
import { NotFoundError } from './errors/not-found.error';
import cors from 'cors'
// satys routes
import StaysRoutes from './routes/stayRoutes'
dotenv.config();
connectDB()
export const port = process.env.PORT || 3030
const app = express();
// CORS should be before any routes or other middleware that needs to access the request
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.use('/api/v1/stays', StaysRoutes);
app.all('*', async (req: Request, res: Response) => {
    throw new NotFoundError()
});
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    errorHandler(err, req, res, next);
});

export { app }