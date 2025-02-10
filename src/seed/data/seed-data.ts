import { Role } from '@prisma/client';
import * as bcrypt from 'bcrypt';

interface SeedUser {
  name: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  password: string;
  roles: Role[];
}

interface SeedData {
  users: SeedUser[];
}

export const initialData: SeedData = {
  users: [
    {
      name: 'Pietro',
      lastName: 'Torrico Escobar',
      phoneNumber: '69531998',
      email: 'torricopietro@gmail.com',
      password: bcrypt.hashSync('Pietrogato3@', 10),
      roles: [Role.ADMIN],
    },
    {
      name: 'Jose',
      lastName: 'Gomez Perez',
      phoneNumber: '78451233',
      email: 'test@test.com',
      password: bcrypt.hashSync('Abc123', 10),
      roles: [Role.ADMIN],
    },
  ],
};
