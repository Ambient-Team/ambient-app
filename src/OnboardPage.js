import Logo from './Logo_White-03.svg'; 
import * as React from 'react';
import Box from '@mui/material/Box';
<<<<<<< HEAD
=======
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom'
>>>>>>> master

export default function OnboardPage() {

    return (
<<<<<<< HEAD
        <Box sx={{ display: 'flex', height: '100%' }}>
            <img id="backgroundImg" src={Logo} alt="Logo" width="100%" height="75%"/>
=======
        <Box sx={{ height: '50%' }}>
            <Box sx={{ ml: 50 }}>
                <img id="backgroundImg" src={Logo} alt="Logo" width="50%" height="25%"/>
            </Box>
            <Box>
                <Button href="/SignIn" variant="contained" color="primary" sx={{ ml: 72 }} position="absolute">
                    Sign In Here
                </Button>
            </Box>
>>>>>>> master
        </Box>
    );
}