import { Router } from 'express'
import UsersController from './controllers/UsersController';

const routes = Router();

routes.get('/users', UsersController.getAll)
routes.get('/users/:index', UsersController.getOne)

routes.post('/users', UsersController.create)

routes.put('/users/:index', UsersController.update)

routes.delete('/users/:index', UsersController.delete)


export default routes;