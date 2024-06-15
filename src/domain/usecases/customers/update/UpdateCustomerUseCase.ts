import { CustomersRepository } from '@/domain/repositories';
import { UpdateCustomer } from './UpdateCustomer';
import { Input } from './dtos';

export class UpdateCustomerUseCase implements UpdateCustomer {
  constructor(private readonly customersRepository: CustomersRepository) {}

  async execute(input: Input): Promise<void> {
    const customerFound = await this.customersRepository.findById(input.id);
    if (!customerFound) throw new Error('Usuário não encontrado.');
    customerFound.name = input.name;
    await this.customersRepository.update(customerFound);
  }
}
