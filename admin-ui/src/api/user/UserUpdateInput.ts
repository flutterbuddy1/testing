import { InputJsonValue } from "../../types";
import { TransitionWhereUniqueInput } from "../transition/TransitionWhereUniqueInput";
import { WalletWhereUniqueInput } from "../wallet/WalletWhereUniqueInput";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  roles?: InputJsonValue;
  transitions?: TransitionWhereUniqueInput | null;
  username?: string;
  wallet?: WalletWhereUniqueInput | null;
};
