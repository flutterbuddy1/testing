import { User } from "../user/User";
import { Wallet } from "../wallet/Wallet";

export type Transition = {
  createdAt: Date;
  id: string;
  transitionId: string | null;
  updatedAt: Date;
  userId?: User | null;
  walletId?: Wallet | null;
};
