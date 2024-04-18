import React, { useState } from "react";
import {
  LightModeOutlined,
  DarkModeOutlined,
  Menu as MenuIcon,
  Search,
  SettingsOutlined,
  ArrowDropDownOutlined,
  NotificationAddRounded,
  NotificationImportantOutlined,
  MessageOutlined,
  NotificationsActive,
} from "@mui/icons-material";
import { useDispatch } from "react-redux";
import profileImage from "../images/photo_2024-04-08_23-14-40.jpg";
import {
  AppBar,
  Button,
  Box,
  Typography,
  IconButton,
  InputBase,
  Toolbar,
  Menu,
  MenuItem,
  useTheme,
  useMediaQuery
} from "@mui/material";
import { Link, useNavigate, useNavigation } from "react-router-dom";
import FlexBetween from "./Flexbetween";
import { setMode } from "../States/themeSlice";
const Navbar = ({ user, isSidebarOpen, setIsSidebarOpen }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorElst, setAnchorElst] = useState(null);
  const isOpen = Boolean(anchorEl);
  const isOpenst = Boolean(anchorElst);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClickst = (event) => {
    setAnchorElst(event.currentTarget);
  };
  const handleClose = () => setAnchorEl(null);
  const handleClosest = () => setAnchorElst(null);
  const [showSearchBar, setShowSearchBar] = useState(false);

  const handleSearchIconClick = () => {
    setShowSearchBar(true);
  };
  const handleAuth = () => {
    navigate("/authpage");
  };
  return (
    <AppBar
      sx={{
        position: "static",
        background: "none",
        boxShadow: "none",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* LEFT SIDE */}
        <FlexBetween gap="3rem" padding="2rem 6%">
        <FlexBetween gap="3rem" padding="2rem 6%">
      {isMobile && !showSearchBar ? (
        <IconButton onClick={handleSearchIconClick}>
          <Search />
        </IconButton>
      ) : (
        <FlexBetween
          backgroundColor={theme.palette.secondary[900]}
          borderRadius={6}
          gap="3rem"
          p="0.1rem 1.5rem"
        >
          <InputBase placeholder="Search..." />
          <IconButton>
            <Search />
          </IconButton>
        </FlexBetween>
      )}
    </FlexBetween>
        </FlexBetween>

        {/* RIGHT SIDE */}
        <FlexBetween gap="1.5rem">
          <IconButton sx={{color:theme.palette.secondary[100]}} >
            <NotificationsActive sx={{fontSize:"25px"}}/>
          </IconButton>
          <IconButton sx={{color:theme.palette.secondary[100] }} >
            <MessageOutlined sx={{fontSize:"25px"}}/>
          </IconButton>
          <FlexBetween>
            <IconButton
              onClick={handleClickst}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                textTransform: "none",
                gap: "1rem",
              color:theme.palette.secondary[100]
              }}
            >
              <SettingsOutlined sx={{ fontSize: "25px" }} />
            </IconButton>
            <Menu
              anchorEl={anchorElst}
              open={isOpenst}
              onClose={handleClosest}
              anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            >
              <MenuItem onClick={handleClose}><IconButton onClick={() => dispatch(setMode())}>
            {theme.palette.mode === "dark" ? (
              <DarkModeOutlined sx={{ fontSize: "10px" }} />
            ) : (
              <LightModeOutlined sx={{ fontSize: "10px" }} />
            )}
          {theme.palette.mode}</IconButton></MenuItem>
              <MenuItem onClick={handleClose}>Others Settings</MenuItem>
            </Menu>
          </FlexBetween>

          <FlexBetween>
            <Button
              onClick={handleClick}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                textTransform: "none",
                gap: "1rem",
              }}
            >
              <Box
                component="img"
                alt="profile"
                src={profileImage}
                height="32px"
                width="32px"
                borderRadius="50%"
                sx={{ objectFit: "cover" }}
              />
              <ArrowDropDownOutlined
                sx={{ color: theme.palette.secondary[300], fontSize: "25px" }}
              />
            </Button>
            <Menu
              anchorEl={anchorEl}
              open={isOpen}
              onClose={handleClose}
              anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            >
              <MenuItem onClick={handleClose}>Log Out</MenuItem>
              <MenuItem onClick={handleClose}>Account Settings</MenuItem>
            </Menu>
          </FlexBetween>
        </FlexBetween>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
