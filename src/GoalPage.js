import { styled } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import * as React from 'react';
import { useState, useEffect } from "react";
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import AssignmentIcon from '@mui/icons-material/Assignment';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import Select from '@mui/material/Select';
import FormControl from "@mui/material/FormControl";
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, onSnapshot, query } from 'firebase/firestore'

// Connect to current firebase project
const firebaseApp = initializeApp({
  apiKey: "AIzaSyBamRPS6NxxPg7lplFrxZd36fLWg9ZUTDY",
  authDomain: "ambient-systems.firebaseapp.com",
  databaseURL: "https://ambient-systems-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "ambient-systems",
  storageBucket: "ambient-systems.appspot.com",
  messagingSenderId: "1001740093061",
  appId: "1:1001740093061:web:b516ca06c0e80199b90bec"
});
const firestore = getFirestore(firebaseApp);


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


// Main function of this page
export default function GoalPage() {
    const [open, setOpen] = React.useState(false);
    const toggleDrawer = () => {
        setOpen(!open);
    };

    const [goals, setGoals] = useState([])
    const [audiences, setAudiences] = useState([])
    const [roles, setRoles] = useState([])

    /* Firestore SDK queries */
    useEffect(() => {
      const goalQuery = query(
        collection(firestore, 'goals'),
      );
        const unsubscribe = onSnapshot(goalQuery, snapshot => {
          setGoals(snapshot.docs.map(doc => ({id: doc.id, data: doc.data() })))
          setAudiences(snapshot.docs.map(doc => ({id: doc.id, data: doc.data() })))
          setRoles(snapshot.docs.map(doc => ({id: doc.id, data: doc.data() })))
        })

        return () => {
          unsubscribe()
        }
      }, [])

    return (
        <Box sx={{ display: 'flex', height: '100%' }}>

            {/* Sub-Sidebar layout */}
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
                  </IconButton>
                </Toolbar>
                <Divider />

                {/* Sub-bar Navigations */}
                <List component="nav">
                  <ListItemButton>
                    <ListItemIcon>
                      <AssignmentIcon />
                    </ListItemIcon>
                    <ListItemText primary="TBD" />
                  </ListItemButton>
                  <ListItemButton>
                    <ListItemIcon>
                      <AssignmentIcon />
                    </ListItemIcon>
                    <ListItemText primary="TBD" />
                  </ListItemButton>
                </List>
            </Drawer>
            
            {/* Main space of page*/}
            <Box>
                {/* Title */}
                <Box sx={{ width: '100%' }}>
                    <Typography
                        component="h1"
                        variant="subtitle1"
                        color="inherit"
                        noWrap
                        sx={{ flexGrow: 1, mt: 3, ml: 8 }}
                        >
                        Ambient / Goals
                    </Typography>
                    <Typography
                        component="h1"
                        variant="h4"
                        color="inherit"
                        noWrap
                        sx={{ flexGrow: 1, ml: 8, mb: 2 }}
                        >
                        Goals
                    </Typography>
                </Box>

                <Box>
                  {/* Text below title */}
                  <Typography
                    component="h1"
                    variant="h6"
                    color="inherit"
                    noWrap
                    sx={{ flexGrow: 1, mt: 3, ml: 8 }}
                  >
                    Hi Ivan, welcome aboard!
                  </Typography>
                  <Typography
                    component="h1"
                    variant="h7"
                    color="inherit"
                    noWrap
                    sx={{ flexGrow: 1, mt: 3, ml: 8 }}
                  >
                    Let's take 1 minute to customize your experience.
                  </Typography>
                  {/* First choice */}
                  <Box sx={{ display: "flex", mt: 5 }}>
                    <Typography
                      component="h1"
                      variant="h7"
                      style={{color:"#00adb5"}}
                      noWrap
                      sx={{ mt: 3, ml: 8 }}
                    >
                      "I want to 
                    </Typography>
                    <FormControl sx={{ ml: 1, mt: 2, minWidth: 200 }} variant= "standard">
                      <Select native defaultValue="" label="Select Goal" disableUnderline
                        style={{
                          borderRadius: 25,
                          backgroundColor: "#031c4a",
                          padding: "6px 15px",
                      }}
                      >
                        {goals?.map((row) => (
                          <option value={row.data.goal}>{row.data.goal}</option>
                        ))}
                      </Select>
                    </FormControl>
                  </Box>
                  {/* Second choice */}
                  <Box sx={{ display: "flex", mt: 5 }}>
                    <Typography
                      component="h1"
                      variant="h7"
                      style={{color:"#00adb5"}}
                      noWrap
                      sx={{ mt: 3, ml: 8 }}
                    >
                       for
                    </Typography>
                    <FormControl sx={{ ml: 1, mt: 2, minWidth: 200 }} variant= "standard">
                      <Select native defaultValue="" label="Select Audience" disableUnderline
                        style={{
                          borderRadius: 25,
                          backgroundColor: "#031c4a",
                          padding: "6px 15px",
                      }}
                      >
                        {audiences?.map((row) => (
                          <option value={row.data.audience}>{row.data.audience}</option>
                        ))}
                      </Select>
                    </FormControl>
                  </Box>
                  {/* Third choice */}
                  <Box sx={{ display: "flex", mt: 5 }}>
                    <Typography
                      component="h1"
                      variant="h7"
                      style={{color:"#00adb5"}}
                      noWrap
                      sx={{ mt: 3, ml: 8 }}
                    >
                      and I'm part of the 
                    </Typography>
                    <FormControl sx={{ ml: 1, mt: 2, minWidth: 200 }} variant= "standard">
                      <Select native defaultValue="" label="Select Role" disableUnderline
                        style={{
                          borderRadius: 25,
                          backgroundColor: "#031c4a",
                          padding: "6px 15px",
                      }}
                      >
                        {roles?.map((row) => (
                          <option value={row.data.role}>{row.data.role}</option>
                        ))}
                      </Select>
                    </FormControl>
                    <Typography
                      component="h1"
                      variant="h7"
                      style={{color:"#00adb5"}}
                      noWrap
                    >
                      "
                    </Typography>
                  </Box>

                </Box>
            </Box>
        </Box>
    );
}