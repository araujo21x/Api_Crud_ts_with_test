import 'reflect-metadata';
import '../database/connect';
import express from 'express';
import bodyParse from 'body-parser';

import routes from '../routes/routes';

const app = express();

app.use(bodyParse.json());
app.use(bodyParse({extended:false}));

app.use(routes);

export default app;