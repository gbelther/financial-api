import { UpdateCustomer } from '@/domain/usecases/customers/update';
import {
  Controller,
  HttpResponse,
  HttpStatusCode,
} from '@/presentation/protocols';
import { Input, Output } from './dtos';

export class UpdateCustomerController implements Controller<Input, Output> {
  constructor(private readonly updateCustomer: UpdateCustomer) {}

  async handle(httpRequest: Input): Promise<HttpResponse<void>> {
    await this.updateCustomer.execute({
      id: httpRequest.id,
      name: httpRequest.name,
    });

    return {
      statusCode: HttpStatusCode.noContent,
    };
  }
}
