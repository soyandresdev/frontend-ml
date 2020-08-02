import { json, urlencoded } from 'body-parser';
import morgan from 'morgan';
import cors from 'cors';
import express from 'express';
import error from './error';

import itemsRouter from './resources/items/items.router';
import categoriesRouter from './resources/categories/categories.router';

const app = express();

app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(morgan('dev'));

app.use('/api/items', itemsRouter);
app.use('/api/categories', categoriesRouter);

app.get('*', (_req, res) => res.send(error));

export default app;
