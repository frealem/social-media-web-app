import React from "react";
import sponsorImage from "../../../images/photo_2024-04-08_23-14-40.jpg";
import { Box, Button, Divider, IconButton, Typography } from "@mui/material";
import { adverts } from "../../../components/fakeData";
import { Add, AddBoxOutlined } from "@mui/icons-material";
import { useTheme } from "@emotion/react";

const AdvertWidget = () => {
  const theme=useTheme();
  return (
    <Box>
      <Box display="flex" alignItems="center" mb={5}>
        <Divider style={{ flexGrow: 1 }} />
        <Typography
          variant="body2"
          style={{ margin: "0 10px" }}
          fontWeight={600}
        >
          Suggested Friends
        </Typography>
        <Divider style={{ flexGrow: 1 }} />
      </Box><Box >
      {adverts.slice(0, 4).map(({ id, title, link }) => (
        <div
          key={id}
          style={{
            display: "flex",
            gap: "10px",
            marginBottom: "10px",
            width: "98%",
            height: "80px",
          borderColor: theme.palette.secondary[100],
          borderWidth: "2px",
          borderStyle: "solid",
          borderRadius: theme.shape.borderRadius,
          padding: "10px",
          backgroundColor: theme.palette.background.alt}}
        >
         
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          > <img
            alt="sponsor board"
            src={sponsorImage}
            style={{ width: "100px", height: "60px", borderRadius: 8,padding:"6px" }}
          />
            <Typography padding={2.5}>Kaleb Endale</Typography>
            <Button
            sx={{
              backgroundColor: theme.palette.secondary[100],
              color: theme.palette.secondary[900],
             paddingX:"10px"
            }}
          ><Add sx={{fontSize:"25 px"}}/></Button>
          </div>
        </div>
      ))}</Box>
    </Box>
  );
};

export default AdvertWidget;
