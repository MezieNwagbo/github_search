import React, { useState } from 'react';

import { Box, TextField, InputAdornment, Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

import { useQuery } from '../context/queryContext';

const SearchBar = () => {
  const queryData = useQuery();

  return (
    <Box
      sx={{
        width: '100vw',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <TextField
        sx={{
          width: '40%',
        }}
        size="small"
        placeholder="Search user..."
        value={queryData.query}
        onChange={(e) => queryData.handleQueryInput(e)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        onKeyUp={(e) => {
          if (e.code === 'Enter') {
            queryData.handleSearchUsers(e);
            queryData.setQuery('');
          }
        }}
      />
      <Button
        sx={{
          backgroundColor: '#616161',
          borderTopLeftRadius: '0',
          borderBottomLeftRadius: '0',
        }}
        variant="contained"
        onClick={(e) => {
          queryData.handleSearchUsers(e);
          queryData.setQuery('');
        }}
      >
        Search
      </Button>
    </Box>
  );
};

export default SearchBar;
