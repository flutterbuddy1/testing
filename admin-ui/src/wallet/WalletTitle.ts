import { Wallet as TWallet } from "../api/wallet/Wallet";

export const WALLET_TITLE_FIELD = "balance";

export const WalletTitle = (record: TWallet): string => {
  return record.balance?.toString() || String(record.id);
};
