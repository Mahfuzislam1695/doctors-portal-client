import React from 'react';
import { Grid, Paper, Typography } from '@mui/material';
import CallIcon from '@mui/icons-material/Call';

const Doctor = ({ doctor }) => {
    const { name, image, phone } = doctor;
    return (
        <Grid item xs={12} sm={12} md={4} lg={4}>
            <Paper elevation={0} sx={{ textAlign: 'center' }}>
                <img
                    style={{ width: '200px', height: '200px' }}
                    src={`data:image/png;base64,${image}`} alt="" />
                <Typography variant="h5" fontWeight={600}>{name}</Typography>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    {/* <CallIcon sx={{ color: "#19D3AE" }} />
                    <Typography variant="body1">{phone}</Typography> */}
                </div>
            </Paper>
        </Grid>
    );
};

export default Doctor;