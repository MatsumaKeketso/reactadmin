import React, { FC, useEffect, useState } from "react";
import {
  Button,
  Chip,
  Grid,
  IconButton,
  Slider,
  Stack,
  Typography,
} from "@mui/material";
import moment from "moment";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";

import { AreaChart } from "../components/Chart";
import { AddCircleOutline } from "@mui/icons-material";
import { useResourceContext } from "react-admin";
import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";
import PieChartTwoToneIcon from "@mui/icons-material/PieChartTwoTone";
import AccountBalanceWalletTwoToneIcon from "@mui/icons-material/AccountBalanceWalletTwoTone";
import CreditCardTwoToneIcon from "@mui/icons-material/CreditCardTwoTone";
import WorkHistoryTwoToneIcon from "@mui/icons-material/WorkHistoryTwoTone";
const cards = [
  {
    icon: (
      <AccountBalanceWalletTwoToneIcon sx={{ width: 50, height: "100%" }} />
    ),
    title: "R82,354.66",
    label: "Your bank balance",
  },
  {
    icon: <PieChartTwoToneIcon sx={{ width: 50, height: "100%" }} />,
    title: "1235",
    label: "Uncategorized transactions",
  },
  {
    icon: <WorkHistoryTwoToneIcon sx={{ width: 50, height: "100%" }} />,
    title: "76",
    label: "Employees working today",
  },
  {
    icon: <CreditCardTwoToneIcon sx={{ width: 50, height: "100%" }} />,
    title: "R23.545,77",
    label: `This week's card spending`,
  },
];
const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 20 },
  { field: "avatar", headerName: "Picture", width: 150 },
  {
    field: "fullName",
    headerName: "Name",
    width: 150,
    editable: true,
  },
  {
    field: "status",
    headerName: "Status",
    width: 450,
    editable: true,
  },
  {
    field: "time",
    headerName: "Time",
    type: "number",
    width: 110,
    editable: true,
  },
  // {
  //   field: "fullName",
  //   headerName: "Full name",
  //   description: "This column has a value getter and is not sortable.",
  //   sortable: false,
  //   width: 160,
  //   valueGetter: (params: GridValueGetterParams) =>
  //     `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  // },
];
const time = moment().format("h:mm a");
const rows = [
  {
    id: 1,
    avatar:
      "https://static.wikia.nocookie.net/jamescameronsavatar/images/e/e5/Avatar_TWoW_Neytiri_Textless_Poster.jpg/revision/latest?cb=20221125232909",
    fullName: "Snow Jon",
    status: "Meeting scheduled",
    time: time,
  },
  {
    id: 2,
    avatar:
      "https://static.wikia.nocookie.net/jamescameronsavatar/images/e/e5/Avatar_TWoW_Neytiri_Textless_Poster.jpg/revision/latest?cb=20221125232909",
    fullName: "Lannister Cersei",
    status: "Meeting scheduled",
    time: time,
  },
  {
    id: 3,
    avatar:
      "https://static.wikia.nocookie.net/jamescameronsavatar/images/e/e5/Avatar_TWoW_Neytiri_Textless_Poster.jpg/revision/latest?cb=20221125232909",
    fullName: "Lannister Jaime",
    status: "Meeting scheduled",
    time: time,
  },
  {
    id: 4,
    avatar:
      "https://static.wikia.nocookie.net/jamescameronsavatar/images/e/e5/Avatar_TWoW_Neytiri_Textless_Poster.jpg/revision/latest?cb=20221125232909",
    fullName: "Stark Arya",
    status: "Meeting scheduled",
    time: time,
  },
  {
    id: 5,
    avatar:
      "https://static.wikia.nocookie.net/jamescameronsavatar/images/e/e5/Avatar_TWoW_Neytiri_Textless_Poster.jpg/revision/latest?cb=20221125232909",
    fullName: "Targaryen Daenerys",
    status: "Meeting scheduled",
    time: time,
  },
  {
    id: 6,
    avatar:
      "https://static.wikia.nocookie.net/jamescameronsavatar/images/e/e5/Avatar_TWoW_Neytiri_Textless_Poster.jpg/revision/latest?cb=20221125232909",
    fullName: "Melisandre Daenerys",
    status: "Meeting scheduled",
    time: time,
  },
  {
    id: 7,
    avatar:
      "https://static.wikia.nocookie.net/jamescameronsavatar/images/e/e5/Avatar_TWoW_Neytiri_Textless_Poster.jpg/revision/latest?cb=20221125232909",
    fullName: "Clifford Ferrara",
    status: "Meeting scheduled",
    time: time,
  },
  {
    id: 8,
    avatar:
      "https://static.wikia.nocookie.net/jamescameronsavatar/images/e/e5/Avatar_TWoW_Neytiri_Textless_Poster.jpg/revision/latest?cb=20221125232909",
    fullName: "Frances Rossini",
    status: "Meeting scheduled",
    time: time,
  },
  {
    id: 9,
    avatar:
      "https://static.wikia.nocookie.net/jamescameronsavatar/images/e/e5/Avatar_TWoW_Neytiri_Textless_Poster.jpg/revision/latest?cb=20221125232909",
    fullName: "Roxie Harvey",
    status: "Meeting scheduled",
    time: time,
  },
];
const CardItem: FC<any> = ({ icon, title, label }) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor:
        theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: theme.palette.mode === "light" ? "#8ACD03" : "#308fe8",
    },
  }));
  return (
    <Stack
      spacing={6}
      direction={"row"}
      sx={{
        borderWidth: 2,
        borderColor: "white",
        paddingY: 6,
        paddingX: 4,
        borderRadius: 1.5,
        color: "black",
      }}
    >
      <Box
        sx={{
          height: 50,
          borderRadius: 50,
        }}
      >
        {icon}
      </Box>
      <Stack flex={1}>
        <Typography
          variant="h4"
          fontSize={{ xm: 20, sm: 22, md: 40 }}
          fontWeight={"bold"}
        >
          {title}
        </Typography>
        <Typography variant="caption">{label}</Typography>
      </Stack>

      <IconButton
        sx={{
          color: "#171717",
        }}
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        sx={{
          boxShadow: 3,
        }}
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <Stack
          sx={{
            width: 350,
            // backgroundColor: "#171717",
            color: "#171717",
          }}
        >
          <Stack
            spacing={2}
            sx={{
              margin: 1,
              borderRadius: 1,
              color: "#171717",
              padding: 3,
            }}
          >
            <Typography fontWeight={"bold"} variant="h6">
              Formation status
            </Typography>

            <Stack spacing={0.5}>
              <Typography fontWeight={"bold"} variant="caption">
                In Progress
              </Typography>
              <BorderLinearProgress value={5} />
            </Stack>
            <Stack spacing={0} textAlign={"center"}>
              <Typography fontWeight={"bold"} variant="subtitle1">
                Estimated Processing
              </Typography>
              <Typography variant="body1">5-6 business days</Typography>
            </Stack>
            <Button variant="contained" size="large">
              View status
            </Button>
          </Stack>
        </Stack>
      </Menu>
    </Stack>
  );
};
const TodoItem: FC<any> = ({ completed, title, id, date }) => {
  return (
    <Stack
      direction={"row"}
      width={450}
      padding={2}
      borderRadius={2}
      spacing={2}
      sx={{
        backgroundColor: "whitesmoke",
        alignSelf: "start",
      }}
    >
      <Box
        sx={{
          backgroundColor: "#171717",
          padding: 2,
          color: "white",
          borderRadius: 1,
          display: "flex",
          alignItems: "center",
        }}
      >
        <AccessTimeRoundedIcon />
      </Box>
      <Stack>
        <Typography variant="subtitle1" fontWeight={"bold"}>
          {title}
        </Typography>
        <Typography variant="caption">{date.toDateString()}</Typography>
      </Stack>
    </Stack>
  );
};
const DashboardResource = () => {
  const resource = useResourceContext();
  return <>{resource}</>;
};

const DashBoard = () => {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((todos) => {
        setTodos(todos);
      });
    fetch("https://todoapp-a9619-default-rtdb.firebaseio.com/cartitems")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }, []);
  return (
    <Box
      sx={{
        boxSizing: "border-box",
        width: "100%",
        maxWidth: "100%",
        height: "100%",
        overflow: "hidden",
        // backgroundColor: "#171717",
      }}
    >
      <Stack
        direction={{ sm: "column", lg: "row" }}
        sx={{
          boxSizing: "border-box",
          width: "100%",
          height: "100%",
        }}
      >
        <Stack
          sx={{
            background: "linear-gradient(to right bottom,  #C0DEE8, #B7D4CB)",
            borderRadius: 2,
            padding: 5,
            boxSizing: "border-box",
            height: "100%",
          }}
          maxWidth={{ sm: "100%", lg: 550 }}
          spacing={4}
          direction={"column"}
        >
          <Box padding={2}>
            <DashboardResource />
            <Typography fontWeight={"bold"} variant="h5">
              Good morning, James
            </Typography>
          </Box>

          {cards.map((item, i) => {
            return (
              <CardItem
                icon={item.icon}
                title={item.title}
                label={item.label}
              />
            );
          })}
          <Stack
            direction={"row"}
            spacing={3}
            sx={{
              backgroundColor: "#fff",
              paddingY: 6,
              paddingX: 4,
              borderRadius: 1.5,
              color: "#171717",
            }}
          >
            <Stack flex={1}>
              <Typography fontWeight={"bold"} variant="subtitle2">
                New clients
              </Typography>
              <Stack alignItems={"baseline"} spacing={2} direction={"row"}>
                <Typography fontWeight={"bold"} variant="h3">
                  56
                </Typography>
                <Box boxSizing={"border-box"}>
                  <Chip
                    size="small"
                    sx={{
                      alignSelf: "start",
                      backgroundColor: "#C6FFC6",
                      color: "green",
                    }}
                    variant={"filled"}
                    icon={<AddIcon />}
                    label="+18.7%"
                  />
                </Box>
              </Stack>
            </Stack>
            <Stack flex={1}>
              <Typography fontWeight={"bold"} variant="subtitle2">
                Invoices overdue
              </Typography>
              <Stack
                direction={"row"}
                spacing={2}
                alignItems={"baseline"}
                sx={{}}
              >
                <Typography fontWeight={"bold"} variant="h3">
                  5
                </Typography>
                <Box>
                  <Chip
                    size="small"
                    sx={{
                      alignSelf: "start",
                      backgroundColor: "#FFE2E2",
                      color: "red",
                    }}
                    variant={"filled"}
                    icon={<RemoveIcon />}
                    label="1.44%"
                  />
                </Box>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
        <Stack
          spacing={3}
          padding={5}
          sx={{
            boxSizing: "border-box",
            width: "100%",
            height: "100%",
            color: "black",
          }}
        >
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
            padding={2}
          >
            <Typography fontWeight={"bold"} variant="h4">
              Revenue
            </Typography>

            <Typography variant="subtitle1">
              Last 7 days VS prior week
            </Typography>
          </Stack>
          <AreaChart />
          <Box sx={{ height: 400, width: "100%" }}>
            <DataGrid
              sx={{
                borderWidth: 0,
              }}
              rows={rows}
              columns={columns}
              pageSize={5}
              rowsPerPageOptions={[5]}
              checkboxSelection
              disableSelectionOnClick
              experimentalFeatures={{ newEditingApi: true }}
            />
          </Box>
          <Stack width={"100%"} paddingY={2}>
            <Box padding={2} paddingY={4}>
              <Typography variant="h5" fontWeight={"bold"}>
                Your to-do list
              </Typography>
            </Box>
            <Grid
              container
              maxHeight={400}
              rowSpacing={2}
              gap={2}
              sx={{
                overflowY: "auto",
              }}
            >
              {todos.map((item: any, i) => {
                const d = new Date();
                return (
                  <Grid spacing={2}>
                    <TodoItem
                      title={item.title}
                      id={item.id}
                      completed={item.completed}
                      date={d}
                    />
                  </Grid>
                );
              })}
            </Grid>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default DashBoard;
