import { RefreshSessionController } from '@/presentation/controllers/sessions/refresh/RefreshSessionController';
import { makeRefreshSessionUseCase } from '../usecases/refreshSessionUseCaseFactory';

export const makeRefreshSessionController = () =>
  new RefreshSessionController(makeRefreshSessionUseCase());
