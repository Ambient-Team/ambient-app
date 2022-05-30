import Logo from './Logo_White-03.svg'; 
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom'

export default function OnboardPage() {

    return (
        <Box sx={{ height: '50%' }}>
            <Box sx={{ ml: 50 }}>
                <img id="backgroundImg" src={Logo} alt="Logo" width="50%" height="25%"/>
            </Box>
            <Box>
                <Button href="/SignIn" variant="contained" color="primary" sx={{ ml: 72 }} position="absolute">
                    Sign In Here
                </Button>
            </Box>
        </Box>
    );
}