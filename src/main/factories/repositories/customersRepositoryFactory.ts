import { CustomersRepositoryDatabase } from '@/infra/repositories/database';

export const makeCustomersRepository = () =>
  CustomersRepositoryDatabase.getInstance();
