import {
  Box,
  Typography,
  Paper,
  IconButton,
  InputBase,
  Divider,
  Menu,
  Button,
  MenuList,
  ListItemIcon,
  ListItemText,
  MenuItem,
} from "@mui/material";
import TablePagination from "@mui/material/TablePagination";
import React, { useEffect, useState } from "react";
import { ListController } from "react-admin";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import SearchIcon from "@mui/icons-material/Search";
import { Stack } from "@mui/system";
import UserCard from "../components/UserCard";
import FilterListRoundedIcon from "@mui/icons-material/FilterListRounded";

import FilterComponent from "../components/Filter";

export const CustomizedInputBase = () => {
  const [filterState, setFilterState] = useState(false);
  const openFilter = () => {
    setFilterState(true);
  };
  const closeFilter = () => {
    setFilterState(false);
  };
  return (
    <Paper
      component="form"
      sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 400 }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search Users"
        inputProps={{ "aria-label": "search google maps" }}
      />
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
        <SearchIcon />
      </IconButton>

      <Stack
        sx={{
          position: "relative",
          overflow: "hidden",
        }}
      >
        <IconButton
          onClick={openFilter}
          type="button"
          sx={{ p: "10px" }}
          aria-label="search"
        >
          <FilterListRoundedIcon />
        </IconButton>
      </Stack>
    </Paper>
  );
};
const UserList = (props: any) => {
  const [userData, setUserData] = useState([]);
  const { data = [] } = props;
  if (data.length !== 0) {
    // setUserData(data);
    // console.log(userData);
  }
  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "firstName",
      headerName: "First name",
      width: 150,
      editable: true,
    },
    {
      field: "lastName",
      headerName: "Last name",
      width: 150,
      editable: true,
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      width: 110,
      editable: true,
    },
    {
      field: "fullName",
      headerName: "Full name",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
      valueGetter: (params: GridValueGetterParams) =>
        `${params.row.firstName || ""} ${params.row.lastName || ""}`,
    },
  ];

  const rows = [
    { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
    { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
    { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
    { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
    { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
    { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
    { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
    { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
    { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
  ];
  const [page, setPage] = React.useState(2);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Box
      sx={{
        height: "100%",
        flex: 1,
        borderRadius: 2,
        overflow: "hidden",
      }}
    >
      <Box
        padding={2}
        sx={{
          width: "100%",
          height: "100%",
          flex: 1,
          background:
            "linear-gradient(0deg, rgba(0,0,0,0.025647759103641476) 0%, rgba(0,0,0,0.036852240896358524) 100%)",
          backdropFilter: "blur(12px)",
          zIndex: 2,
        }}
      >
        <Stack
          flex={1}
          padding={3}
          direction={{ sm: "column", lg: "row" }}
          alignItems={{ sm: "start", lg: "center" }}
          spacing={3}
        >
          <Box paddingY={4} flex={1}>
            <Typography variant="h4" fontWeight={"bold"}>
              Users
            </Typography>
          </Box>
          <Stack direction={"row"}>
            <CustomizedInputBase />
          </Stack>
        </Stack>

        <Box
          padding={2}
          borderRadius={2}
          sx={{
            height: "74%",
            backgroundColor: "white",
            display: "flex",
            flexDirection: "column",
          }}
          flex={1}
        >
          <Box
            alignItems={"center"}
            justifyContent={"center"}
            flex={1}
            sx={{ height: "70%", borderRadius: 2 }}
          >
            {data.length == 0 && (
              <Box
                flex={1}
                sx={{
                  height: " 100%",
                }}
                alignContent={"center"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Typography textAlign={"center"}>No items</Typography>
              </Box>
            )}
            {data.map((item: any, key: number) => {
              return <UserCard user={item} key={key} />;
            })}
          </Box>

          <TablePagination
            component="div"
            count={50}
            page={page}
            onPageChange={handleChangePage}
            rowsPerPage={rowsPerPage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Box>
      </Box>
    </Box>
  );
};
const Users = (props: any) => {
  return (
    <ListController {...props}>
      {(cProps) => <UserList {...cProps} />}
    </ListController>
  );
};

export default Users;
