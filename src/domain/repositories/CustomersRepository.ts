import { Customer } from '../entities';

export interface CustomersRepository {
  create: (customer: Customer) => Promise<void>;
  findById: (email: string) => Promise<Customer | null>;
  findByEmail: (email: string) => Promise<Customer | null>;
  update: (customer: Customer) => Promise<void>;
}
