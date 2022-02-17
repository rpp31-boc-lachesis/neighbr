import React from 'react';
import PropTypes from 'prop-types';
import {
  DialogContent,
  DialogTitle,
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

export default function ProfileCard(props) {
  const { handleClose } = props;
  // const classes = useStyles();
  return (
    <div className="ProfileCard" style={{ height: '530px', width: '325px' }}>
      <div className="ProfileCardHeader">
        <Grid container sx={{ height: '30px' }}>
          <Grid item sm={10}>
            <DialogTitle sx={{ padding: '5px' }}>
              {/* <Typography variant="h6" component="div" sx={{ padding: '5px' }}>
                Neighbr Profile
              </Typography> */}
            </DialogTitle>
          </Grid>
          <Grid item sm={2} sx={{ display: 'flex', alignContent: 'center', padding: '0px' }}>
            <Button onClick={handleClose} sx={{ color: 'primary' }}>
              <CloseIcon />
            </Button>
          </Grid>
        </Grid>
      </div>
      <DialogContent
        sx={{
          height: '200px',
          width: 'auto',
          padding: '8px'
        }}
      >
        <Grid
          container
          sx={{
            maxHeight: '20%'
          }}
        >
          <Grid
            item
            sm={7}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
          >
            <Avatar
              alt="profile image"
              src="https://randomuser.me/api/portraits/women/81.jpg"
              sx={{ height: '142px', width: '142px' }}
            />
            <Typography variant="h5" component="div">
              Tiffany
            </Typography>
            <Typography variant="h6" component="div" sx={{ opacity: 0.6 }}>
              San Francisco
            </Typography>
          </Grid>
          <Grid item sm={5} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Rating
              name="half-rating-read"
              value={3.5}
              precision={0.5}
              readOnly
              sx={{
                color: '#5E4CFF',
                paddingTop: '10px',
                paddingRight: '8px'
              }}
            />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogContent sx={{ padding: '10px' }}>
        <Typography sx={{ fontSize: '16px' }}>
          Hi there! I love building community and serving my fellow Neighbrs!
          See what I did there? I am always out and about, so if you have any items
          you need picked up, just holler! Thanks!
        </Typography>
      </DialogContent>
      <Grid>
        <Box item sm={10} textAlign="center">
          <Typography variant="h6">
            Previous Requests
          </Typography>
          <div style={{
            height: '100px',
            width: '325px',
            overflow: 'scroll'
          }}
          >
            <Stack sx={{
              display: 'flex',
              justifyContent: 'center',
              width: '300px',
              padding: '10px',
              gap: '5px'
            }}
            >
              <Item sx={{
                border: '2px solid #B23CDB',
                backgroundColor: '#C85CDB',
                color: 'white',
                height: '65px',
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
                height: '65px',
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
          </div>
        </Box>
      </Grid>
    </div>
  );
}

ProfileCard.propTypes = {
  handleClose: PropTypes.func.isRequired
};
