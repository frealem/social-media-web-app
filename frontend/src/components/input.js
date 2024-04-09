import React from 'react';
import { TextField } from '@mui/material';
import { useController } from 'react-hook-form';
import { styled } from '@mui/system';

const StyledInput = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    borderRadius: theme.spacing(5),
  
    '& fieldset': {
      borderColor:theme.palette.secondary[300],
      borderWidth: 2,
      
    },
    '&:hover fieldset': {
      borderColor:theme.palette.secondary[500],
    },
    '&.Mui-focused fieldset': {
      borderColor:theme.palette.secondary[500],
      color:theme.palette.secondary[300]
    },
  },
  '& .MuiFormHelperText-root': {
    color: theme.palette.error.main,
  },
}));

const StyledInputWithValidation = ({ control, name, placeholder, rules, ...rest }) => {
  const {
    field,
    fieldState: { error },
  } = useController({
    name,
    control,
    rules,
    defaultValue: '',
  });

  return (
    <StyledInput
      {...field}
      {...rest}
      placeholder={placeholder}
      variant="outlined"
      error={!!error}
      helperText={error ? error.message : ''}
    />
  );
};

export default StyledInputWithValidation;