import {
  UpdateCustomer,
  UpdateCustomerUseCase,
} from '@/domain/usecases/customers/update';
import { makeCustomersRepository } from '../repositories';

export const makeUpdateCustomerUseCase = (): UpdateCustomer => {
  return new UpdateCustomerUseCase(makeCustomersRepository());
};
