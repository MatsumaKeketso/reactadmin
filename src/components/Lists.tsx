import React, { FC } from "react";
import { List, Datagrid, TextField, EmailField } from "react-admin";
import { Box } from "@mui/material";
import PropTypes from "prop-types";
const POSTS = ["id", "title", "body"];
const TODOS = ["id", "title", "completed", "userId"];
const COMMENTS = ["id", "name", "email", "body", "postId"];
const USERS = ["id", "name", "username", "email", "address"];

const RecordField: FC<any> = ({ record, source }) => {
  console.log(source);
  return <a href={record[source]}>{record[source]}</a>;
};
RecordField.propTypes = {
  record: PropTypes.object,
  source: PropTypes.string.isRequired,
};
export const TodoList = (props: any) => {
  return (
    <List title="All Todos" {...props}>
      <Datagrid>
        {TODOS.map((item, i) => {
          return <TextField key={i} source={item} />;
        })}
      </Datagrid>
    </List>
  );
};

export const CommentList = (props: any) => {
  return (
    <List title="All Todos" {...props}>
      <Datagrid>
        {COMMENTS.map((item, i) => {
          return <TextField key={i} source={item} />;
        })}
      </Datagrid>
    </List>
  );
};

export const UserList = (props: any) => {
  console.log(props);
  return (
    <Box
      sx={{
        boxSizing: "border-box",
        width: "100%",
        height: "100%",
        backgroundColor: "tomato",
      }}
    >
      <List title={"All Userss"} {...props}>
        <Datagrid>
          {USERS.map((item, i) => {
            if (item == "address") {
              return <TextField key={i} source={item} />;
            } else if (item !== "email") {
              return <TextField key={i} source={item} />;
            } else {
              return <EmailField key={i} source={item} />;
            }
          })}
        </Datagrid>
      </List>
    </Box>
  );
};
interface TODOS {
  userID: string;
  id: number;
  title: string;
  completed: boolean;
}
