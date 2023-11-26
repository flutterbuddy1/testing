import { StringFilter } from "../../util/StringFilter";
import { TransitionWhereUniqueInput } from "../transition/TransitionWhereUniqueInput";
import { UserListRelationFilter } from "../user/UserListRelationFilter";

export type WalletWhereInput = {
  balance?: StringFilter;
  id?: StringFilter;
  transitions?: TransitionWhereUniqueInput;
  users?: UserListRelationFilter;
};
