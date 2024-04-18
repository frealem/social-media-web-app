import React from "react";
import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import { useNavigate } from "react-router-dom";
const TopPostBox = () => {
  const theme = useTheme();
  const navigation=useNavigate()

  const handleCreatePost = () => {
    navigation('/createpost')
  };
  return (
    <>
      <Box
        sx={{
          backgroundColor: theme.palette.background.alt,
          display: "flex",
          alignItems: "center",
          padding: "10px",
          borderRadius: 5,
          width: "90%",
          gap: "2px",
        }}
      >
        <Box>
          <IconButton
            onClick={handleCreatePost}
          >
            <AddCircleOutlineOutlinedIcon
              sx={{ fontSize: 48, color: theme.palette.secondary[300] }}
            />
          </IconButton>
        </Box>
        <Box sx={{}}>
          <Typography
            variant="h4"
            component="div"
            sx={{ color: theme.palette.grey[1000], fontWeight: 900 }}
          >
            Create Your Post
          </Typography>
          <Typography
            variant="body2"
            component="div"
            sx={{ color: theme.palette.grey[1000] }}
          >
            Share your experience and review others
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default TopPostBox;
