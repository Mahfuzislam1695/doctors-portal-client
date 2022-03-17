import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link, NavLink } from 'react-router-dom';
import useAuth from './../../../hooks/useAuth';
import { HashLink } from 'react-router-hash-link';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Navigation = () => {
    const { user, logout } = useAuth();
    return (
        // <Box sx={{ flexGrow: 1 }}>
        //     <AppBar position="fixed">
        //         <Toolbar>
        //             <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        //                 Doctors Portal
        //             </Typography>
        //             <Link as={HashLink} style={{ textDecoration: 'none', color: 'white' }} to="/home#blog">Blog</Link>
        //             <Box>
        //                 <Link as={HashLink} style={{ textDecoration: 'none', color: 'white' }} to="/home#home">Home</Link>
        //             </Box>
        //             <Box>
        //                 <Link as={HashLink} style={{ textDecoration: 'none', color: 'white' }} to="/home#blog"><Button color="inherit">Blog</Button></Link>
        //             </Box>
        //             <Box>
        //                 <Link as={HashLink} style={{ textDecoration: 'none', color: 'white' }} to="/home#services"><Button color="inherit">Service</Button></Link>
        //             </Box>
        //             <Box>
        //                 <Link style={{ textDecoration: 'none', color: 'white' }} to="/appointment"><Button color="inherit">Appointment</Button></Link>
        //             </Box>

                //     {
                //         user?.email ?
                //             <Box>
                //                 <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/dashboard">
                //                     <Button color="inherit">Dashboard</Button>
                //                 </NavLink>
                //                 <Button onClick={logout} color="inherit">Logout</Button>
                //             </Box>
                //             :
                //             <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/login">
                //                 <Button color="inherit">Login</Button>
                //             </NavLink>
                //     }
                // </Toolbar>
        //     </AppBar>
        // </Box>

        <>
             <Navbar bg="primary" className='text-white' variant="dark" sticky="top" collapseOnSelect expand="lg" >
                <Container>
                <Typography variant="h6">
                        Doctors Portal
                   </Typography>
                    {/* <Navbar.Brand color="inherit" href="#home">Doctor Portal</Navbar.Brand> */}
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        
                        <Nav.Link as={HashLink} to="/home#home"><Button className='text-white'>Home</Button></Nav.Link>
                        <Nav.Link as={HashLink} to="/home#service"><Button className='text-white'>Service</Button></Nav.Link>
                        <Nav.Link as={HashLink} to="/home#blog"><Button className='text-white'>Blog</Button></Nav.Link>
                        <Nav.Link as={HashLink} to="/home#contact"><Button className='text-white'>Contact</Button></Nav.Link>
                        <Box>
                        <Link style={{ textDecoration: 'none', color: 'white' }} to="/appointment"><Button color="inherit">Appointment</Button></Link>
                    </Box>    
                        
                       {
                       user?.email ?
                           <Box>
                               <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/dashboard">
                                   <Button color="inherit">Dashboard</Button>
                               </NavLink>
                               <Button onClick={logout} color="inherit">Logout</Button>
                           </Box>
                           :
                           <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/login">
                               <Button color="inherit">Login</Button>
                           </NavLink>
                        
                        }           
                        
                        
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Navigation;