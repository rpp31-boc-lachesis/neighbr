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
  Box
} from '@mui/material';
import { styled } from '@mui/material/styles';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import ConstructionIcon from '@mui/icons-material/Construction';
import CloseIcon from '@mui/icons-material/Close';
// import { createMUITheme, ThemeProvider } from '@mui/material/styles';

// const useStyles = makeStyles({
//   profileCard: {
//     width: '400px',
//     height: '550px'
//   }
// });

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
    <div className="ProfileCard" style={{ height: '530px', width: '350px' }}>
      <div className="ProfileCardHeader">
        <Grid container>
          <Grid item sm={10}>
            <DialogTitle sx={{ padding: '5px' }}>
              <Typography variant="h6" component="div" sx={{ padding: '5px' }}>
                Neighbr Profile
              </Typography>
            </DialogTitle>
          </Grid>
          <Grid item sm={2} sx={{ display: 'flex', alignContent: 'center', padding: '0px' }}>
            <Button onClick={handleClose} sx={{ color: 'primary' }}>
              <CloseIcon />
            </Button>
          </Grid>
        </Grid>
      </div>
      <DialogContent dividers sx={{ height: '180px', width: 'auto', padding: '10px' }}>
        <Grid container sx={{ maxHeight: '20%' }}>
          <Grid item sm={6} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'left' }}>
            <Avatar alt="profile image" src="https://randomuser.me/api/portraits/women/81.jpg" sx={{ height: '115px', width: '115px', backgroundColor: 'coral' }} />
            <Typography variant="h5" component="div">
              Tiffany
            </Typography>
            <Typography variant="h6" component="div" sx={{ opacity: 0.6 }}>
              San Francisco
            </Typography>
          </Grid>
          <Grid item sm={6} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <StarIcon sx={{ color: '#5E4CFF' }} />
            <StarIcon sx={{ color: '#5E4CFF' }} />
            <StarIcon sx={{ color: '#5E4CFF' }} />
            <StarHalfIcon sx={{ color: '#5E4CFF' }} />
            <StarOutlineIcon sx={{ color: '#5E4CFF' }} />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogContent dividers sx={{ padding: '10px' }}>
        <Typography sx={{ fontSize: '16px' }}>
          Hi there! I love building community and serving my fellow Neighbrs!
          See what I did there? I am always out and about, so if you have any items
          you need picked up, just holler! Thanks!
        </Typography>
      </DialogContent>
      <Grid>
        <Box item sm={10} textAlign="center">
          <Typography>
            Previous Requests
          </Typography>
          <div style={{
            height: '100px',
            width: '350px',
            overflow: 'scroll'
          }}
          >
            <Stack sx={{
              display: 'flex',
              justifyContent: 'center',
              width: '325px',
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
