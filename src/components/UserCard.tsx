import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  Divider,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Chip,
  Button,
  IconButton,
} from "@mui/material";
import { Stack } from "@mui/system";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
import CorporateFareTwoToneIcon from "@mui/icons-material/CorporateFareTwoTone";
import LanguageTwoToneIcon from "@mui/icons-material/LanguageTwoTone";
import LocalPhoneTwoToneIcon from "@mui/icons-material/LocalPhoneTwoTone";
import MoreVertTwoToneIcon from "@mui/icons-material/MoreVertTwoTone";
const UserCard: React.FC<Props> = ({ user }) => {
  const [active, setActive] = useState("");

  const handleChange = (panel: string) => {
    setActive(panel);
  };
  return (
    <ListItem
      sx={{
        background: "white",
        borderRadius: 2,
        marginBottom: 1,
      }}
      alignItems="flex-start"
    >
      <ListItemAvatar>
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
      </ListItemAvatar>
      <ListItemText
        // primary={user.name}
        secondary={
          <React.Fragment>
            <Stack direction={"row"}>
              <Stack flex={1}>
                <Typography variant="h6" fontWeight={"bold"}>
                  {user.name}
                </Typography>
                <Stack
                  flex={1}
                  marginBottom={2}
                  direction={"row"}
                  spacing={2}
                  alignItems={"baseline"}
                >
                  <Typography>{user.username} </Typography>
                  <Typography variant="caption">{user.email} </Typography>
                </Stack>
              </Stack>

              <Stack>
                <IconButton>
                  <MoreVertTwoToneIcon />
                </IconButton>
              </Stack>
            </Stack>

            <Accordion
              //   onClick={() => setActive(user.email)}
              //   expanded={active === user.name ? true : false}
              draggable={true}
              //   square={true}
              sx={{
                borderRadius: 1,
                borderWidth: 0,
                backgroundColor: "transparent",
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreRoundedIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography
                  variant="subtitle2"
                  color={"gray"}
                  fontWeight={"bold"}
                >
                  more
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Stack direction={{ sm: "column", lg: "row" }} spacing={3}>
                  <Stack>
                    <CorporateFareTwoToneIcon />
                  </Stack>

                  <Stack>
                    <Typography>
                      {user.address.street}, {user.address.city}
                    </Typography>
                    <Typography>{user.address.suite}</Typography>
                    <Typography variant="overline">
                      ZIP: {user.address.zipcode}
                    </Typography>
                    <Divider />
                    <Stack direction={"row"} spacing={2} padding={2}>
                      <Stack>
                        <Typography variant="caption">Latitude</Typography>
                        <Typography>{user.address.geo.lat}</Typography>
                      </Stack>
                      <Divider orientation="vertical" />
                      <Stack>
                        <Typography variant="caption">Longitude</Typography>
                        <Typography>{user.address.geo.lng}</Typography>
                      </Stack>
                    </Stack>
                    <Divider />
                  </Stack>
                  <Stack paddingTop={2} spacing={2}>
                    <Chip
                      sx={{
                        alignSelf: "start",
                      }}
                      icon={<LanguageTwoToneIcon />}
                      label={user.website}
                    />
                    <Chip
                      sx={{
                        alignSelf: "start",
                      }}
                      icon={<LocalPhoneTwoToneIcon />}
                      label={user.phone}
                    />
                  </Stack>
                </Stack>
              </AccordionDetails>
            </Accordion>
          </React.Fragment>
        }
      />
    </ListItem>
  );
  //   return (
  //     <Card>
  //       <CardContent>
  //
  //         <Typography>Phone: {user.phone}</Typography>
  //         <Typography variant="h6">Company</Typography>
  //         <Typography>Name: {user.company.name}</Typography>
  //         <Typography>Catchphrase: {user.company.catchPhrase}</Typography>
  //         <Typography>BS: {user.company.bs}</Typography>
  //       </CardContent>
  //     </Card>
  //   );
};
export default UserCard;
interface Props {
  user: {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
      street: string;
      suite: string;
      city: string;
      zipcode: string;
      geo: {
        lat: string;
        lng: string;
      };
    };
    phone: string;
    website: string;
    company: {
      name: string;
      catchPhrase: string;
      bs: string;
    };
  };
}
