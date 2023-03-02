import { StateUser } from '../enums/state-user';

export interface UserI {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  grants: StateUser;
  password?: string;
}
