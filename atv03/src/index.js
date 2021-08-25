import express from 'express';
import routes from './routes.js';
import { database } from './config/database.js';
import cors from 'cors'
const app = express();

app.use(cors())
app.use(express.json())
app.use('/api',routes);

database('mongodb://localhost/atv2');

app.listen(3333);