import type { Input } from '@/domain/usecases/customers/update';
import { UpdateCustomer } from '@/domain/usecases/customers/update';

export class UpdateCustomerUseCaseSpy implements UpdateCustomer {
  input: Input;

  async execute(input: Input): Promise<void> {
    this.input = input;
  }
}
