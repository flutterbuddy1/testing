import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { UserTitle } from "../user/UserTitle";
import { WalletTitle } from "../wallet/WalletTitle";

export const TransitionCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="transition_id" source="transitionId" />
        <ReferenceInput source="userId.id" reference="User" label="user_id">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="walletId.id"
          reference="Wallet"
          label="wallet_id"
        >
          <SelectInput optionText={WalletTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
