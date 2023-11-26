import { Transition } from "../transition/Transition";
import { User } from "../user/User";

export type Wallet = {
  balance: string;
  createdAt: Date;
  id: string;
  transitions?: Transition | null;
  updatedAt: Date;
  users?: Array<User>;
};
