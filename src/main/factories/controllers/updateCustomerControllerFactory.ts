import { UpdateCustomerController } from '@/presentation/controllers/customers/update';
import { makeUpdateCustomerUseCase } from '../usecases';

export const makeUpdateCustomerController = () => {
  return new UpdateCustomerController(makeUpdateCustomerUseCase());
};
