import { RefreshSessionUseCase } from '@/domain/usecases/sessions/refresh';
import { BcryptAdapter, JsonWebTokenAdapter } from '@/infra/cryptography';
import { makeCustomersRepository } from '../repositories';

export const makeRefreshSessionUseCase = () =>
  new RefreshSessionUseCase(
    makeCustomersRepository(),
    new JsonWebTokenAdapter(
      process.env.JWT_ACCESS_SECRET,
      Number(process.env.JWT_ACCESS_EXPIRES_IN_SECOND),
    ),
    new JsonWebTokenAdapter(
      process.env.JWT_REFRESH_SECRET,
      Number(process.env.JWT_ACCESS_EXPIRES_IN_SECOND),
    ),
  );
