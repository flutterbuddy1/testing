import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { TRANSITION_TITLE_FIELD } from "../transition/TransitionTitle";
import { WALLET_TITLE_FIELD } from "./WalletTitle";

export const WalletShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="balance" source="balance" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <ReferenceField
          label="transitions"
          source="transition.id"
          reference="Transition"
        >
          <TextField source={TRANSITION_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField reference="User" target="walletId" label="Users">
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="First Name" source="firstName" />
            <TextField label="ID" source="id" />
            <TextField label="Last Name" source="lastName" />
            <TextField label="Roles" source="roles" />
            <ReferenceField
              label="transitions"
              source="transition.id"
              reference="Transition"
            >
              <TextField source={TRANSITION_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Username" source="username" />
            <ReferenceField
              label="wallet"
              source="wallet.id"
              reference="Wallet"
            >
              <TextField source={WALLET_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
