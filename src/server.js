import dotenv from 'dotenv';
import express from 'express';
import 'express-async-errors';

import cors from 'cors';
import routes from './routes';
import logErrorMiddleware from './app/middlewares/logError';


const app = express();

app.use(cors({
  exposedHeaders: ['Content-Length', 'x-total-count'],
}));
app.use(express.json());
app.use(routes);

app.use(logErrorMiddleware)

dotenv.config();

app.listen(process.env.PORT || 3333)