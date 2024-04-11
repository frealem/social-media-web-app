import React from "react";
import {
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import DynamicFeedOutlinedIcon from "@mui/icons-material/DynamicFeedOutlined";
import SettingsOutlined from "@mui/icons-material/SettingsOutlined";
import ChevronRightOutlined from "@mui/icons-material/ChevronRightOutlined";
import ChevronLeft from "@mui/icons-material/ChevronLeft";
import EventOutlinedIcon from "@mui/icons-material/EventOutlined";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";
import PostAddOutlinedIcon from "@mui/icons-material/PostAddOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import FormatShapesOutlinedIcon from "@mui/icons-material/FormatShapesOutlined";
import DraftsOutlinedIcon from "@mui/icons-material/DraftsOutlined";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";

import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import FlexBetween from "./Flexbetween";
// import profileImage from "https://img.freepik.com/free-photo/portrait-african-american-man_23-2149072179.jpg?t=st=1712652008~exp=1712655608~hmac=d48cb50d9ec9a67574b175f44517c21554485ba5f311d6d81de9b7b549aa9de3&w=900";
import UserWidget from "../pages/widgets/userWidget";

const navItems = [
  {
    text: "Menu",
    icon: null,
  },
  {
    text: "Discover",
    icon: <DynamicFeedOutlinedIcon />,
  },
  {
    text: "Trending",
    icon: <DynamicFeedOutlinedIcon />,
  },
  {
    text: "Explores",
    icon: <PostAddOutlinedIcon />,
  },
  {
    text: "BookMarks",
    icon: <EventOutlinedIcon />,
  },
  {
    text: "Groups",
    icon: <FavoriteOutlinedIcon />,
  },
  {
    text: "Pages",
    icon: <DraftsOutlinedIcon />,
  },
  {
    text: "Stages",
    icon: <FormatShapesOutlinedIcon />,
  },
  {
    text: "Game",
    icon: <MessageOutlinedIcon />,
  },
];

const libraryItems = [
  {
    text: "Libraries",
    icon: null,
  },
  {
    text: "Wallet",
    icon: <DynamicFeedOutlinedIcon />,
  },
  {
    text: "Lives Channels",
    icon: <DynamicFeedOutlinedIcon />,
  },
  {
    text: "Recent",
    icon: <PostAddOutlinedIcon />,
  },
  {
    text: "PlayLists",
    icon: <EventOutlinedIcon />,
  },
  {
    text: "Favorites",
    icon: <FavoriteOutlinedIcon />,
  },
  {
    text: "Locals",
    icon: <DraftsOutlinedIcon />,
  },
];

const Sidebar = ({
  user,
  drawerWidth,
  isSidebarOpen,
  setIsSidebarOpen,
  isNonMobile,
}) => {
  const { pathname } = useLocation();
  const [active, setActive] = useState("");
  const navigate = useNavigate();
  const theme = useTheme();

  useEffect(() => {
    setActive(pathname.substring(1));
  }, [pathname]);

  return (
    <Box component="nav">
      
        <Box
          open={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
          variant="persistent"
          anchor="left"
          sx={{
            width: drawerWidth,
            "& .MuiDrawer-paper": {
              color: theme.palette.grey[50],
              backgroundColor: theme.palette.background.alt,
              boxSizing: "border-box",
              borderWidth: isNonMobile ? 0 : "2px",
            },
          }}
        >
          <Box width="100%">
            <Box m="1.5rem 2rem 2rem 3rem">
              <FlexBetween color={theme.palette.secondary.main}>
                <Box display="flex" alignItems="center" gap="0.5rem">
                  <FlexBetween>
                    <Typography
                      variant="h3"
                      fontWeight={900}
                      color={theme.palette.secondary[100]}
                    >
                      FreePost
                    </Typography>
                  </FlexBetween>
                </Box>
                {!isNonMobile && (
                  <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                    <ChevronLeft />
                  </IconButton>
                )}
              </FlexBetween>
              <Box pt={5}>
                <UserWidget />
              </Box>
            </Box>
            <List>
              {navItems.map(({ text, icon }) => {
                if (!icon) {
                  return (
                    <Typography key={text} sx={{ m: "2.25rem 0 1rem 3rem" }}>
                      {text}
                    </Typography>
                  );
                }
                const lcText = text.toLowerCase();

                return (
                  <ListItem key={text} disablePadding>
                    <ListItemButton
                      onClick={() => {
                        navigate(`/${lcText}`);
                        setActive(lcText);
                      }}
                      sx={{
                        backgroundColor:
                          active === lcText
                            ? theme.palette.secondary[300]
                            : "transparent",
                        color:
                          active === lcText
                            ? theme.palette.primary[600]
                            : theme.palette.secondary[100],
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          ml: "2rem",
                          color:
                            active === lcText
                              ? theme.palette.primary[600]
                              : theme.palette.secondary[200],
                        }}
                      >
                        {icon}
                      </ListItemIcon>
                      <ListItemText primary={text} />
                      {active === lcText && (
                        <ChevronRightOutlined sx={{ ml: "auto" }} />
                      )}
                    </ListItemButton>
                  </ListItem>
                );
              })}
            </List>

            <List>
              {libraryItems.map(({ text, icon }) => {
                if (!icon) {
                  return (
                    <Typography key={text} sx={{ m: "2.25rem 0 1rem 3rem" }}>
                      {text}
                    </Typography>
                  );
                }
                const lcText = text.toLowerCase();

                return (
                  <ListItem key={text} disablePadding>
                    <ListItemButton
                      onClick={() => {
                        navigate(`/${lcText}`);
                        setActive(lcText);
                      }}
                      sx={{
                        backgroundColor:
                          active === lcText
                            ? theme.palette.secondary[300]
                            : "transparent",
                        color:
                          active === lcText
                            ? theme.palette.primary[600]
                            : theme.palette.secondary[100],
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          ml: "2rem",
                          color:
                            active === lcText
                              ? theme.palette.primary[600]
                              : theme.palette.secondary[200],
                        }}
                      >
                        {icon}
                      </ListItemIcon>
                      <ListItemText primary={text} />
                      {active === lcText && (
                        <ChevronRightOutlined sx={{ ml: "auto" }} />
                      )}
                    </ListItemButton>
                  </ListItem>
                );
              })}
            </List>
          </Box>
        </Box>
    </Box>
  );
};

export default Sidebar;
