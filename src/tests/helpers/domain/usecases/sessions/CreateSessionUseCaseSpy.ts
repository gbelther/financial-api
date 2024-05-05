import { CreateSession } from '@/domain/usecases/sessions/create/CreateSession';
import { Input, Output } from '@/domain/usecases/sessions/create/dtos';
import { faker } from '@faker-js/faker';

export class CreateSessionUseCaseSpy implements CreateSession {
  input: Input = {
    email: faker.internet.email(),
    password: faker.internet.password(),
  };
  output: Output = {
    accessToken: faker.datatype.uuid(),
    refreshToken: faker.datatype.string(20),
  };

  async execute(input: Input): Promise<Output> {
    this.input = input;
    return this.output;
  }
}
