import {Router} from 'express';
import UserController from '../controller/UserController';
import AuthController from '../controller/AuthController';
import authMiddleware from '../middleware/authMiddleware';

const routes = Router();

routes.post('/users', UserController.store);
routes.post('/users/login', AuthController.authenticate);
routes.get('/users',authMiddleware, UserController.index);

export default routes;