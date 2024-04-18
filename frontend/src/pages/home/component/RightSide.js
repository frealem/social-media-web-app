import { Box, Button, Divider, Typography, useTheme } from "@mui/material";
import React from "react";
import userImage from "../../../images/photo_2024-04-08_23-14-40.jpg";
import AvatarGroup from "./setAvatar";
import AdvertWidget from "./advertWidget";

const RightSide = () => {
  const theme = useTheme();

  return (
    <>
      <Box
        sx={{
          borderColor: theme.palette.secondary[100],
          borderWidth: "2px",
          borderStyle: "solid",
          borderRadius: theme.shape.borderRadius,
          padding: "10px",
          backgroundColor: theme.palette.background.alt
        }}
      >
        <Box display="flex" justifyContent="space-between"mb={3}>
          <Typography>Suggested Group</Typography>
          <Button
            sx={{
              backgroundColor: theme.palette.secondary[100],
              color: theme.palette.secondary[900],
            }}
          >
           See
          </Button>
        </Box>
        <Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              marginBottom: theme.spacing(2),

            }}
          >
            <img
              style={{ width: "90%", height: "150px", borderRadius: "8px" }}
              alt="no"
              src={userImage}
            />
            <Button
            sx={{
              position:"relative", 
              top:70,right:150,// Center horizontally
              backgroundColor: theme.palette.secondary[100],
              color: theme.palette.secondary[900],
              width:"120px",
              height:"30px"
            }}
          >
           Join Now
          </Button>
          </Box>
          <Box display="flex" justifyContent="space-between">
            <Box>
              <Typography>Ethio-Student Group</Typography>
              <Typography>224 members</Typography>
            </Box>
            <Box>
              <AvatarGroup />
            </Box>
          </Box>
        </Box>
      </Box>
      <Box mt={3}>
      <AdvertWidget/>
      </Box>
      <Box mt={3}>
      <AdvertWidget/>
      </Box>
    </>
  );
};

export default RightSide;