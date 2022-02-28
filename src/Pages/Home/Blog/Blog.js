import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import person1 from '../../../images/people-1.png'
import person2 from '../../../images/people-2.png'
import person3 from '../../../images/people-3.png'
import Testimonial from '../Testimonial/Testimonial';

const blogsData = [
    {
        name: 'Dr. Renty',
        date: '23 April 2021',
        img: person3,
        title: 'Check at least a doctor in a year for your teeth',
        para: 'The basic rule of thumb says you should visit the dentist every six months. Studies have shown that people without any problems are ok to go once a year while those with dental issues should get checked out every 3 or 4 months.'
    },

    {
        name: 'Dr. Maxwell',
        date: '2 March 2021',
        img: person1,
        title: 'The tooth cancer is taking a challenge',
        para: 'This prognosis is significantly improved when this disease is diagnosed and treated in its early stages. Oral cancer is usually associated with classical clinical features associated with malignancy resulting in accurate diagnosis. '
    },

    {
        name: 'Dr. Mehrin',
        date: '27 April 2021',
        img: person2,
        title: 'Two time brush in a day can keep you healthy',
        para: 'Regular brushing and flossing is crucial to prevent dental issues from developing and to protect your oral health in the long-run.Brushing twice daily also improves the health of your gums so that you can avoid gum disease.'
    }
    
]


const Blog = () => {
    return (
        <section id="blog" >
            <Container sx={{ py: 5, mt: 5 }}>
                <Typography variant="h5" color="#19D3AE" textAlign="center" fontWeight={500}>OUR BLOG</Typography>
                <Typography variant="h4" sx={{ fontWeight: 500, textAlign: "center", mb: 2 }}>From Our Blog News</Typography>
                <Grid container spacing={3} sx={{ mt: 2, justifyContent: 'center' }}>
                    {
                        blogsData.map((item, i) => <Testimonial key={i} item={item} />)
                    }
                </Grid>
            </Container>
        </section>
    );
};

export default Blog;