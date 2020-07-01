import express from 'express';
import routes from '../routes/routes';
import '../database/connect';

const app = express();

app.use(express.json());
app.use(routes);

export default app;