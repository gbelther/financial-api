import { faker } from '@/utils/faker';
import { Customer } from './Customer';

describe('Customer Entity', () => {
  it('should throw if name is empty', () => {
    expect(
      () =>
        new Customer({
          name: '',
          cpfData: faker.random.cpf(),
          email: faker.internet.email(),
          password: faker.internet.password(),
        }),
    ).toThrow(new Error('O campo nome é obrigatório.'));
  });

  it('should throw if CPF is invalid', () => {
    expect(
      () =>
        new Customer({
          name: faker.name.fullName(),
          cpfData: '',
          email: faker.internet.email(),
          password: faker.internet.password(),
        }),
    ).toThrow(new Error('CPF Inválido'));
  });

  it('should throw if email is empty', () => {
    expect(
      () =>
        new Customer({
          name: faker.name.fullName(),
          cpfData: faker.random.cpf(),
          email: '',
          password: faker.internet.password(),
        }),
    ).toThrow(new Error('O campo E-mail é obrigatório.'));
  });

  it('should throw if email is invalid', () => {
    expect(
      () =>
        new Customer({
          name: faker.name.fullName(),
          cpfData: faker.random.cpf(),
          email: 'invalid_email',
          password: faker.internet.password(),
        }),
    ).toThrow(new Error('E-mail inválido.'));
  });
});
