import { RefreshSession } from '@/domain/usecases/sessions/refresh';
import { Input, Output } from '@/domain/usecases/sessions/refresh';
import { faker } from '@/utils/faker';
import { RefreshSessionController } from './RefreshSessionController';

class RefreshSessionUseCaseSpy implements RefreshSession {
  input: Input = {
    refreshToken: faker.datatype.string(20),
  };
  output: Output = {
    accessToken: faker.datatype.string(20),
  };

  async execute(input: Input): Promise<Output> {
    this.input = input;
    return this.output;
  }
}

type SutResult = {
  sut: RefreshSessionController;
  refreshSessionSpy: RefreshSessionUseCaseSpy;
};

const makeSut = (): SutResult => {
  const refreshSessionSpy = new RefreshSessionUseCaseSpy();
  const sut = new RefreshSessionController(refreshSessionSpy);
  return { sut, refreshSessionSpy };
};

describe('Refresh Session Controller', () => {
  it('should throw if refreshToken param is falsy', async () => {
    const { sut } = makeSut();
    const promise = sut.handle({ refreshToken: '' });
    await expect(promise).rejects.toThrow(new Error('Parametros inválidos'));
  });

  it('should throw if RefreshSession throws', async () => {
    const { sut, refreshSessionSpy } = makeSut();
    jest.spyOn(refreshSessionSpy, 'execute').mockImplementationOnce(() => {
      throw new Error();
    });
    const promise = sut.handle({ refreshToken: faker.datatype.string(20) });
    await expect(promise).rejects.toThrow(new Error());
  });

  it('should call RefreshSession correctly', async () => {
    const { sut, refreshSessionSpy } = makeSut();
    const refreshToken = faker.datatype.string(20);
    await sut.handle({ refreshToken: refreshToken });
    expect(refreshSessionSpy.input).toEqual({ refreshToken });
  });

  it('should return the correct values', async () => {
    const { sut, refreshSessionSpy } = makeSut();
    const newAccessToken = faker.datatype.string(20);
    refreshSessionSpy.output = { accessToken: newAccessToken };
    const response = await sut.handle({
      refreshToken: faker.datatype.string(20),
    });
    expect(response).toEqual({
      statusCode: 200,
      body: {
        accessToken: newAccessToken,
      },
    });
  });
});
