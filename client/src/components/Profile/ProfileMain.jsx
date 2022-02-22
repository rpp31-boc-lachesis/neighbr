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
  width: 'auto',
  font: 'Roboto',
  color: theme.palette.text.secondary,
}));

export function BasicStack() {
  return (
    <div>
      <Stack
        spacing={1}
      >
        <Item>
          <strong>First Name:</strong>
          {' Some'}
        </Item>
        <Item>
          <strong>Last Name:</strong>
          {' RandomUser'}
        </Item>
        <Item>
          <strong>Email:</strong>
          {' random@test.com'}
        </Item>
        <Item>
          <strong>Date of Birth:</strong>
          {' 05-16-1990'}
        </Item>
        <Item>
          <strong>Rating:</strong>
          {' 4.5'}
        </Item>
        <Item>
          <strong>Bio:</strong>
          {" What's up everyone?! I'm always out running around so please let me know what I can pick up for you."}
        </Item>
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
          <Typography>{children}</Typography>
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
    <Box
      sx={{
        flexGrow: 1,
        minHeight: '100vh',
        minWidth: '100vh',
        bgcolor: 'background.paper',
        display: 'flex',
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
          width: '15%',
          backgroundColor: '#88C4FB',
          paddingTop: '2%'
        }}
      >
        <Grid
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: 'auto'
          }}
        >
          <img alt="house in neighborhood" src="https://drive.google.com/uc?export=view&id=1N5btun98vI2V7vJoTN_mFkh32oEWUZDl" style={{ width: '100%', height: '100%' }} />
        </Grid>
        <Tab label="Profile" sx={{ fontSize: '1.2rem', color: 'white' }} {...a11yProps(0)} />
        <Tab label="Location" sx={{ fontSize: '1.2rem', color: 'white' }} {...a11yProps(1)} />
        <Tab label="Runs" sx={{ fontSize: '1.2rem', color: 'white' }} {...a11yProps(2)} />
        <Tab label="Requests" sx={{ fontSize: '1.2rem', color: 'white' }} {...a11yProps(3)} />
      </Tabs>
      <TabPanel value={value} index={0}>
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
            <Avatar
              src="https://randomuser.me/api/portraits/men/52.jpg"
              sx={{
                height: '75%',
                width: '75%'
              }}
            />
            <Typography variant="h4" color="primary">
              @username
            </Typography>
            <Typography
              sx={{
                opacity: 0.5
              }}
            >
              Member since 02-15-2022
            </Typography>
          </Grid>
          <Grid
            item
            sm={5}
            sx={{
              display: 'flex',
              alignItems: 'center',
              paddingTop: '5%',
              paddingLeft: '2%'
            }}
          >
            <BasicStack />
          </Grid>
          <Grid
            item
            sm={4}
            sx={{
              alignItems: 'right',
              width: '33%'
            }}
          >
            <img alt="neighbrs running" src="https://drive.google.com/uc?export=view&id=1kkKcSb1nXsnBaBPYV83IwauRRhqGaonu" />
          </Grid>
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={1}>
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
            Info
          </Grid>
          <Grid
            item
            sm={5}
            sx={{
              display: 'flex',
              alignItems: 'center',
              paddingTop: '5%',
              paddingLeft: '2%'
            }}
          >
            <BasicStack />
          </Grid>
          <Grid
            item
            sm={4}
            sx={{
              alignItems: 'right',
              width: '33%'
            }}
          >
            <img alt="neighbrs running" src="https://drive.google.com/uc?export=view&id=1pi1xoToPs-XtlMIdmXcMAiQa93m-3SoB" />
          </Grid>
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={2}>
        Runs
      </TabPanel>
      <TabPanel value={value} index={3}>
        Requests
      </TabPanel>
    </Box>
  );
}
