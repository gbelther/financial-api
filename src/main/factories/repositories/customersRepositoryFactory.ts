import { CustomersRepositoryMemory } from '@/infra/repositories/memory';

export const makeCustomersRepository = () =>
  CustomersRepositoryMemory.getInstance();
