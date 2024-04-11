import {
    ManageAccountsOutlined,
    EditOutlined,
    LocationOnOutlined,
    WorkOutlineOutlined,
  } from "@mui/icons-material";
  import { Box, Typography, Divider, useTheme } from "@mui/material";
  import { useSelector } from "react-redux";
  import { useEffect, useState } from "react";
  import { useNavigate } from "react-router-dom";
import FlexBetween from "../../components/Flexbetween";
import UserImage from "../../components/userImage";
  const UserWidget = ({ userId, picturePath }) => {
    const [user, setUser] = useState(null);
    const { palette } = useTheme();
    const navigate = useNavigate();
    const token = useSelector((state) => state.token);
    const dark = palette.neutral.dark;
    const medium = palette.neutral.medium;
    const main = palette.neutral.main;
    return (
      <Box>
        {/* FIRST ROW */}
        <FlexBetween
          gap="0.5rem"
          pb="1.1rem"
          onClick={() => navigate(`/profile/${userId}`)}
        >
          <FlexBetween gap="1rem">
            <UserImage size={50} />
            <Box>
              <Typography
                variant="h4"
                color={dark}
                fontWeight="500"
                sx={{
                  "&:hover": {
                    color: palette.primary.light,
                    cursor: "pointer",
                  },
                }}
              >
               Frealem
              </Typography>
              <Typography color={medium}>100 friends</Typography>
            </Box>
          </FlexBetween>
          <ManageAccountsOutlined />
        </FlexBetween>
  
        {/* SECOND ROW */}
        <Box p="0.5rem 0">
          <Box display="flex" alignItems="center" gap="1rem" mb="0.5rem">
            <LocationOnOutlined fontSize="large" sx={{ color: main }} />
            <Typography color={medium}>addis ababa ,ethiopia</Typography>
          </Box>
          <Box display="flex" alignItems="center" gap="1rem">
            <WorkOutlineOutlined fontSize="large" sx={{ color: main }} />
            <Typography color={medium}>0909090909</Typography>
          </Box>
        </Box>
  
      </Box>
    );
  };
  
  export default UserWidget;