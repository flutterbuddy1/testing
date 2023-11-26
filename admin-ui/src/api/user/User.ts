import { JsonValue } from "type-fest";
import { Transition } from "../transition/Transition";
import { Wallet } from "../wallet/Wallet";

export type User = {
  createdAt: Date;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: JsonValue;
  transitions?: Transition | null;
  updatedAt: Date;
  username: string;
  wallet?: Wallet | null;
};
