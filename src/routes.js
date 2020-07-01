import {Router} from 'express';

import UserController from './app/controllers/UserController';
import ProductController from './app/controllers/ProductController';
import SessionController from './app/controllers/SessionController';

import authMiddleware from './app/middlewares/auth';
import logInfoMiddleware from './app/middlewares/logInfo';

const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);
routes.use(logInfoMiddleware);


routes.get('/products', ProductController.index)
routes.get('/product/:id', ProductController.show);
routes.post('/products', ProductController.store);
routes.put('/product/:id', ProductController.update);
routes.delete('/product/:id', ProductController.delete);


export default routes;