import { Customer } from '@/domain/entities';
import { CustomersRepository } from '@/domain/repositories';
import { prismaClient } from '@/libs/prisma';
import { PrismaClient } from '@prisma/client';

export class CustomersRepositoryDatabase implements CustomersRepository {
  private client: PrismaClient;
  private static instance: CustomersRepositoryDatabase;

  constructor() {
    this.client = prismaClient;
  }

  public static getInstance(): CustomersRepositoryDatabase {
    if (!CustomersRepositoryDatabase.instance) {
      CustomersRepositoryDatabase.instance = new CustomersRepositoryDatabase();
    }
    return CustomersRepositoryDatabase.instance;
  }

  async create(customer: Customer): Promise<void> {
    await this.client.customer.create({
      data: {
        id: customer.id,
        name: customer.name,
        cpf: customer.cpf.value,
        email: customer.email,
        password: customer.password,
      },
    });
    await prismaClient.$disconnect();
  }

  async findByEmail(email: string): Promise<Customer | null> {
    const result = await this.client.customer.findFirst({
      where: { email },
    });
    if (!result) return null;
    const customer = new Customer({
      id: result.id,
      name: result.name,
      cpfData: result.cpf,
      email: result.email,
      password: result.password,
    });
    await prismaClient.$disconnect();
    return customer;
  }
}
