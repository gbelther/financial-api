import { faker as fakerLib } from '@faker-js/faker';
import { formatters } from '../formatters';
import { generateCpf } from './generateCpf';

export const faker = Object.assign(fakerLib, {
  random: Object.assign(fakerLib.random, {
    cpf: () => formatters.cpf(generateCpf()),
  }),
});
