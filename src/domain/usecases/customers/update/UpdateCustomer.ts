import { Input } from './dtos';

export interface UpdateCustomer {
  execute: (input: Input) => Promise<void>;
}
