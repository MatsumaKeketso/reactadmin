import React from "react";
import { ListController, useRedirect } from "react-admin";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import { Box, Button, Grid } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Stack } from "@mui/system";
import { CustomizedInputBase } from "./Users";
import ModeEditOutlineTwoToneIcon from "@mui/icons-material/ModeEditOutlineTwoTone";
import NoteAddTwoToneIcon from "@mui/icons-material/NoteAddTwoTone";
const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const PostList = (props: any) => {
  const [expanded, setExpanded] = React.useState(false);
  const { data = [] } = props;
  const redirect = useRedirect();
  if (data.length !== 0) {
    console.log(data);
  }
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const create = () => {
    redirect(`/posts/create`);
  };
  const edit = (props: any) => {
    console.log(props);

    redirect(`/posts/edit/${props.id}`);
  };
  return (
    <Box
      padding={2}
      sx={{
        width: "100%",
        height: "100%",
        borderRadius: 2,
        flex: 1,
        background:
          "linear-gradient(0deg, rgba(0,0,0,0.025647759103641476) 0%, rgba(0,0,0,0.036852240896358524) 100%)",
        backdropFilter: "blur(12px)",
        zIndex: 2,
      }}
    >
      <Stack>
        <Stack
          padding={3}
          direction={{ sm: "column", lg: "row" }}
          alignItems={"center"}
          spacing={3}
        >
          <Stack flex={1} padding={1}>
            <Typography variant="h4" fontWeight={"bold"}>
              Posts
            </Typography>
          </Stack>
          <Stack
            direction={{ sm: "column", lg: "row" }}
            spacing={3}
            alignItems={"center"}
          >
            <Button
              startIcon={<NoteAddTwoToneIcon />}
              size="large"
              variant="outlined"
              onClick={create}
            >
              Create Post
            </Button>
            <CustomizedInputBase />
          </Stack>
        </Stack>
        <Grid
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          padding={3}
          alignItems={"center"}
          justifyContent={"space-evenly"}
          display={"flex"}
          flexWrap={"wrap"}
        >
          {data.map((item: any, i: number) => {
            return (
              <Grid key={i} item sx={{ maxWidth: 345 }}>
                <CardHeader
                  avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                      R
                    </Avatar>
                  }
                  action={
                    <IconButton aria-label="settings">
                      <MoreVertIcon />
                    </IconButton>
                  }
                  title="Shrimp and Chorizo Paella"
                  subheader="September 14, 2016"
                />

                <CardContent>
                  <Typography
                    lineHeight={1}
                    marginY={2}
                    variant="subtitle1"
                    fontWeight={"bold"}
                  >
                    {item.title}
                  </Typography>
                  <CardMedia
                    component="img"
                    height="194"
                    image="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    alt="Paella dish"
                  />

                  <Typography variant="body2" color="text.secondary">
                    {item.body}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Stack direction={"row"} flex={1}>
                    <Button
                      onClick={() => edit(item)}
                      startIcon={<ModeEditOutlineTwoToneIcon />}
                      variant="outlined"
                    >
                      Edit
                    </Button>
                  </Stack>
                  <Button color="error">Delete</Button>
                </CardActions>
              </Grid>
            );
          })}
        </Grid>
      </Stack>
    </Box>
  );
};

const Posts = (props: any) => {
  return (
    <ListController {...props}>
      {(cProps) => <PostList {...cProps} />}
    </ListController>
  );
};

export default Posts;
interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}
