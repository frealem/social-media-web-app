import { Typography } from '@mui/material';
import React from 'react';


const TitleTwoLine = ({ children, ...props }) => {
  return (
    <Typography
      component="div"
      style={{
        display: '-webkit-box',
        WebkitLineClamp: 2,
        WebkitBoxOrient: 'vertical',
        overflow: 'hidden',
      }}
      {...props}
    >
      {children}
    </Typography>
  );
};

export default TitleTwoLine;