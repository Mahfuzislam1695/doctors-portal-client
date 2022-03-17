import React from 'react';
import Grid from '@mui/material/Grid';
import chair from '../../../images/chair.png';
import bg from '../../../images/bg.png';
// import bg1 from '../../../images/appointment-bg.png';
import { Typography, Button, Container } from '@mui/material';
import Box from '@mui/material/Box';
import BannerButtom from '../BannerButtom/BannerButtom';
import { Link } from 'react-router-dom';

// const bannerBg1 = {
//     background: `url(${bg1})`,
//     backgroundColor: 'rgba(45, 58, 74, 0.9)',
//     backgroundBlendMode: 'darken, luminosity',

// }

const bannerBg = {
    background: `url(${bg})`,

}

const verticalCenter = {
    display: 'flex',
    alignItems: 'center',
    height: 800,
}

const Banner = () => {
    return (
        <>
            <Container style={bannerBg} sx={{ flexGrow: 1,marginTop: -20 }}>
                <Grid container spacing={2}>
                    <Grid item style={{ ...verticalCenter, textAlign: 'left', bannerBg }} xs={12} md={6} >
                        <Box>
                            <Typography variant="h2">
                                Your New Smile <br />
                                Starts Here
                            </Typography>
                            <Typography variant="h6" sx={{ my: 3, fontSize: 20, fontWeight: 300, color: 'gray' }}>
                                Good oral health starts with you. It's time to take care of your teeth; This is what dentistry should be. We love seeing you smile
                            </Typography>
                            <Link style={{ textDecoration: 'none' }} to="/appointment"><Button variant="contained">Get Appointment</Button></Link>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6} style={verticalCenter} >
                        <img style={{ width: '100%' }} src={chair} alt="" />
                    </Grid>

                    {/* <Container style={bannerBg} sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        <Grid item style={{ ...verticalCenter, textAlign: 'left' }} xs={12} md={6}>
                            <Box>
                                <Typography variant="h2">
                                    Your New Smile <br />
                                    Starts Here
                                </Typography>
                                <Typography variant="h6" sx={{ my: 3, fontSize: 20, fontWeight: 300, color: 'gray' }}>
                                    Good oral health starts with you. It's time to take care of your teeth; This is what dentistry should be. We love seeing you smile
                                </Typography>
                                <Link style={{ textDecoration: 'none' }} to="/appointment"><Button variant="contained">Get Appointment</Button></Link>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6} style={verticalCenter} >
                            <img style={{ width: '500px' }} src={chair} alt="" />
                        </Grid> */}

                </Grid>
            </Container>
            <BannerButtom></BannerButtom>
        </>
    );
};

export default Banner;