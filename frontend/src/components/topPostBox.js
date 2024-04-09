import React from 'react'
import FlexBetween from './Flexbetween'
import { Box, Button, IconButton, Typography, useTheme } from '@mui/material'
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';

const TopPostBox = () => {
    const theme=useTheme();
  return (
    <>
<Box
  sx={{
    backgroundColor: theme.palette.secondary[900],
    display: 'flex',
    alignItems: 'center',
    padding: '10px',
    borderRadius: 5,
    width: '90%',
    gap: '2px',
  }}
>
  <Box>
    <IconButton>
      <AddCircleOutlineOutlinedIcon sx={{ fontSize: 48, color: theme.palette.secondary[300] }} />
    </IconButton>
  </Box>
  <Box sx={{ }}>
    <Typography variant="h4" component="div" sx={{ color: theme.palette.grey[1000], fontWeight: 900 }}>
      Create Your Post
    </Typography>
    <Typography variant="body2" component="div" sx={{ color: theme.palette.grey[1000] }}>
      Share your experience and review others
    </Typography>
  </Box>
</Box>
    </>
  )
}

export default TopPostBox