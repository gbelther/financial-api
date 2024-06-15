import express from 'express';
import { expressAdaptRoute } from '@/infra/routes';
import { makeCreateCustomerController } from '../factories/controllers/createCustomerControllerFactory';
import { makeUpdateCustomerController } from '../factories/controllers/updateCustomerControllerFactory';

const customersRoutes = express.Router();

customersRoutes.post('/', expressAdaptRoute(makeCreateCustomerController()));
customersRoutes.put('/:id', expressAdaptRoute(makeUpdateCustomerController()));

export { customersRoutes };
