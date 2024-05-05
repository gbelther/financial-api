import { CreateCustomerController } from '@/presentation/controllers/customers/create/CreateCustomerController';
import { makeCreateCustomerUseCase } from '../usecases';

export const makeCreateCustomerController = () =>
  new CreateCustomerController(makeCreateCustomerUseCase());
