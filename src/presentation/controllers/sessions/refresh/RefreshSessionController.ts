import { RefreshSession } from '@/domain/usecases/sessions/refresh/RefreshSession';
import {
  Controller,
  HttpResponse,
  HttpStatusCode,
} from '@/presentation/protocols';
import { Input, Output } from './dtos';

export class RefreshSessionController implements Controller {
  constructor(private readonly refreshSession: RefreshSession) {}

  async handle(httpRequest: Input): Promise<HttpResponse<Output>> {
    if (!httpRequest.refreshToken) {
      throw new Error('Parametros inválidos');
    }

    const session = await this.refreshSession.execute({
      refreshToken: httpRequest.refreshToken,
    });

    return {
      statusCode: HttpStatusCode.ok,
      body: {
        accessToken: session.accessToken,
      },
    };
  }
}
