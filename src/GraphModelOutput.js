import { styled } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import { sixthListItems } from './listItems';

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
      '& .MuiDrawer-paper': {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
        boxSizing: 'border-box',
        ...(!open && {
          overflowX: 'hidden',
          transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
          width: theme.spacing(7),
          [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9),
          },
        }),
      },
    }),
  );

const drawerWidth = 220;

export default function OutputPage() {
    const [open, setOpen] = React.useState(false);
    const toggleDrawer = () => {
        setOpen(!open);
    };

    return (
        <Box sx={{ display: 'flex', height: '100%' }}>
            <Drawer variant="permanent" open={open} sx={{ height: 1000 }}>
                <Toolbar
                    sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    px: [1],
                    height: 66,
                    }}
                >
                    <IconButton onClick={toggleDrawer} sx={{ mr: 1 }}>
                    {open ?<KeyboardDoubleArrowLeftIcon /> : <KeyboardDoubleArrowRightIcon />}
                    {/* <KeyboardDoubleArrowLeftIcon /> */}
                    </IconButton>
                </Toolbar>
                <Divider />
                <List component="nav">
                    {sixthListItems}
                </List>
            </Drawer>
            <Box>
                <Box sx={{ width: '100%' }}>
                    <Typography
                        component="h1"
                        variant="subtitle1"
                        color="inherit"
                        noWrap
                        sx={{ flexGrow: 1, mt: 3, ml: 8 }}
                        >
                        Ambient / Output / Graph Model
                    </Typography>
                    <Typography
                        component="h1"
                        variant="h4"
                        color="inherit"
                        noWrap
                        sx={{ flexGrow: 1, ml: 8, mb: 2 }}
                        >
                        Route Plan
                    </Typography>

                    <Typography
                      component="h1"
                      variant="subtitle1"
                      color="#ffb74d"
                      noWrap
                      sx={{ flexGrow: 1, ml: 8, mt: 3 }}
                    >
                      Results:
                    </Typography>
                
                    <Typography
                        component="h1"
                        variant="h6"
                        color="inherit"
                        noWrap
                        sx={{ flexGrow: 1, ml: 8, mb: 2 }}
                        >
                        Path from source 
                    </Typography>
                    <Typography
                        component="h1"
                        variant="h6"
                        color="#00c853"
                        noWrap
                        sx={{ flexGrow: 1, ml: 8, mb: 2 }}
                        >
                        g 
                    </Typography>
                    <Typography
                        component="h1"
                        variant="h6"
                        color="inherit"
                        noWrap
                        sx={{ flexGrow: 1, ml: 8, mb: 2 }}
                        >
                        to destination 
                    </Typography>
                    <Typography
                        component="h1"
                        variant="h6"
                        color="#FF5722"
                        noWrap
                        sx={{ flexGrow: 1, ml: 8, mb: 2 }}
                        >
                        f 
                    </Typography>
                    <Typography
                        component="h1"
                        variant="h6"
                        color="inherit"
                        noWrap
                        sx={{ flexGrow: 1, ml: 8, mb: 2 }}
                        >
                        with minimum time cost: g -{'>'} h -{'>'} d -{'>'}  a -{'>'}  c -{'>'} f 
                    </Typography>
                    <Typography
                        component="h1"
                        variant="h6"
                        color="inherit"
                        noWrap
                        sx={{ flexGrow: 1, ml: 8, mb: 2 }}
                        >
                        with time cost = 7 
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
}