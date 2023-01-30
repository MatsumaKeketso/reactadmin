import {
  Avatar,
  Typography,
  Box,
  Stack,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Chip,
  TextField,
} from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import React, { useState } from "react";
import { ListController } from "react-admin";
import ExpandCircleDownTwoToneIcon from "@mui/icons-material/ExpandCircleDownTwoTone";
import { grey } from "@mui/material/colors";
import { CustomizedInputBase } from "./Users";
const Timeline = (props: any) => {
  const { data = [] } = props;
  return (
    <Stack spacing={5} flex={1} direction={{ md: "column", lg: "row" }}>
      <Stack flex={1}>
        <Stack>
          <Stack padding={2}>
            <Typography variant="h4">Comments</Typography>
          </Stack>
          <Accordion
            sx={{
              backgroundColor: grey[100],
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandCircleDownTwoToneIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              sx={{
                backgroundColor: grey[200],
                borderRadius: 1,
              }}
            >
              <Typography>At a glance</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Stack spacing={2}>
                <Stack
                  justifyContent={"space-between"}
                  direction={{ sm: "column", md: "row" }}
                >
                  <Button variant="outlined">1 Post</Button>
                  <Button>{data.length} comments</Button>
                </Stack>

                <Box>
                  <Typography variant="caption">
                    React admin 1.0 running MUI theme.
                  </Typography>
                </Box>
              </Stack>
            </AccordionDetails>
          </Accordion>
          <Accordion
            sx={{
              backgroundColor: grey[100],
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandCircleDownTwoToneIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              sx={{
                backgroundColor: grey[200],
                borderRadius: 1,
              }}
            >
              <Typography>Activity</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Stack>
                <Typography>Recently Published</Typography>
                <Stack>
                  <Box>
                    <ListItem alignItems="flex-start">
                      <ListItemAvatar>
                        <Avatar
                          alt="Remy Sharp"
                          src="/static/images/avatar/1.jpg"
                        />
                      </ListItemAvatar>
                      <ListItemText
                        primary="JustDesigns"
                        secondary={
                          <React.Fragment>
                            <Stack spacing={2}>
                              <Stack>
                                <Typography
                                  sx={{ display: "inline" }}
                                  component="span"
                                  variant="body2"
                                  color="text.primary"
                                >
                                  justdesigns@design.co
                                </Typography>
                              </Stack>

                              <Typography variant="body2">
                                From JustDesigns on Hello World!
                              </Typography>
                              <Typography>
                                Hi, this is a comment. To get started with a
                                similar project, create a react web application
                                and install react admin.
                              </Typography>
                            </Stack>
                          </React.Fragment>
                        }
                      />
                    </ListItem>
                    <Divider sx={{ marginBottom: 1 }} variant="inset" />
                  </Box>
                  <Stack direction={"row"} spacing={2}>
                    <Chip sx={{ alignSelf: "start" }} label="All (941)" />
                    <Chip sx={{ alignSelf: "start" }} label="Pending (0)" />
                    <Chip sx={{ alignSelf: "start" }} label="Spam (14)" />
                    <Chip sx={{ alignSelf: "start" }} label="Trash (232)" />
                  </Stack>
                </Stack>
              </Stack>
            </AccordionDetails>
          </Accordion>
        </Stack>
      </Stack>
      <Stack spacing={2}>
        <Stack>
          <Accordion
            sx={{
              backgroundColor: grey[100],
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandCircleDownTwoToneIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              sx={{
                backgroundColor: grey[200],
                borderRadius: 1,
              }}
            >
              <Typography>Quick Draft</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Stack spacing={1}>
                <TextField placeholder="Title" />
                <TextField placeholder="Coment" />
                <Button>Post Comment</Button>
              </Stack>
            </AccordionDetails>
          </Accordion>
        </Stack>
        <CustomizedInputBase />
        {data.map((item: any, i: number) => {
          return (
            <Box maxWidth={700} key={i}>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                </ListItemAvatar>
                <ListItemText
                  primary={item.name}
                  secondary={
                    <React.Fragment>
                      <Stack spacing={2}>
                        <Stack>
                          <Typography
                            sx={{ display: "inline" }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                          >
                            {item.email}
                          </Typography>
                        </Stack>

                        <Typography variant="body2">{item.body}</Typography>
                      </Stack>
                    </React.Fragment>
                  }
                />
              </ListItem>
              <Divider sx={{ marginBottom: 1 }} variant="inset" />
            </Box>
          );
        })}
      </Stack>
    </Stack>
  );
};
const Comments = (props: any) => {
  return (
    <ListController {...props}>
      {(cProps) => <Timeline {...cProps} />}
    </ListController>
  );
};
export default Comments;
