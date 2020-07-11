import { Router } from 'express';
import userControlle from '../controllers/userController';
import consoleController from '../controllers/consoleController';
import consoleUserConsole from '../controllers/userConsoleController';

const routes = Router();

routes.get('/users/console', consoleUserConsole.indexMyConsoles);
routes.post('/users', userControlle.store);
routes.get('/users', userControlle.index);
routes.get('/users/:id', userControlle.show);
routes.delete('/users/:id', userControlle.destroy);
routes.put('/users/:id', userControlle.edit);

routes.post('/console', consoleController.store);
routes.get('/console', userControlle.index);
routes.get('/console/:id', userControlle.show);
routes.delete('/console/:id', userControlle.destroy);
routes.put('/console/:id', userControlle.edit);

routes.post('/users/console', consoleUserConsole.store);

routes.delete('/users/console/:id', consoleUserConsole.deleteMyConsole);
routes.put('/users/console/:id', consoleUserConsole.showMyConsole);

export default routes;