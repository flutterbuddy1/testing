import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  PasswordInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { TransitionTitle } from "../transition/TransitionTitle";
import { WalletTitle } from "../wallet/WalletTitle";
import { ROLES_OPTIONS } from "../user/RolesOptions";

export const UserEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="First Name" source="firstName" />
        <TextInput label="Last Name" source="lastName" />
        <PasswordInput label="Password" source="password" />
        <SelectArrayInput
          source="roles"
          choices={ROLES_OPTIONS}
          optionText="label"
          optionValue="value"
        />
        <ReferenceInput
          source="transitions.id"
          reference="Transition"
          label="transitions"
        >
          <SelectInput optionText={TransitionTitle} />
        </ReferenceInput>
        <TextInput label="Username" source="username" />
        <ReferenceInput source="wallet.id" reference="Wallet" label="wallet">
          <SelectInput optionText={WalletTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
