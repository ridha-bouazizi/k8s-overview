import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const ServiceEndpointCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Icon" source="icon" />
        <TextInput label="Name" source="name" />
        <TextInput label="Url" source="url" />
      </SimpleForm>
    </Create>
  );
};
