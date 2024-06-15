import { CustomersRepositoryMemory } from '@/infra/repositories/memory';
import { UpdateCustomerUseCase } from './UpdateCustomerUseCase';

type SutResult = {
  sut: UpdateCustomerUseCase;
  customersRepository: CustomersRepositoryMemory;
};

const addCustomerToRepository = async (
  customersRepository: CustomersRepositoryMemory,
) => {
  customersRepository.customers.push({
    id: 'default_id',
    name: 'default_name',
    cpf: 'default_cpf',
    email: 'default_email',
    password: 'default_password',
  } as any);
};

const makeSut = (): SutResult => {
  const customersRepository = CustomersRepositoryMemory.getInstance();
  const sut = new UpdateCustomerUseCase(customersRepository);
  return {
    sut,
    customersRepository,
  };
};

describe('UpdateCustomer UseCase', () => {
  it('should call CustomersRepository(update) correctly', async () => {
    const { sut, customersRepository } = makeSut();
    addCustomerToRepository(customersRepository);
    const updateSpy = jest.spyOn(customersRepository, 'update');
    const input = { id: 'default_id', name: 'any_name' };
    await sut.execute(input);
    expect(updateSpy).toHaveBeenCalledWith(
      expect.objectContaining({ id: input.id, name: input.name }),
    );
  });

  it('should throw if CustomersRepository(findById) throws', async () => {
    const { sut, customersRepository } = makeSut();
    jest.spyOn(customersRepository, 'findById').mockImplementationOnce(() => {
      throw new Error('Test throw');
    });
    const promise = sut.execute({ id: 'default_id', name: 'any_name' });
    await expect(promise).rejects.toThrow('Test throw');
  });

  it('should throw if CustomersRepository(update) throws', async () => {
    const { sut, customersRepository } = makeSut();
    jest.spyOn(customersRepository, 'update').mockImplementationOnce(() => {
      throw new Error('Test throw');
    });
    const promise = sut.execute({ id: 'default_id', name: 'any_name' });
    await expect(promise).rejects.toThrow('Test throw');
  });

  it('should throw if customer is not found', async () => {
    const { sut } = makeSut();
    const promise = sut.execute({ id: 'invalid_id', name: 'any_name' });
    await expect(promise).rejects.toThrow('Usuário não encontrado.');
  });
});
