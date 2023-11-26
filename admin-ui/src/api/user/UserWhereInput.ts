import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { TransitionWhereUniqueInput } from "../transition/TransitionWhereUniqueInput";
import { WalletWhereUniqueInput } from "../wallet/WalletWhereUniqueInput";

export type UserWhereInput = {
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  transitions?: TransitionWhereUniqueInput;
  username?: StringFilter;
  wallet?: WalletWhereUniqueInput;
};
