import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import Banner from '../Banner/Banner';
import Blog from '../Blog/Blog';
import Contact from '../Contact/Contact';
import DentalServices from '../DentalServices/DentalServices';
import Doctors from '../Doctors/Doctors';
import Footer from '../Footer/Footer';


const Home = () => {
    return (
        <div id="home">
            <Navigation></Navigation>
            <Banner></Banner>
            <DentalServices></DentalServices>          
            <AppointmentBanner></AppointmentBanner>
            <Blog></Blog>
            <Doctors></Doctors>
            <Contact></Contact>
            <Footer></Footer>
       </div>
    );
};

export default Home;