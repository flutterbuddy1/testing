import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { WalletWhereUniqueInput } from "../wallet/WalletWhereUniqueInput";

export type TransitionWhereInput = {
  id?: StringFilter;
  transitionId?: StringNullableFilter;
  userId?: UserWhereUniqueInput;
  walletId?: WalletWhereUniqueInput;
};
