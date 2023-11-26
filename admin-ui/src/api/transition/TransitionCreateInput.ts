import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { WalletWhereUniqueInput } from "../wallet/WalletWhereUniqueInput";

export type TransitionCreateInput = {
  transitionId?: string | null;
  userId?: UserWhereUniqueInput | null;
  walletId?: WalletWhereUniqueInput | null;
};
