import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from '@mui/system';
import Button from '@mui/material/Button';
import { ListItemAvatar, ListItemText, Avatar, Grid } from '@mui/material';
import { useQuery } from '../context/queryContext';

import './SearchItem.scss';

const SearchItem = () => {
  const queryData = useQuery();

  if (queryData.loading) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        style={{
          margin: '30px 0',
          display: 'block',
          shapeRendering: 'auto',
        }}
        width="80px"
        height="80px"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
      >
        <circle
          cx="50"
          cy="50"
          fill="none"
          stroke="#565656"
          strokeWidth="10"
          r="35"
          strokeDasharray="164.93361431346415 56.97787143782138"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            repeatCount="indefinite"
            dur="1s"
            values="0 50 50;360 50 50"
            keyTimes="0;1"
          ></animateTransform>
        </circle>
      </svg>
    );
  } else {
    return (
      <Container sx={{ marginTop: 7 }}>
        <Grid
          container
          spacing={2}
          sx={{ display: 'flex', justifyContent: 'center' }}
        >
          {queryData.users.map((item, index) => {
            return (
              <Link to={item.login} key={item.id}>
                <Grid
                  item
                  xs={6}
                  md={4}
                  lg={3}
                  sx={{
                    bgcolor: 'white',
                    borderRadius: 3,
                    minWidth: '250px',
                    display: 'flex',
                    alignItems: 'center',
                    paddingLeft: 1,
                    margin: 2,
                  }}
                >
                  <ListItemAvatar>
                    <Avatar alt="user_avatar" src={item.avatar_url} />
                  </ListItemAvatar>
                  <ListItemText
                    primary={item.login}
                    secondary={
                      <Button
                        sx={{
                          margin: '7px 0px',
                        }}
                        variant="outlined"
                      >
                        Details...
                      </Button>
                    }
                  />
                </Grid>
              </Link>
            );
          })}
        </Grid>
      </Container>
    );
  }
};

export default SearchItem;
