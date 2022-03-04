import React from 'react';
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
import CloseIcon from '@mui/icons-material/Close';
import ProfileReqHistory from './ProfileReqHistory.jsx';
import ProfileRunHistory from './ProfileRunHistory.jsx';

export default function ProfileCard(props) {
  const { handleClose, currentUser, themeColor } = props;
  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    // textAlign: 'center',
    color: theme.palette.text.secondary
  }));
  return (
    currentUser
    && (
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
        sm={5}
        lg={12}
        // eslint-disable-next-line react/jsx-no-duplicate-props
        sx={{
          display: 'flex',
          justifyContent: 'flex-end'
        }}
      >
        <Button onClick={handleClose}>
          <CloseIcon color={themeColor} />
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
            name="User Avatar"
            src={currentUser.avatar_url ? currentUser.avatar_url : ''}
            sx={{ height: 'auto', width: '90%' }}
          />
          <Typography variant="h5" component="h5">
            {currentUser.first_name ? currentUser.first_name : ''}
          </Typography>
          <Typography variant="h6" component="h6" sx={{ opacity: 0.6 }}>
            {currentUser.city ? currentUser.city : ''}
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
            value={currentUser.sum_rating ? (currentUser.sum_rating / currentUser.rating_count) : 0}
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
        <Typography component="h6" sx={{ fontSize: '1.0rem' }}>
          {currentUser.bio ? currentUser.bio : 'Hi there! I love to help my Neighbrs pickup items when I am out running around. If you need anything, please let me know!'}
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
          {themeColor === 'secondary' ? 'Previous Runs' : 'Previous Requests'}
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
            {themeColor === 'secondary'
              ? currentUser.run_history.map((run) => (
                <Item
                  key={run._id}
                  sx={{
                    backgroundColor: '#73B4FA',
                    color: 'white',
                    width: '92%',
                    height: 'auto',
                    borderRadius: '8px'
                  }}
                >
                  <Grid
                    container
                  >
                    <Grid
                      item
                      sm={12}
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        fontSize: '125%',
                        fontWeight: 'bold',
                        borderRadius: '8px'
                      }}
                    >
                      <ProfileRunHistory history={run} />
                    </Grid>
                  </Grid>
                </Item>
              ))
              : currentUser.req_history.map((req) => (
                <Item
                  key={req._id}
                  sx={{
                    backgroundColor: '#73B4FA',
                    color: 'white',
                    width: '92%',
                    height: 'auto',
                    borderRadius: '8px'
                  }}
                >
                  <Grid
                    container
                  >
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
                      <ProfileReqHistory history={req} />
                    </Grid>
                  </Grid>
                </Item>
              ))}
          </Stack>
        </Box>
      </Grid>
    </Grid>
    )
  );
}

ProfileCard.propTypes = {
  handleClose: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  currentUser: PropTypes.object.isRequired,
  themeColor: PropTypes.string
};

ProfileCard.defaultProps = {
  themeColor: PropTypes.string
};
