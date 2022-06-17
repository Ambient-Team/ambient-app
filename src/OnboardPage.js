import Logo from './pics/Logo_White-03.svg'; 
import * as React from 'react';
import Box from '@mui/material/Box';

export default function OnboardPage() {

    return (
        <Box sx={{ display: 'flex', height: '100%' }}>
            <img id="backgroundImg" src={Logo} alt="Logo" width="100%" height="75%"/>
        </Box>
    );
}