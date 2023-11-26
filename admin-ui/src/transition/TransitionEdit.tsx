import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { UserTitle } from "../user/UserTitle";
import { WalletTitle } from "../wallet/WalletTitle";

export const TransitionEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
