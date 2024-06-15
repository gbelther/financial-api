import { UpdateCustomerUseCaseSpy } from '@/tests/helpers/domain/usecases/customers/UpdateCustomerUseCaseSpy';
import { UpdateCustomerController } from './UpdateCustomerController';
import { HttpStatusCode } from '@/presentation/protocols';

type SutResult = {
  sut: UpdateCustomerController;
  updateCustomerUseCase: UpdateCustomerUseCaseSpy;
};

const makeSut = (): SutResult => {
  const updateCustomerUseCase = new UpdateCustomerUseCaseSpy();
  const sut = new UpdateCustomerController(updateCustomerUseCase);
  return {
    sut,
    updateCustomerUseCase: updateCustomerUseCase,
  };
};

describe('UpdateCustomer Controller', () => {
  it('should call UpdateCustomer correctly', async () => {
    const { sut, updateCustomerUseCase } = makeSut();
    const input = { id: 'any_id', name: 'any_name' };
    await sut.handle(input);
    expect(updateCustomerUseCase.input).toEqual(input);
  });

  it('should throw if UpdateCustomer throws', async () => {
    const { sut, updateCustomerUseCase } = makeSut();
    jest.spyOn(updateCustomerUseCase, 'execute').mockImplementationOnce(() => {
      throw new Error();
    });
    const promise = sut.handle({ id: 'any_id', name: 'any_name' });
    await expect(promise).rejects.toThrow(new Error());
  });

  it('should return noContent if UpdateCustomer succeeds', async () => {
    const { sut } = makeSut();
    const httpResponse = await sut.handle({ id: 'any_id', name: 'any_name' });
    expect(httpResponse.statusCode).toBe(HttpStatusCode.noContent);
  });
});
