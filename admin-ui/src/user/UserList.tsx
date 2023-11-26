import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { TRANSITION_TITLE_FIELD } from "../transition/TransitionTitle";
import { WALLET_TITLE_FIELD } from "../wallet/WalletTitle";

export const UserList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Users"}
      perPage={50}
      pagination={<Pagination />}
    >
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
        <ReferenceField label="wallet" source="wallet.id" reference="Wallet">
          <TextField source={WALLET_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
