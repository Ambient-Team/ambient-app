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
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AssignmentIcon from '@mui/icons-material/Assignment';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import FormControl from "@mui/material/FormControl";
import { useState, useEffect } from "react";
import Select from '@mui/material/Select';
import Link from '@mui/material/Link';
import product1 from './RecommendationOutputComponents/product1.jpg'; 
import product2 from './RecommendationOutputComponents/product2.jpg'; 
import product3 from './RecommendationOutputComponents/product3.png'; 
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, onSnapshot, query } from 'firebase/firestore'

// Connect to current project of firebase
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

function createData(rank, product, param
) {
  return {
    rank, product, param
  };
}

const rows = [
  createData("rank1", "Led bulkhead - 20W - 1100 lm - 4000K - IP54 body - rectangle", "4.7"),
  createData("rank2", "Batten Lampholder, Lighting, 230/240VAC, 150W", "4.7"),
  createData("rank3", "Unswitched Cordgrip Lampholder- 1 phase - 3A - 250V - 150W", "4.3"),
  createData("rank4", "PDL Iconic, cover frame, 6 switches, vertical", "4.3"),
  createData("rank5", "PDL Iconic, knob for cover frame, Iconic Essence", "3.9"),
  createData("rank6", "PDL Iconic Essence Single Power Point Skin with 1 extra switch, Horizontal Mount, 250V, 10A", "3.6"),
  createData("rank7", "PDL Iconic, cover frame, 5 switches, vertical", "3.3"),
  createData("rank8", "PDL Iconic - Skin Connected Socket Double", "3.0"),
  createData("rank9", "Led Flood Light, 20 W, 1800 lm, 4000 K, IP65", "2.5"),
  createData("rank10", "Led DownLight - 9W - 3000K - IP44", "2.0"),
]


// Main function of this page
export default function RecommendationOutput() {
    const [open, setOpen] = React.useState(false);
    const toggleDrawer = () => {
        setOpen(!open);
    };

    const [assets, setAssets] = useState([])

    /* Firestore SDK queries */
    useEffect(() => {
      const assetQuery = query(
        collection(firestore, 'assets'),
      );
        const unsubscribe = onSnapshot(assetQuery, snapshot => {
          setAssets(snapshot.docs.map(doc => ({id: doc.id, data: doc.data() })))
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
                    <ButtonBase href="/Dashboard/Output" fullWidth>
                      <ListItemIcon>
                        <AssignmentIcon />
                      </ListItemIcon>
                      <ListItemText primary="Relation Discovery" />
                    </ButtonBase>
                  </ListItemButton>

                  <ListItemButton>
                    <ButtonBase href="/Dashboard/Output/Recommendation" fullWidth>
                      <ListItemIcon>
                        <AssignmentIcon />
                      </ListItemIcon>
                      <ListItemText primary="Recommendation" />
                    </ButtonBase>
                  </ListItemButton>

                  <ListItemButton>
                    <ButtonBase href="/Dashboard/Output/GraphModel" fullWidth>
                      <ListItemIcon>
                        <AssignmentIcon />
                      </ListItemIcon>
                      <ListItemText primary="Graph Model" />
                    </ButtonBase>
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
                      Ambient / Output / Recommendation
                    </Typography>

                    <Typography
                        component="h1"
                        variant="h4"
                        color="inherit"
                        noWrap
                        sx={{ flexGrow: 1, ml: 8, mb: 2 }}
                    >
                      Recommendation
                    </Typography>
                </Box>

                {/* Droplists */}
                <Box>
                  <FormControl sx={{ ml: 8, minWidth: 200 }} variant= "standard">
                    <Select native defaultValue="" id="grouped-native-select" label="Select Portfolio" disableUnderline
                      style={{
                        borderRadius: 25,
                        backgroundColor: "#031c4a",
                        padding: "6px 15px",
                      }}
                    >
                      <option aria-label="None" value="">Select Portfolio</option>
                      {assets?.map((row) => (
                        <option value={row.data.portfolio}>{row.data.portfolio}</option>
                      ))}
                    </Select>
                  </FormControl>
                  <FormControl sx={{ ml: 3, minWidth: 200 }} variant= "standard">
                    <Select native defaultValue="" id="grouped-native-select" label="Select Building" disableUnderline
                      style={{
                        borderRadius: 25,
                        backgroundColor: "#031c4a",
                        padding: "6px 15px",
                      }}
                    >
                      <option aria-label="None" value="">Select Building</option>
                      {assets?.map((row) => (
                        <option value={row.data.building}>{row.data.building}</option>
                      ))}
                    </Select>
                  </FormControl>
                  <FormControl sx={{ ml: 3, minWidth: 200 }} variant= "standard">
                      <Select native defaultValue="" id="grouped-native-select" label="Select Strata" disableUnderline
                        style={{
                          borderRadius: 25,
                          backgroundColor: "#031c4a",
                          padding: "6px 15px",
                        }}
                      >
                        <option aria-label="None" value="">Select Strata</option>
                        {assets?.map((row) => (
                          <option value={row.data.strata}>{row.data.strata}</option>
                        ))}
                      </Select>
                  </FormControl>
                </Box>
                
                {/* Top recommendation area */}
                <Box>
                  <Typography
                      component="h1"
                      variant="subtitle1"
                      color="#00ffff"
                      noWrap
                      sx={{ flexGrow: 1, ml: 8, mt: 1 }}
                  >
                    Top Recommendations:
                  </Typography>
                </Box>

                <Container maxWidth="lg" sx={{ mt: 2, mb: 2, ml: 5 }}>
                  <Grid container spacing={2}>
                    {/* First one */}
                    <Grid item xs={12} md={8} lg={4}>
                      <Paper
                        sx={{
                          p: 1,
                          display: 'flex',
                          flexDirection: 'column',
                          height: 420,
                        }}
                      >
                        <Typography variant="subtitle1" color="#7fffd4">
                          Replace your sliding glass doors with ENERGY STAR Most Efficient models:
                        </Typography>
                        <Typography variant="subtitle2">
                          ● U-Factor 1.22 W/m²K  or Energy Rating of 34 or more
                        </Typography>
                        <Typography variant="subtitle2">
                          ● Up to 89% more efficient than standard sliding glass doors
                        </Typography>
                          <Typography variant="subtitle2">
                            ● See this link: 
                            <Link href="https://www.pdl.co.nz/products/iconic-essence#" sx={{ml: 1}}>iconic-essence</Link>
                          </Typography>
                        <Box sx={{ mt: 5 }}>
                          <img alt="" src={product1}/>
                        </Box>
                      </Paper>
                    </Grid>

                    {/* Second one */}
                    <Grid item xs={12} md={8} lg={4}>
                      <Paper
                        sx={{
                          p: 1,
                          display: 'flex',
                          flexDirection: 'column',
                          height: 420,
                        }}
                      >
                        <Typography variant="subtitle1" color="#7fffd4">
                        Replace your windows with ENERGY STAR Most Efficient models:
                        </Typography>
                        <Typography variant="subtitle2">
                          ● U-Factor of 1.05 W/m²K or less or Energy Rating of 40 or more
                        </Typography>
                        <Typography variant="subtitle2">
                          ● up to 79% more efficient than standard windows
                        </Typography>
                          <Typography variant="subtitle2">
                            ● See this link: 
                            <Link href="https://www.energystar.gov/products/most_efficient/vertical_slider_windows" sx={{ml: 1}}>vertical_slider_windows</Link>
                          </Typography>
                        <Box sx={{ mt: 5 }}>
                          <img alt="" src={product2}/>
                        </Box>
                      </Paper>
                    </Grid>

                    {/* Third one */}
                    <Grid item xs={12} md={8} lg={4}>
                      <Paper
                        sx={{
                          p: 1,
                          display: 'flex',
                          flexDirection: 'column',
                          height: 420,
                        }}
                      >
                        <Typography variant="subtitle1" color="#7fffd4">
                        Replace your dishwasher with ENERGY STAR Most Efficient models:
                        </Typography>
                        <Typography variant="subtitle2">
                          ● 200 kWh / year or 0.8 to 0.9 kWh/ load, about 10-13 litres of water per use
                        </Typography>
                        <Typography variant="subtitle2">
                          ● uses 12% less energy and 30% less water on average, than a standard model
                        </Typography>
                          <Typography variant="subtitle2">
                            ● See this link:
                            <Link href="https://www.energystar.gov/most-efficient/me-certified-dishwashers/results?is_most_efficient_filter=Most+Efficient">me-certified-dishwashers</Link> 
                          </Typography>
                        <img alt="" src={product3} />
                      </Paper>
                    </Grid>
                  </Grid>
                </Container>

                {/* Rank table */}
                <Box>
                  <Typography
                      component="h1"
                      variant="subtitle1"
                      color="#ffb74d"
                      noWrap
                      sx={{ flexGrow: 1, ml: 8, mt: 1 }}
                    >
                      Results in Details:
                    </Typography>
                </Box>

                <Box sx={{ mt: 1, ml: 8 }}>
                  <Table
                    sx={{ minWidth: 650 }}
                    size="small"
                    aria-label="a dense table"
                  >
                    <TableHead>
                      <TableRow>
                        <TableCell>Product</TableCell>
                        <TableCell align="right">Rank Level</TableCell>
                        <TableCell align="right">Improved Carbon Score</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows?.map((row) => (
                        <TableRow
                          key={row.Date}
                          sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                        >
                          <TableCell component="th" scope="row">
                            {row.product}
                          </TableCell>
                          <TableCell align="right">{row.rank}</TableCell>
                          <TableCell align="right">{row.param}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </Box>
            </Box>
        </Box>
    );
}