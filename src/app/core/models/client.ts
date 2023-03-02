import { StateClient } from '../enums/state-client';
import { ClientI } from '../interfaces/client-i';

export class Client implements ClientI {
  tva = 20;
  state = StateClient.ACTIVE;
  name!: string;
  comment!: string;
  id!: number;
  totalCaHt!: number;
  constructor(obj?: Partial<Client>) {
    if (obj) {
      Object.assign(this, obj);
    }
  }
}
