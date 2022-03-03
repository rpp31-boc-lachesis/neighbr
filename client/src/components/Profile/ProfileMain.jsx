/* eslint-disable no-underscore-dangle */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Rating from '@mui/material/Rating';
import { styled } from '@mui/material/styles';
import ProfileMap from './ProfileMap.jsx';
import ProfileRunHistory from './ProfileRunHistory.jsx';
import ProfileReqHistory from './ProfileReqHistory.jsx';

function TabPanel(props) {
  const {
    children,
    value,
    index,
    ...other
  } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
      style={{ width: '100%' }}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography
            component="span"
          >
            {children}
          </Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  // eslint-disable-next-line react/require-default-props
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'left',
  width: 'auto',
  font: 'Roboto',
  color: theme.palette.text.secondary,
}));

export default function ProfileMain(props) {
  const [value, setValue] = useState(0);
  const [currentUser, setCurrentUser] = useState({});

  const { user } = props;
  // eslint-disable-next-line no-unused-vars
  // const tempUser = 'organicrabbit525';

  useEffect(() => {
    axios.get(`/users/populate/${user}`)
      .then((results) => {
        const oneUser = results.data[0];
        console.log('CURRENT USER:', oneUser);
        setCurrentUser(oneUser);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [user]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    Object.keys(currentUser).length > 0
    && (
    <Box
      sx={{
        flexGrow: 1,
        minHeight: '100vh',
        minWidth: '100vh',
        bgcolor: 'background.paper',
        display: 'flex'
      }}
    >
      <Tabs
        orientation="vertical"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{
          display: 'flex',
          borderRight: 1,
          borderColor: 'divider',
          minWidth: '15%',
          maxWidth: '17%',
          backgroundColor: '#73B4FA',
          paddingTop: '2%'
        }}
      >
        <Tab label="Profile" sx={{ fontSize: '1.2rem', color: 'white' }} {...a11yProps(0)} />
        <Tab label="Location" sx={{ fontSize: '1.2rem', color: 'white' }} {...a11yProps(1)} />
        <Tab label="Runs" sx={{ fontSize: '1.2rem', color: 'white' }} {...a11yProps(2)} />
        <Tab label="Requests" sx={{ fontSize: '1.2rem', color: 'white' }} {...a11yProps(3)} />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: 'auto'
          }}
        >
          <img alt="house in neighborhood" src="https://drive.google.com/uc?export=view&id=1N5btun98vI2V7vJoTN_mFkh32oEWUZDl" style={{ width: '100%', height: '100%' }} />
        </Box>
      </Tabs>
      <TabPanel value={value} index={0}>
        <Grid
          container
          spacing={2}
        >
          <Grid
            item
            sm={6}
            lg={3}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              minWidth: '15%',
              maxWidth: '25%'
            }}
          >
            <Avatar
              src={currentUser.avatar_url}
              sx={{
                height: 'auto',
                width: '75%'
              }}
            />
            <Typography
              color="primary"
              component="span"
              sx={{
                fontSize: '1.8rem'
              }}
            >
              {`@${currentUser.username}`}
            </Typography>
            <Typography
              component="span"
              sx={{
                opacity: 0.5
              }}
            >
              {`Member since ${currentUser.created_at ? currentUser.created_at.slice(0, 10) : null}`}
            </Typography>
            <Rating
              name="half-rating-read"
              value={
                currentUser.sum_rating ? (currentUser.sum_rating / currentUser.rating_count) : 0
              }
              precision={0.5}
              readOnly
              sx={{
                color: '#5E4CFF',
                paddingTop: '5%',
                paddingRight: '15%'
              }}
            />
          </Grid>
          <Grid
            item
            sm={7}
            lg={5}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              // alignItems: 'center',
              paddingTop: '5%'
            }}
          >
            <Stack
              spacing={1}
            >
              <Item sx={{ fontSize: '1.0rem' }}>
                <strong>Account #:</strong>
                {` ${currentUser._id}`}
              </Item>
              <Item sx={{ fontSize: '1.0rem' }}>
                <strong>First Name:</strong>
                {` ${currentUser.first_name}`}
              </Item>
              <Item sx={{ fontSize: '1.0rem' }}>
                <strong>Last Name:</strong>
                {` ${currentUser.last_name}`}
              </Item>
              <Item sx={{ fontSize: '1.0rem' }}>
                <strong>Email:</strong>
                {` ${currentUser.email}`}
              </Item>
              <Item sx={{ fontSize: '1.0rem' }}>
                <strong>Date of Birth:</strong>
                {currentUser.dob ? ` ${currentUser.dob.slice(0, 10)}` : null}
              </Item>
              <Item sx={{ fontSize: '1.0rem' }}>
                <strong>Rating:</strong>
                {currentUser.rating_count ? ` ${currentUser.sum_rating / currentUser.rating_count}` : ` ${0}`}
              </Item>
              <Item sx={{ fontSize: '1.0rem' }}>
                <strong>Bio:</strong>
                {currentUser.bio ? ` ${currentUser.bio}` : ''}
              </Item>
            </Stack>
          </Grid>
          <Grid
            item
            sm={6}
            lg={4}
            sx={{
              alignItems: 'right',
              minWidth: '15%',
              maxWidth: '40%',
              height: 'auto'
            }}
          >
            <img alt="neighbrs running" src="https://drive.google.com/uc?export=view&id=1kkKcSb1nXsnBaBPYV83IwauRRhqGaonu" />
          </Grid>
        </Grid>
        <Grid>
          <img alt="illustration of clouds" src="https://drive.google.com/uc?export=view&id=1VLWnSpPvlecNhF81Sp8NKSX5iomOpnAy" style={{ width: '50%', height: 'auto' }} />
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Grid
          container
          spacing={2}
        >
          <Grid
            item
            sm={3}
            lg={3}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'left',
              minWidth: '15%',
              maxWidth: '25%'
            }}
          >
            <Typography
              component="span"
              color="primary"
              sx={{
                fontSize: '1.8rem'
              }}
            >
              My address:
            </Typography>
            <Stack spacing={1}>
              <Item
                sx={{
                  fontSize: '1.2rem'
                }}
              >
                {currentUser.street_address}
                <br />
                {`${currentUser.city}, ${currentUser.state} ${currentUser.zip}`}
              </Item>
            </Stack>
          </Grid>
          <Grid
            item
            sm={7}
            lg={5}
            sx={{
              display: 'flex',
              alignItems: 'center',
              paddingTop: '5%',
              paddingLeft: '2%'
            }}
          >
            <ProfileMap
              coordinates={{
                lat: currentUser.coordinates ? currentUser.coordinates.lat : '',
                long: currentUser.coordinates ? currentUser.coordinates.long : ''
              }}
            />
          </Grid>
          <Grid
            item
            sm={4}
            sx={{
              alignItems: 'right',
              minWidth: '15%',
              maxWidth: '40%',
              height: 'auto'
            }}
          >
            <img alt="person shopping on phone" src="https://drive.google.com/uc?export=view&id=1pi1xoToPs-XtlMIdmXcMAiQa93m-3SoB" />
          </Grid>
        </Grid>
        <Grid>
          <img alt="illustration of clouds" src="https://drive.google.com/uc?export=view&id=1VLWnSpPvlecNhF81Sp8NKSX5iomOpnAy" style={{ width: '50%', height: 'auto' }} />
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Grid
          container
          spacing={2}
        >
          <Grid
            item
            sm={5}
            lg={3}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              // justifyContent: 'center',
              alignItems: 'left',
            }}
          >
            <Typography
              component="span"
              color="primary"
              sx={{
                fontSize: '1.8rem'
              }}
            >
              My Run History:
            </Typography>
            <Stack spacing={1}>
              <Item sx={{ fontSize: '1.2rem' }}>
                Most Recent Category:
                {' '}
                {
                currentUser.run_history[currentUser.run_history.length - 1].location.category
                }
              </Item>
              <Item sx={{ fontSize: '1.2rem' }}>
                Most Recent Run Time:
                {' '}
                {
                (Number(currentUser.run_history[currentUser.run_history.length - 1]
                  .endTime.slice(11, 13))
                - Number(currentUser.run_history[currentUser.run_history.length - 1]
                  .startTime.slice(11, 13)))
                * 60
                }
                {' '}
                mins
              </Item>
              <Item sx={{ fontSize: '1.2rem' }}>
                Most Recent Neighborhood:
                {' '}
                {
                currentUser.run_history[currentUser.run_history.length - 1].location.neighborhood
                }
              </Item>
              <Item sx={{ fontSize: '1.2rem' }}>
                Total Runs:
                {' '}
                {currentUser.run_history.length}
              </Item>
            </Stack>
          </Grid>
          <Grid
            item
            sm={7}
            lg={5}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              // justifyContent: 'center',
              paddingTop: '5%',
              paddingLeft: '2%',
              height: '600px'
            }}
          >
            <Stack
              spacing={2}
              sx={{
                width: '90%',
                height: '72%',
                overflow: 'scroll'
              }}
            >
              {currentUser.run_history.map((run) => (
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
                        justifyContent: 'center',
                        flexDirection: 'column',
                        alignItems: 'center',
                        fontSize: '125%',
                        fontWeight: 'bold'
                      }}
                    >
                      <ProfileRunHistory history={run} />
                    </Grid>
                  </Grid>
                </Item>
              ))}
            </Stack>
          </Grid>
          <Grid
            item
            sm={4}
            sx={{
              // alignItems: 'right',
              width: '33%',
              height: 'auto'
            }}
          >
            <img alt="handbag on digital screen" src="https://drive.google.com/uc?export=view&id=16KBYVdQ8dskg6YngwBP7iX9XQT7s6120" />
          </Grid>
        </Grid>
        <Grid>
          <img alt="illustration of clouds" src="https://drive.google.com/uc?export=view&id=1VLWnSpPvlecNhF81Sp8NKSX5iomOpnAy" style={{ width: '50%', height: 'auto' }} />
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Grid
          container
          spacing={2}
        >
          <Grid
            item
            sm={5}
            lg={3}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              // justifyContent: 'center',
              alignItems: 'left',
            }}
          >
            <Typography
              component="span"
              color="primary"
              sx={{
                fontSize: '1.8rem'
              }}
            >
              My Request History:
            </Typography>
            <Stack spacing={1}>
              <Item sx={{ fontSize: '1.2rem' }}>
                Most Recent Category:
                {' '}
                {
                currentUser.req_history[currentUser.req_history.length - 1]
                  .pickup.locationId.category
                }
              </Item>
              <Item sx={{ fontSize: '1.2rem' }}>
                Most Recent Request Time:
                {' '}
                {
                (Number(currentUser.req_history[currentUser.req_history.length - 1]
                  .end_time.slice(11, 13))
                - Number(currentUser.req_history[currentUser.req_history.length - 1]
                  .start_time.slice(11, 13)))
                * 60
                }
                {' '}
                mins
              </Item>
              <Item sx={{ fontSize: '1.2rem' }}>
                Most Recent Neighborhood:
                {' '}
                {
                currentUser.req_history[currentUser.req_history.length - 1]
                  .pickup.locationId.neighborhood
                }
              </Item>
              <Item sx={{ fontSize: '1.2rem' }}>
                Total Requests:
                {' '}
                {currentUser.req_history.length}
              </Item>
            </Stack>
          </Grid>
          <Grid
            item
            sm={7}
            lg={5}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              // justifyContent: 'center',
              paddingTop: '5%',
              paddingLeft: '2%',
              height: '600px'
            }}
          >
            <Stack
              spacing={2}
              sx={{
                width: '90%',
                height: '72%',
                overflow: 'scroll'
              }}
            >
              {currentUser.req_history.map((req) => (
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
                        justifyContent: 'center',
                        flexDirection: 'column',
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
          </Grid>
          <Grid
            item
            sm={4}
            sx={{
              // alignItems: 'right',
              width: '33%',
              height: 'auto'
            }}
          >
            <img alt="package on digital screen" src="https://drive.google.com/uc?export=view&id=1UUHGQ_IUl6brPzZoSRiWEAPfSMThATGR" />
          </Grid>
        </Grid>
        <Grid>
          <img alt="illustration of clouds" src="https://drive.google.com/uc?export=view&id=1VLWnSpPvlecNhF81Sp8NKSX5iomOpnAy" style={{ width: '50%', height: 'auto' }} />
        </Grid>
      </TabPanel>
    </Box>
    )
  );
}

ProfileMain.propTypes = {
  user: PropTypes.string
};

ProfileMain.defaultProps = {
  user: ''
};
