import { TransitionWhereUniqueInput } from "../transition/TransitionWhereUniqueInput";
import { UserUpdateManyWithoutWalletsInput } from "./UserUpdateManyWithoutWalletsInput";

export type WalletUpdateInput = {
  balance?: string;
  transitions?: TransitionWhereUniqueInput | null;
  users?: UserUpdateManyWithoutWalletsInput;
};
