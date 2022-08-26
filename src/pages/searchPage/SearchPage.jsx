import React from 'react';

import { Box, Container } from '@mui/material';

import SearchBar from '../../components/SearchBar';
import SearchItem from '../../components/SearchItem';

import './SearchPage.scss';

const SearchPage = () => {
  return (
    <Box
      sx={{
        width: '100vw',
        height: '100vh',
        backgroundColor: '#D9D9D9',
      }}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <h1 className="title">Github User Search</h1>
        <SearchBar />
        <SearchItem />
      </Container>
    </Box>
  );
};

export default SearchPage;
