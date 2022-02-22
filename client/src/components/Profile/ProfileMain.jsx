/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'left',
  width: '400px',
  font: 'Roboto',
  color: theme.palette.text.secondary,
}));

export function BasicStack() {
  return (
    <div>
      <Stack spacing={1}>
        <Item>First Name:</Item>
        <Item>Last Name</Item>
        <Item>Email:</Item>
        <Item>Date of Birth:</Item>
        <Item>Rating:</Item>
        <Item>Bio:</Item>
      </Stack>
    </div>
  );
}

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
          <Typography variant="h4">{children}</Typography>
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

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Grid
      sx={{
        minHeight: '100vh',
        minWidth: '100vh',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          flexGrow: 1,
          bgcolor: 'background.paper',
          display: 'flex',
          height: '700px',
          width: '900px',
          border: '2px solid red'
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
            width: '250px',
            backgroundColor: '#88C4FB',
            paddingTop: '30px'
          }}
        >
          <img alt="house in neighborhood" src="https://drive.google.com/uc?export=view&id=1N5btun98vI2V7vJoTN_mFkh32oEWUZDl" style={{ width: '200px' }} />
          <Tab label="Profile" sx={{ fontSize: '1.2rem', color: 'white' }} {...a11yProps(0)} />
          <Tab label="Location" sx={{ fontSize: '1.2rem', color: 'white' }} {...a11yProps(1)} />
          <Tab label="Runs" sx={{ fontSize: '1.2rem', color: 'white' }} {...a11yProps(2)} />
          <Tab label="Requests" sx={{ fontSize: '1.2rem', color: 'white' }} {...a11yProps(3)} />
        </Tabs>
        <TabPanel value={value} index={1} sx={{ width: '300px' }}>
          <Grid
            container
          >
            <Grid
              item
              sm={3}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Avatar sx={{ height: '150px', width: '150px' }} />
              <Typography variant="h4" color="primary">
                @username
              </Typography>
              <Typography
                sx={{
                  fontSize: '50%',
                  opacity: 0.5
                }}
              >
                Member since 02-15-2022
              </Typography>
            </Grid>
            <Grid
              item
              sm={9}
              sx={{
                display: 'flex',
                alignItems: 'center',
                fontSize: '75%',
                paddingTop: '30px',
                paddingLeft: '25px'
              }}
            >
              <BasicStack />
              <Grid
                item
                sx={{
                  // backgroundImage: 'url(https://i.ibb.co/ZmMGMGq/Screen-Shot-2022-02-11-at-12-43-26-PM.png)',
                  // backgroundRepeat: 'no-repeat',
                  // backgroundSize: 'cover',
                  // backgroundPosition: 'center',
                  // width: '100vh',
                  // height: '100vh'
                }}
              >
                <img alt="neighbrs running" src="https://drive.google.com/uc?export=view&id=1kkKcSb1nXsnBaBPYV83IwauRRhqGaonu" />
              </Grid>
            </Grid>
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={2}>
          Location
        </TabPanel>
        <TabPanel value={value} index={3}>
          Runs
        </TabPanel>
        <TabPanel value={value} index={4}>
          Requests
        </TabPanel>
      </Box>
    </Grid>
  );
}
