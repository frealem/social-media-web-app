import React from "react";
import { Avatar, IconButton, Tooltip } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { styled } from "@mui/material/styles";

const AvatarGroupContainer = styled("div")({
  display: "flex",
  alignItems: "center",
});

const AvatarStyled = styled(Avatar)(({ theme }) => ({
  width: theme.spacing(4),
  height: theme.spacing(4),
  marginRight: theme.spacing(-1),
  zIndex: 1,
  boxShadow: theme.shadows[1],
}));

const MoreIconButton = styled(IconButton)(({ theme }) => ({
  marginLeft: theme.spacing(-0.5),
  backgroundColor: theme.palette.background.default,
  zIndex: 0,
}));

const AvatarGroup = () => {
  return (
    <AvatarGroupContainer>
      <AvatarStyled alt="User 1" src="/path-to-image1.jpg" />
      <AvatarStyled alt="User 2" src="/path-to-image2.jpg" />
      <AvatarStyled alt="User 3" src="/path-to-image3.jpg" />
      <Tooltip title="Expand">
        <MoreIconButton>
          <MoreHorizIcon />
        </MoreIconButton>
      </Tooltip>
    </AvatarGroupContainer>
  );
};

export default AvatarGroup;