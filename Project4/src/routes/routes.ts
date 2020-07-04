import { Router } from 'express';
import userControlle from '../controllers/userController';
import consoleController from '../controllers/consoleController';
import consoleUserConsole from '../controllers/userConsoleController';

const routes = Router();

routes.post('/users', userControlle.create);
routes.post('/console', consoleController.store);
routes.post('/userConsole', consoleUserConsole.store);

export default routes;