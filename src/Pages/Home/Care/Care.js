import { Container, Grid, Typography, Button } from '@mui/material';
import React from 'react';
import treatmentImg from '../../../images/treatment.png'

const About = () => {
    return (
        <Container id="about" sx={{ pt: 5 }}>
            <Grid container spacing={3} alignItems="center">
                <Grid item xs={12} sm={12} md={5} lg={5}>
                    <img src={treatmentImg} alt="" width="100%" />
                </Grid>
                <Grid item xs={12} sm={12} md={7} lg={7}>
                    <Typography variant="h3" fontWeight={500}>Exponetional Dental Care, on your Term</Typography>
                    <Typography variant="body1" style={{ margin: '20px 0', lineHeight: 2.2 }}>
                    At Exceptional Dental, your smile is our top priority. We are dedicated to providing you with the personalized and gentle care that you deserve. When you visit our office, you can expect all that modern dentistry has to offer, including a comprehensive list of general, restorative and cosmetic dental services to meet the needs of the whole family. Our goal is to assist each patient in achieving and maintaining long-term dental health and a beautiful smile
                    </Typography>
                    <Button variant="contained">Learn More</Button>
                </Grid>
            </Grid>
        </Container>
    );
};

export default About;