import React from "react";
import {
  Create,
  Edit,
  SimpleForm,
  TextInput,
  DateInput,
  ReferenceManyField,
  Datagrid,
  TextField,
  DateField,
  EditButton,
  required,
} from "react-admin";
import { RichTextInput } from "ra-input-rich-text";
import { Stack } from "@mui/system";
import { Typography, Box } from "@mui/material";
const Aside = () => (
  <Box sx={{ width: "200px", margin: "1em" }}>
    <Typography variant="h6">Instructions</Typography>
    <Typography variant="body2">
      Posts will only be published once an editor approves them
    </Typography>
  </Box>
);
export const PostCreate = () => (
  <Create>
    <SimpleForm>
      <Stack paddingY={5}>
        <Typography variant="h4"> Create post</Typography>
      </Stack>
      <TextInput source="title" validate={[required()]} fullWidth />
      <TextInput source="teaser" multiline={true} label="Short description" />
      <RichTextInput source="body" />
      <DateInput
        label="Publication date"
        source="published_at"
        defaultValue={new Date()}
      />
    </SimpleForm>
  </Create>
);
export const PostEdit = (id: number) => {
  return (
    <Edit 
    id={22}
    // aside={<Aside />} 
    >
      <SimpleForm>
        <TextInput disabled label="Id" source="id" />
        <TextInput source="title" validate={required()} />
        <TextInput multiline source="teaser" validate={required()} />
        <RichTextInput source="body" validate={required()} />
        <DateInput label="Publication date" source="published_at" />
        <ReferenceManyField
          label="Comments"
          reference="comments"
          target="post_id"
        >
          <Datagrid>
            <TextField source="body" />
            <DateField source="created_at" />
            <EditButton />
          </Datagrid>
        </ReferenceManyField>
      </SimpleForm>
    </Edit>
  );
};
