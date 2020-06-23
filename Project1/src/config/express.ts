import express from 'express';
import routes from '../routes/routes';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json());

routes(app);

export default app;