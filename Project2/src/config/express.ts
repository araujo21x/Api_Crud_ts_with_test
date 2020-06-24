import 'reflect-metadata'
import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import {createConnection} from 'typeorm';
import routes from '../routes/routes';

//basic
const app = express();
createConnection({
   type: "postgres",
   host: "localhost",
   port: 5432,
   username: "lucas",
   password: "9103",
   database: "typeORM",
   entities: ['src/model/*.ts'],
   synchronize: true,
   logging: true
});

//middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());

routes(app);

export default app;