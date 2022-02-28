import React, { useEffect, useState } from 'react';
import { Container, Grid, Typography } from '@mui/material';
import Doctor from '../Doctor/Doctor';

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        fetch('https://arcane-fortress-62120.herokuapp.com/doctors')
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, [])

    return (
        <div>
             <Typography variant="h5" color="#19D3AE" sx={{ textAlign: "center", mt: 8, fontWeight: 500 }}>OUR DOCTORS: {doctors.length}</Typography>
            <Container>
                <Grid container spacing={2}>
                    {
                        doctors.map(doctor => <Doctor
                            key={doctor._id}
                            doctor={doctor}
                        ></Doctor>)
                    }
                </Grid>
            </Container>
        </div>
    );
};

export default Doctors;