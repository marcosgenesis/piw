import express from 'express';
import routes from './routes.js';
import { database } from './config/database.js';

const app = express();

app.use(express.json())
app.use('/api',routes);

database('mongodb://localhost/atv2');

app.listen(3333);