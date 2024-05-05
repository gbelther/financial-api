import { CreateSessionController } from '@/presentation/controllers/sessions/create/CreateSessionController';
import { makeCreateSessionUseCase } from '../usecases/createSessionUseCaseFactory';

export const makeCreateSessionController = () =>
  new CreateSessionController(makeCreateSessionUseCase());
