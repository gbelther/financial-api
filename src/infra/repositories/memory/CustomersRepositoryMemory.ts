import { Customer } from '@/domain/entities';
import { CustomersRepository } from '@/domain/repositories';

export class CustomersRepositoryMemory implements CustomersRepository {
  private static instance: CustomersRepositoryMemory;
  customers: Customer[] = [];

  private constructor() {}

  public static getInstance(): CustomersRepositoryMemory {
    if (!CustomersRepositoryMemory.instance) {
      CustomersRepositoryMemory.instance = new CustomersRepositoryMemory();
    }
    return CustomersRepositoryMemory.instance;
  }

  async create(customer: Customer): Promise<void> {
    this.customers.push(customer);
  }

  async findById(customerId: string): Promise<Customer | null> {
    const customerFound = this.customers.find(
      (customer) => customer.id === customerId,
    );
    if (!customerFound) return null;
    return customerFound;
  }

  async findByEmail(email: string): Promise<Customer | null> {
    const customerFound = this.customers.find(
      (customer) => customer.email === email,
    );
    return customerFound;
  }

  async update(customer: Customer): Promise<void> {
    const customerFoundIndex = this.customers.findIndex(
      (customerFound) => customerFound.id === customer.id,
    );
    if (customerFoundIndex < 0) throw new Error('Usuário não encontrado.');
    const customerFound = this.customers[customerFoundIndex];
    customerFound.name = customer.name;
    this.customers[customerFoundIndex] = customerFound;
  }
}
