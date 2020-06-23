import { Router } from 'express';
import publicRoutes from './publicRoutes';

export default (app: Router) => {
    publicRoutes(app);
}