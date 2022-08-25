import React from 'react';
import { Link, useParams } from 'react-router-dom';

import {
  Box,
  Stack,
  Container,
  Avatar,
  ListItemText,
  Grid,
  Button,
} from '@mui/material';

import './UserPage.scss';
import { useEffect } from 'react';
import axios from '../../axios';
import { useState } from 'react';

import { useQuery } from '../../context/queryContext';

export const UserPage = () => {
  const { user } = useParams();
  const [userDetail, setUserDetail] = useState({});
  const [repoDetail, setRepoDetail] = useState([]);
  const [orgsDetail, setOrgsDetail] = useState([]);

  useEffect(() => {
    axios
      .get(`/users/${user}`)
      .then((response) => setUserDetail(response.data));
  }, []);

  useEffect(() => {
    axios
      .get(`/users/${user}/repos`)
      .then((response) => setRepoDetail(response.data));
  }, []);

  useEffect(() => {
    axios
      .get(`/users/${user}/orgs`)
      .then((response) => setOrgsDetail(response.data));
  }, []);

  console.log(userDetail);

  return (
    <Container>
      <Link to="/">
        <Button
          sx={{
            margin: '10px 0px',
          }}
        >
          Go Back
        </Button>
      </Link>

      <Box
        sx={{
          marginTop: 2,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          flexGrow: 1,
        }}
      >
        <Avatar
          sx={{
            width: 100,
            height: 100,
          }}
          alt="user_avatar"
          src={userDetail.avatar_url}
        />

        <Stack spacing={0.5}>
          <h3>{user}</h3>
          <p>Repositories: {userDetail.public_repos}</p>
          <p>Organisations: {orgsDetail.length}</p>
        </Stack>
      </Box>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'start',
          marginTop: '10px',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <h3>Repositories</h3>
          <Grid
            container
            spacing={2}
            sx={{
              width: '60vw',
              margin: 'auto 30px',
            }}
          >
            {repoDetail.map((item) => {
              return (
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
                    justifyContent: 'center',
                    paddingLeft: 1,
                    margin: 2,
                  }}
                >
                  <ListItemText
                    primary={item.name}
                    secondary={
                      <React.Fragment>
                        <a href={item.html_url} target="_blank">
                          <Button
                            size="small"
                            sx={{
                              margin: '3px 0px',
                            }}
                            variant="outlined"
                          >
                            View
                          </Button>
                        </a>
                      </React.Fragment>
                    }
                  />
                </Grid>
              );
            })}
          </Grid>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <h3>Organisations</h3>

          {orgsDetail.length === 0 ? (
            <h4>This user has not joined any organisation</h4>
          ) : (
            <Grid
              container
              spacing={2}
              sx={{
                width: '20vw',
                margin: 'auto 50px',
              }}
            >
              {orgsDetail.map((item) => {
                return (
                  <Grid
                    item
                    xs
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
                    <ListItemText
                      primary={item.login}
                      secondary={
                        <React.Fragment>
                          {`${item.description}`.slice(0, 50)}
                        </React.Fragment>
                      }
                    />
                  </Grid>
                );
              })}
            </Grid>
          )}
        </Box>
      </Box>
    </Container>
  );
};
