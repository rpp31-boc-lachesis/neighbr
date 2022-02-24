import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import {
  DialogContent,
  Typography,
  Button,
  Grid,
  Avatar,
  Paper,
  Stack,
  Box,
  Rating
} from '@mui/material';
import { styled } from '@mui/material/styles';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import ConstructionIcon from '@mui/icons-material/Construction';
import CloseIcon from '@mui/icons-material/Close';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  // textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function ProfileCard({ handleClose, user }) {
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    axios.get(`/users/${user}`)
      .then((results) => {
        const oneUser = results.data[0];
        console.log(oneUser);
        setCurrentUser(oneUser);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [user]);

  return (
    <Grid
      container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: 'auto'
      }}
    >
      <Grid
        item
        sx={5}
        lg={12}
        // eslint-disable-next-line react/jsx-no-duplicate-props
        sx={{
          display: 'flex',
          justifyContent: 'flex-end'
        }}
      >
        <Button onClick={handleClose} sx={{ color: 'primary' }}>
          <CloseIcon />
        </Button>
      </Grid>
      <Grid
        container
      >
        <Grid
          item
          sm={8}
          lg={7}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            paddingLeft: '5%'
          }}
        >
          <Avatar
            alt="profile image"
            src={currentUser.avatar_url}
            sx={{ height: 'auto', width: '90%' }}
          />
          <Typography variant="h5" component="div">
            {currentUser.first_name}
          </Typography>
          <Typography variant="h6" component="div" sx={{ opacity: 0.6 }}>
            {currentUser.city}
          </Typography>
        </Grid>
        <Grid
          item
          sm={4}
          lg={5}
          sx={{
            display: 'flex',
            justifyContent: 'flex-end'
          }}
        >
          <Rating
            name="half-rating-read"
            value={(currentUser.sum_rating / currentUser.rating_count)}
            precision={0.5}
            readOnly
            sx={{
              color: '#5E4CFF',
              paddingTop: '5%',
              paddingRight: '15%'
            }}
          />
        </Grid>
      </Grid>
      <DialogContent sx={{ padding: '5%' }}>
        <Typography sx={{ fontSize: '1.0rem' }}>
          {/* {currentUser.bio} */}
          Hi there! I love building community and serving my fellow Neighbrs!
          See what I did there? I am always out and about, so if you have any items
          you need picked up, just holler! Thanks!
        </Typography>
      </DialogContent>
      <Grid
        item
        sm={12}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: 'auto'
        }}
      >
        <Typography
          variant="h6"
        >
          Previous Requests
        </Typography>
        <Box sx={{
          height: '135px',
          width: '325px',
          overflow: 'scroll'
        }}
        >
          <Stack sx={{
            display: 'flex',
            justifyContent: 'center',
            width: '300px',
            padding: '10px',
            gap: '7px'
          }}
          >
            <Item sx={{
              border: '2px solid #B23CDB',
              backgroundColor: '#C85CDB',
              color: 'white',
              width: '92%',
              height: 'auto',
              borderRadius: '8px'
            }}
            >
              <Grid container>
                <Grid
                  item
                  sm={12}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    fontSize: '125%',
                    fontWeight: 'bold'
                  }}
                >
                  <RestaurantIcon sx={{ margin: '2px' }} />
                  Coffee
                </Grid>
                <Grid sx={{ padding: '5px' }}>
                  Size: small | Weight: light | Destination: San Francisco
                  | Distance: 2.4mi | Est. Time: 24min
                </Grid>
              </Grid>
            </Item>
            <Item sx={{
              border: '2px solid #B23CDB',
              backgroundColor: '#C85CDB',
              color: 'white',
              width: '92%',
              height: 'auto',
              borderRadius: '8px'
            }}
            >
              <Grid container>
                <Grid
                  item
                  sm={12}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    fontSize: '125%',
                    fontWeight: 'bold'
                  }}
                >
                  <ConstructionIcon sx={{ padding: '2px' }} />
                  Paint
                </Grid>
                <Grid sx={{ padding: '5px' }}>
                  Size: medium | Weight: medium | Destination: San Francisco
                  | Distance: 1.9mi | Est. Time: 34min
                </Grid>
              </Grid>
            </Item>
            <Item sx={{
              border: '2px solid #B23CDB',
              backgroundColor: '#C85CDB',
              color: 'white',
              width: '92%',
              height: 'auto',
              borderRadius: '8px'
            }}
            >
              <Grid container>
                <Grid
                  item
                  sm={12}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    fontSize: '125%',
                    fontWeight: 'bold'
                  }}
                >
                  <ConstructionIcon sx={{ padding: '2px' }} />
                  Paint
                </Grid>
                <Grid sx={{ padding: '5px' }}>
                  Size: medium | Weight: medium | Destination: San Francisco
                  | Distance: 1.9mi | Est. Time: 34min
                </Grid>
              </Grid>
            </Item>
          </Stack>
        </Box>
      </Grid>
    </Grid>
  );
}

ProfileCard.propTypes = {
  handleClose: PropTypes.func.isRequired,
  user: PropTypes.string.isRequired
};
