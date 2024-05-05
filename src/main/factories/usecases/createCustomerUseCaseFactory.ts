import { CreateCustomerUseCase } from '@/domain/usecases/customers/create/CreateCustomerUseCase';
import { BcryptAdapter } from '@/infra/cryptography';
import { makeCustomersRepository } from '../repositories';

export const makeCreateCustomerUseCase = () =>
  new CreateCustomerUseCase(makeCustomersRepository(), new BcryptAdapter(8));
