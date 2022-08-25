import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const ServiceEndpointEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Icon" source="icon" />
        <TextInput label="Name" source="name" />
        <TextInput label="Url" source="url" />
      </SimpleForm>
    </Edit>
  );
};
