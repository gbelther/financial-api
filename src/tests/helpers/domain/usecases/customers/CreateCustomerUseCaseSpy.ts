import { CreateCustomer } from '@/domain/usecases/customers/create/CreateCustomer';
import { Input } from '@/domain/usecases/customers/create/dtos';

export class CreateCustomerUseCaseSpy implements CreateCustomer {
  input: Input;

  async execute(input: Input): Promise<void> {
    this.input = input;
  }
}
