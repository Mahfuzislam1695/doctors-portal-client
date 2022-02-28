import React from 'react';
import Grid from '@mui/material/Grid';
import { Container, Paper, Typography } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import WifiCalling3Icon from '@mui/icons-material/WifiCalling3';
import { Box } from '@mui/system';

export const infoData = [
    {
        title: 'Opening Hours ',
        description: 'We are open 7 Days 24 Hours',
        Icon: AccessTimeIcon,
        background: '#1CC7C1'
    },
    {
        title: 'Visit Our Location',
        description: 'Dhaka,Bangladesh (1972-2014)',
        Icon: LocationOnIcon,
        background: '#3A4256'
    },
    {
        title: 'Call us now',
        description: '24 Hours +8801750256844',
        Icon: WifiCalling3Icon,
        background: '#1CC7C1'
    }
];

const BannerButtom = () => {
    return (

      <Container style={{marginTop:-75}}>
      <Grid container spacing={3}>
        {
          infoData.map(({ Icon, title, description, background }) => <Grid key={title} item xs={12} sm={12} md={4} lg={4}>
            <Paper variant="outlined" sx={{ display: 'flex', justifyContent: 'space-between', background: background, color: '#fff', p: 3 }}>
              <Icon sx={{ fontSize: 60 }} />
              <div>
                <Typography variant="body1">{title}</Typography>
                <Typography variant="subtitle1">{description}</Typography>
              </div>
            </Paper>
          </Grid>)
        }
      </Grid>
    </Container>
      
     );
 };

export default BannerButtom;