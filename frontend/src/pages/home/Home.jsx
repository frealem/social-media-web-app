import React from "react";
import PostSide from "./component/PostSide";
import RightSide from "./component/RightSide";
import { Box } from "@mui/material";
const Home = () => {
  return (
    <>
      <Box display="flex" justifyContent="space-between">
        <Box width="60%">
          <PostSide />
        </Box>
        <Box width="35%">
          <RightSide />
        </Box>
      </Box>
    </>
  );
};

export default Home;
