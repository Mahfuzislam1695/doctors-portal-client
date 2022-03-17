import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import Service from './../Service/Service';
import fluoride from '../../../images/fluoride.png';
import cavity from '../../../images/cavity.png';
import whitening from '../../../images/whitening.png';

const services = [
    {
        name: 'Fluoride Treatment',
        description: 'Fluoride treatments are typically professional treatments containing a high concentration of fluoride that a dentist or hygienist will apply to a person teeth to improve health',
        img: fluoride
    },
    {
        name: 'Cavity Filling',
        description: 'Basically, a cavity is hole in the tooth . This is often often caused by bacteria, which builds up from eating unhealthy food and not caring for your teeth properly.',
        img: cavity
    },
    {
        name: 'Teeth Whitening',
        description: 'Teeth whitening is a simple process. Whitening products contain one of two tooth bleaches (hydrogen peroxide or carbamide peroxide)',
        img: whitening
    }
]


 const Services = () => {
     return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>
                <Typography sx={{ fontWeight: 500, marginTop: 10, color: 'success.main' }} variant="h6" component="div">
                    OUR SERVICES 
                </Typography>
                <Typography sx={{ fontWeight: 600, m: 2 }} variant="h4" component="div">
                    Services We Provide
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        services.map(service => <Service
                            key={service.name}
                            service={service}
                        ></Service>)
                    }
                </Grid>
            </Container>
        </Box>
     );
 };

 export default Services;