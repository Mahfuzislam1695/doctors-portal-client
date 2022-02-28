import React from 'react';
import { Avatar, Card, CardActionArea, CardContent, Grid, Typography } from '@mui/material';

const Testimonial = ({ item }) => {
  const { name, date, img, title, para } = item;
    return (
      <Grid item xs={12} sm={8} md={4} lg={4}>
      <Card variant="outlined">
          <CardActionArea>
              <CardContent>
                  <div style={{ display: 'flex', alignItems: 'center', marginTop: 20 }}>
                      <Avatar style={{ height: 60, width: 60, margin: '0 15px' }} src={img} />
                      <div>
                          <Typography variant="body1" color="primary">{name}</Typography>
                          <Typography variant="body1">{date}</Typography>
                      </div>
                  </div>
                  <Typography variant="h6" style={{ margin: '10px 0' }}>{title}</Typography>
                  <Typography variant="body2" color="GrayText" lineHeight={2}>
                    {para}
                  </Typography>

              </CardContent>
          </CardActionArea>
      </Card>
  </Grid>
    );
};

export default Testimonial;