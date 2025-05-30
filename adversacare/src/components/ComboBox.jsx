import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import top100Films from '../assets/top100films';

export default function ComboBox() {
  return (
    <Autocomplete
      disablePortal
      options={top100Films}
      sx={{ width: 250 }}
      renderInput={(params) => <TextField {...params} label="Drug" />}
    />
  );
}