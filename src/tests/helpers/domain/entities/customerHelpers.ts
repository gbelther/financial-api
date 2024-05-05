import { Customer } from '@/domain/entities';
import { faker } from '@/utils/faker';

type MakeCustomerParams = {
  cpfData?: string;
  id?: string;
  name?: string;
  email?: string;
  password?: string;
};

export const makeCustomer = ({
  id = faker.datatype.uuid(),
  name = faker.name.fullName(),
  cpfData = faker.random.cpf(),
  email = faker.internet.email(),
  password = faker.internet.password(),
}: MakeCustomerParams = {}): Customer =>
  new Customer({
    name,
    cpfData,
    id,
    email,
    password,
  });
