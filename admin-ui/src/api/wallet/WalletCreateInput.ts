import { TransitionWhereUniqueInput } from "../transition/TransitionWhereUniqueInput";
import { UserCreateNestedManyWithoutWalletsInput } from "./UserCreateNestedManyWithoutWalletsInput";

export type WalletCreateInput = {
  balance: string;
  transitions?: TransitionWhereUniqueInput | null;
  users?: UserCreateNestedManyWithoutWalletsInput;
};
