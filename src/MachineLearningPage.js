import { styled } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import * as React from "react";
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AssignmentIcon from '@mui/icons-material/Assignment';
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Select from '@mui/material/Select';
import CircularProgress from '@mui/material/CircularProgress';
import { green } from '@mui/material/colors';
import ButtonBase from '@mui/material/ButtonBase';
import Link from '@mui/material/Link';
import { ScatterChart, XAxis, YAxis, ZAxis, Tooltip, Scatter, Legend, CartesianGrid, ReferenceArea } from 'recharts';
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

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

const drawerWidth = 220;

function createData(
  Date,
  Electricity,
  Fans,
  Cooling,
  HeatingE,
  InteriorLightsE,
  InteriorEquipmentE,
  Gas,
  HeatingG,
  InteriorEquipmentG,
  WaterHeater
) {
  return {
    Date,
    Electricity,
    Fans,
    Cooling,
    HeatingE,
    InteriorLightsE,
    InteriorEquipmentE,
    Gas,
    HeatingG,
    InteriorEquipmentG,
    WaterHeater,
  };
}

const rows = [
  createData(
    "12/29 1:00:00",
    22.06190349,
    3.586220833,
    0,
    0,
    4.58992533,
    8.1892,
    132.9773352,
    122.1321,
    3.33988,
    7.505355191
  ),
  createData(
    "12/29 2:00:00",
    14.62914322,
    0,
    0,
    0,
    1.52997511,
    7.4902,
    3.35988,
    0,
    3.33988,
    0.02
  ),
  createData(
    "12/29 3:00:00",
    14.65008521,
    0,
    0,
    0,
    1.52997511,
    7.4902,
    3.931972039,
    0,
    3.33988,
    0.5920920389
  ),
  createData(
    "12/29 4:00:00",
    14.66351449,
    0,
    0,
    0,
    1.52997511,
    7.4902,
    3.35988,
    0,
    3.33988,
    0.02
  ),
  createData(
    "12/29 5:00:00",
    15.32984038,
    0,
    0,
    0,
    1.52997511,
    7.4902,
    3.931926179,
    0,
    3.33988,
    0.5920461794
  ),
  // createData(
  //   "12/29 6:00:00",
  //   22.68904746,
  //   3.586220833,
  //   0.006434058438,
  //   0,
  //   4.58992533,
  //   8.1892,
  //   133.3060368,
  //   124.9363368,
  //   8.3497,
  //   0.02
  // ),
  // createData(
  //   "12/29 7:00:00",
  //   38.36144457,
  //   3.586220833,
  //   0.007452121881,
  //   0,
  //   9.179850659,
  //   19.4245,
  //   139.1675673,
  //   116.7002765,
  //   16.6994,
  //   5.767890713
  // ),
  // createData(
  //   "12/29 8:00:00",
  //   45.60649679,
  //   3.586220833,
  //   0.01134535711,
  //   0,
  //   9.179850659,
  //   26.9147,
  //   152.7301514,
  //   106.0651914,
  //   25.0491,
  //   21.61586002
  // ),
  // createData(
  //   "12/29 9:00:00",
  //   45.61333227,
  //   3.586220833,
  //   0.002276280614,
  //   0,
  //   9.179850659,
  //   26.9147,
  //   160.4578865,
  //   106.6412075,
  //   33.3988,
  //   20.41787897
  // ),
  // createData(
  //   "12/29 10:00:00",
  //   38.12418039,
  //   3.586220833,
  //   0,
  //   0,
  //   9.179850659,
  //   19.4245,
  //   149.9123047,
  //   108.5866214,
  //   25.0491,
  //   16.27658336
  // ),
  // createData(
  //   "12/29 11:00:00",
  //   42.43764988,
  //   3.586220833,
  //   0.004180990232,
  //   0,
  //   9.179850659,
  //   26.9147,
  //   166.080028,
  //   109.8178583,
  //   41.7485,
  //   14.51366969
  // ),
  // createData(
  //   "12/29 12:00:00",
  //   42.14814635,
  //   3.586220833,
  //   0,
  //   0,
  //   9.179850659,
  //   26.9147,
  //   159.0155719,
  //   100.9853301,
  //   41.7485,
  //   16.28174184
  // ),
  // createData(
  //   "12/29 13:00:00",
  //   41.42875832,
  //   3.586220833,
  //   0,
  //   0,
  //   9.179850659,
  //   26.9147,
  //   148.2126997,
  //   91.95140497,
  //   41.7485,
  //   14.51279469
  // ),
  // createData(
  //   "12/29 14:00:00",
  //   33.90631816,
  //   3.586220833,
  //   0,
  //   0,
  //   9.179850659,
  //   19.4245,
  //   141.083797,
  //   94.35261253,
  //   33.3988,
  //   13.33238444
  // ),
  // createData(
  //   "12/29 15:00:00",
  //   33.904707,
  //   3.586220833,
  //   0,
  //   0,
  //   9.179850659,
  //   19.4245,
  //   136.6371292,
  //   100.5907822,
  //   25.0491,
  //   10.99724705
  // ),
  // createData(
  //   "12/29 16:00:00",
  //   36.00694752,
  //   3.586220833,
  //   0,
  //   0,
  //   9.179850659,
  //   19.4245,
  //   149.3854362,
  //   104.9886783,
  //   33.3988,
  //   10.99795781
  // ),
  // createData(
  //   "12/29 17:00:00",
  //   45.55532902,
  //   3.586220833,
  //   0.00766026511,
  //   0,
  //   9.179850659,
  //   26.9147,
  //   163.6547351,
  //   102.5575177,
  //   50.0982,
  //   10.9990174
  // ),
  // createData(
  //   "12/29 18:00:00",
  //   45.56300932,
  //   3.586220833,
  //   0.002421050972,
  //   0,
  //   9.179850659,
  //   26.9147,
  //   160.0988638,
  //   95.48689867,
  //   50.0982,
  //   14.51376513
  // ),
  // createData(
  //   "12/29 19:00:00",
  //   45.57359577,
  //   3.586220833,
  //   0.002799838295,
  //   0,
  //   9.179850659,
  //   26.9147,
  //   156.4556747,
  //   86.52579721,
  //   50.0982,
  //   19.83167747
  // ),
  // createData(
  //   "12/29 20:00:00",
  //   38.07381126,
  //   3.586220833,
  //   0,
  //   0,
  //   9.179850659,
  //   19.4245,
  //   143.8003621,
  //   88.19794574,
  //   33.3988,
  //   22.20361635
  // ),
  // createData(
  //   "12/29 21:00:00",
  //   38.06500163,
  //   3.586220833,
  //   0,
  //   0,
  //   9.179850659,
  //   19.4245,
  //   139.000659,
  //   87.54574768,
  //   33.3988,
  //   18.05611129
  // ),
  // createData(
  //   "12/29 22:00:00",
  //   38.02508985,
  //   3.586220833,
  //   0,
  //   0,
  //   9.179850659,
  //   19.4245,
  //   136.3737216,
  //   91.49051406,
  //   25.0491,
  //   19.83410757
  // ),
  // createData(
  //   "12/29 23:00:00",
  //   38.01805862,
  //   3.586220833,
  //   0,
  //   0,
  //   9.179850659,
  //   19.4245,
  //   125.357708,
  //   92.37326294,
  //   16.6994,
  //   16.28504507
  // ),
  // createData(
  //   "12/30 1078200:00:00",
  //   38.82724096,
  //   3.586220833,
  //   0,
  //   0,
  //   9.179850659,
  //   19.4245,
  //   111.1181713,
  //   93.51674824,
  //   8.3497,
  //   9.251723095
  // ),
  // createData(
  //   "12/30 1:00:00",
  //   22.06735077,
  //   3.586220833,
  //   0,
  //   0,
  //   4.58992533,
  //   8.1892,
  //   111.3820297,
  //   100.5374128,
  //   3.33988,
  //   7.504736938
  // ),
  // createData(
  //   "12/30 2:00:00",
  //   14.64123911,
  //   0,
  //   0,
  //   0,
  //   1.52997511,
  //   7.4902,
  //   3.931969031,
  //   0,
  //   3.33988,
  //   0.592089031
  // ),
  // createData(
  //   "12/30 3:00:00",
  //   14.66458751,
  //   0,
  //   0,
  //   0,
  //   1.52997511,
  //   7.4902,
  //   3.35988,
  //   0,
  //   3.33988,
  //   0.02
  // ),
  // createData(
  //   "12/30 4:00:00",
  //   14.67871671,
  //   0,
  //   0,
  //   0,
  //   1.52997511,
  //   7.4902,
  //   3.931974934,
  //   0,
  //   3.33988,
  //   0.5920949342
  // ),
  // createData(
  //   "12/30 5:00:00",
  //   14.8303736,
  //   0,
  //   0,
  //   0,
  //   1.52997511,
  //   7.4902,
  //   3.35988,
  //   0,
  //   3.33988,
  //   0.02
  // ),
  // createData(
  //   "12/30 6:00:00",
  //   22.18838399,
  //   3.586220833,
  //   0.01007662763,
  //   0,
  //   4.58992533,
  //   8.1892,
  //   110.8837372,
  //   101.9419881,
  //   8.3497,
  //   0.5920490879
  // ),
  // createData(
  //   "12/30 7:00:00",
  //   38.14111701,
  //   3.586220833,
  //   0.007926607867,
  //   0,
  //   9.179850659,
  //   19.4245,
  //   118.3425678,
  //   96.45005589,
  //   16.6994,
  //   5.193111877
  // ),
  // createData(
  //   "12/30 8:00:00",
  //   45.60850018,
  //   3.586220833,
  //   0.007761543559,
  //   0,
  //   9.179850659,
  //   26.9147,
  //   116.9500855,
  //   86.13261817,
  //   25.0491,
  //   5.768367278
  // ),
  // createData(
  //   "12/30 9:00:00",
  //   45.61511444,
  //   3.586220833,
  //   0,
  //   0,
  //   9.179850659,
  //   26.9147,
  //   123.9630991,
  //   84.7964587,
  //   33.3988,
  //   5.767840356
  // ),
  // createData(
  //   "12/30 10:00:00",
  //   38.13601618,
  //   3.586220833,
  //   0.003952462811,
  //   0,
  //   9.179850659,
  //   19.4245,
  //   130.1510643,
  //   87.05096187,
  //   25.0491,
  //   18.0510024
  // ),
  // createData(
  //   "12/30 11:00:00",
  //   42.45132166,
  //   3.586220833,
  //   0.004545879558,
  //   0,
  //   9.179850659,
  //   26.9147,
  //   148.2565919,
  //   89.6443871,
  //   41.7485,
  //   16.86370477
  // ),
  // createData(
  //   "12/30 12:00:00",
  //   42.16038638,
  //   3.586220833,
  //   0,
  //   0,
  //   9.179850659,
  //   26.9147,
  //   143.9361418,
  //   84.13207979,
  //   41.7485,
  //   18.05556199
  // ),
  // createData(
  //   "12/30 13:00:00",
  //   41.44042687,
  //   3.586220833,
  //   0,
  //   0,
  //   9.179850659,
  //   26.9147,
  //   142.4495657,
  //   82.64882733,
  //   41.7485,
  //   18.05223838
  // ),
  // createData(
  //   "12/30 14:00:00",
  //   33.91705102,
  //   3.586220833,
  //   0,
  //   0,
  //   9.179850659,
  //   19.4245,
  //   132.2633891,
  //   82.58096205,
  //   33.3988,
  //   16.28362704
  // ),
];


// Main function of this page
export default function MachineLearningPage() {
  const [open, setOpen] = React.useState(false);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  const [show, setShow] = useState(false);

  // Sample data for demo now, will be removed in the future
  const data01 = [
    {
      x: -0.377594,
      y: -0.002863,
      name: "C:E"	
    },
    {
      x: -0.359601,
      y: -0.141448,
      name: "G:F"	
    },
    {
      x: -0.408052,
      y: -0.166627,
      name: "H:G"
    }
  ];
  
  const data02 = [
    {
      x: 0.164465,
      y: 0.049966,
      name: "E:F"
    },
    {
      x: 0.294777,
      y: 0.170831,
      name: "F:E"
    },
    {
      x: 0.183604,
      y: 0.040473,
      name: "IL:E"
    },
    {
      x: 0.192818,
      y: 0.045575,
      name: "IE:E"
    },
    {
      x: 0.237294,
      y: -0.114304,
      name: "IE:G"
    },
    {
      x: 0.072291,
      y: 0.118398,
      name: "W:W:G"
    }
  ];
  
  const CustomizedLabel = ({
    x, y, name
  }) => {
    return (
      <text x={x} y={y} fill="purple" textAnchor="end" dominantBaseline="central">
        {name}
      </text>
    );
  };

  const sectorWidth =20;
  const sectorHeight =20;
  let sectors = []
  let sector = 0;
  let counts=
  [1.0,
    0.7128,
    0.0448,
    0.9698,
    0.9477,
    0.0813,
    0.229,
    0.629,
    0.7381,
    0.7128,
    1.0,
    0.3009,
    0.6702,
    0.6512,
    0.4833,
    0.5482,
    0.38,
    0.4383,
    0.0448,
    0.3009,
    1.0,
    0.1779,
    0.1809,
    0.7015,
    0.6935,
    0.151,
    0.0567,
    0.9698,
    0.6702,
    0.1779,
    1.0,
    0.9206,
    0.1347,
    0.2718,
    0.6007,
    0.6864,
    0.9477,
    0.6512,
    0.1809,
    0.9206,
    1.0,
    0.1245,
    0.2752,
    0.6618,
    0.7225,
    0.0813,
    0.4833,
    0.7015,
    0.1347,
    0.1245,
    1.0,
    0.9774,
    0.1803,
    0.0161,
    0.229,
    0.5482,
    0.6935,
    0.2718,
    0.2752,
    0.9774,
    1.0,
    0.3802,
    0.1275,
    0.629,
    0.38,
    0.151,
    0.6007,
    0.6618,
    0.1803,
    0.3802,
    1.0,
    0.5094,
    0.7381,
    0.4383,
    0.0567,
    0.6864,
    0.7225,
    0.0161,
    0.1275,
    0.5094,
    1.0]
    let data1 = []

    const formatx = (x) => {
      switch(x) {
        case 0:
          return ' ';
        case 20:
          return 'E:F';
        case 40:
              return 'F:E';
        case 60:
              return 'C:E';
        case 80:
            return 'IL:E';
        
        case 100:
          return 'IE:E';
        case 120:
          return 'G:F';
        case 140:
          return 'H:G';
        case 160:
          return 'IE:G';
        case 180:
          return 'W:W:S';
        
      }
    };
 
 let xCount = 0;
    while (xCount < 9) {
        let yCount = 0;
        while(yCount < 9) {
          data1[xCount*9+yCount]= {
            x: xCount*20+10,
            y: yCount*20+10,
            correlation: counts[xCount*9+yCount]
          }
            sectors[sector] = {
                count: counts[xCount*9+yCount],
                x1: xCount*20,
                x2: xCount*20 + sectorWidth,
                y1: yCount*20,
                y2: yCount*20 + sectorHeight
            };
            yCount += 1;
            sector++;
        }
        xCount += 1;
        sector++;
      }

  return (
    <Box sx={{ display: "flex", height: "100%" }}>

      {/* Sub-Sidebar layout */}
      <Drawer variant="permanent" open={open} sx={{ height: 1000 }}>
        <Toolbar
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            px: [1],
            height: 66,
          }}
        >
          <IconButton onClick={toggleDrawer} sx={{ mr: 1 }}>
            {open ? (
              <KeyboardDoubleArrowLeftIcon />
            ) : (
              <KeyboardDoubleArrowRightIcon />
            )}
          </IconButton>
        </Toolbar>

        <Divider />

        {/* Sub-bar Navigations */}
        <List component="nav">
          <ListItemButton>
            <ButtonBase href="/Dashboard/ML" fullWidth>
              <ListItemIcon>
                <AssignmentIcon />
              </ListItemIcon>
              <ListItemText primary="Relation Discovery" />
            </ButtonBase>
          </ListItemButton>

          <ListItemButton>
            <ButtonBase href="/Dashboard/ML/Recommendation" fullWidth>
              <ListItemIcon>
                <AssignmentIcon />
              </ListItemIcon>
              <ListItemText primary="Recommendation" />
            </ButtonBase>
          </ListItemButton>

          <ListItemButton>
            <ButtonBase href="/Dashboard/ML/GraphModel" fullWidth>
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
        <Box sx={{ width: "100%" }}>
          <Typography
            component="h1"
            variant="subtitle1"
            color="inherit"
            noWrap
            sx={{ flexGrow: 1, mt: 3, ml: 8 }}
          >
            Ambient / Machine Learning / Relation Discovery
          </Typography>
          <Typography
            component="h1"
            variant="h4"
            color="inherit"
            noWrap
            sx={{ flexGrow: 1, ml: 8, mb: 2 }}
          >
            Relation Discovery
          </Typography>

          <Typography
            component="h1"
            variant="subtitle1"
            color="inherit"
            noWrap
            sx={{ flexGrow: 1, ml: 8, mt: 3 }}
          >
            Select your dataset and run the model
          </Typography>
        </Box>
        
        {/* Sub-function for demo, simple animation with static data, contains table */}
        <ShowFiles />

        <Box>
            {/* Confirm button and the content hidden */}
            <Button
              variant="contained"
              color="primary"
              sx={{ mt: 3, ml: 8, borderRadius: 5 }}
              position="absolute"
              onClick={() => setShow(prev => !prev)}
            >
              Confirm
            </Button>
            {show && 
            <Box sx={{ mt: 3, ml: 8 }}>
              <Typography
                component="h1"
                variant="subtitle1"
                color="inherit"
                noWrap
                sx={{ flexGrow: 1 }}
              >
                Analysis results:
              </Typography>

              {/* Charts */}
              <Box sx={{ display: "flex" }}>
                <ScatterChart
                  width={400}
                  height={400}
                  margin={{
                    top: 20,
                    right: 20,
                    bottom: 20,
                    left: 20
                  }}
                >
                  <XAxis type="number" dataKey="x" />
                  <YAxis type="number" dataKey="y" />
                  <Tooltip cursor={{ strokeDasharray: "3 3" }} />
                  <Legend />
                  <Scatter name="cluster1" data={data01} fill="#8884d8" label={<CustomizedLabel />}/>
                  <Scatter name="cluster2" data={data02} fill="#82ca9d" label={<CustomizedLabel />}/>
                </ScatterChart>

                <Box sx={{ m: 8 }} />

                <ScatterChart
                  width={350}
                  height={350}
                  margin={{
                    top: 20,
                    right: 20,
                    bottom: 20,
                    left: 20
                  }}
                >
                {
                sectors.map((sector, index) => (
                            <ReferenceArea 
                                key={index}
                                x1={sector.x1}
                                x2={sector.x2}
                                y1={sector.y1}
                                y2={sector.y2} 
                                fill="green"
                                fillOpacity={(sector.count)}
                                stroke="white"
                                strokeOpacity={0}
                            />
                        ))
                    }

                    <CartesianGrid />
                    <XAxis type="number" dataKey="x"  domain={[0,180]}
                    tickCount={10}  tickFormatter={formatx} angle= {-315} 
                    tickSize={0} height={10} tick={{ fontSize: 16, fill: 'purple' }} interval={0}/>
                    <YAxis type="number" dataKey="y"  domain={[0,180]} angle= {-315} 
                    tickCount={10} tickSize={0} width={10} tick={{ fontSize: 16, fill: 'purple' }}
                    interval={0} tickFormatter={formatx} />
                    <ZAxis type="number" dataKey="correlation"/>
                    <Scatter data={data1} fill={"#FFFFFF"}/>

                    <Tooltip />

                    <ReferenceArea /> 
                </ScatterChart>

                {/* Sample text */}
                <Box>
                  <Typography variant="subtitle1" noWrap sx={{ flexGrow: 1, ml: 5, mt: 3 }}>short conclusion:</Typography>
                  <Typography variant="subtitle1" noWrap sx={{ flexGrow: 1, ml: 5, mt: 3 }}>● InteriorLights:Electricity</Typography>
                  <Typography variant="subtitle1" noWrap sx={{ flexGrow: 1, ml: 5, mt: 3 }}>● Electricity:Facility</Typography>
                  <Typography variant="subtitle1" noWrap sx={{ flexGrow: 1, ml: 5, mt: 3 }}>● InteriorEquipment:Electricity</Typography>
                  <Typography variant="subtitle1" noWrap sx={{ flexGrow: 1, ml: 5, mt: 3 }}>They are highly correlated</Typography>
                </Box>
              </Box>

              {/* Navigation button */}
              <Box sx={{ minHeight: 50 }}>
                <Link href="Output" underline="hover">
                  {'See Final Solutions'}
                </Link>
              </Box>
            </Box>
            }
        </Box>
      </Box>
    </Box>
  );
}

function ShowFiles() {
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const [data, setData] = React.useState();
  const timer = React.useRef();

  const buttonSx = {
    ...(success && {
      bgcolor: green[500],
      '&:hover': {
        bgcolor: green[700],
      },
    }),
  };

  React.useEffect(() => {
    return () => {
      clearTimeout(timer.current);
    };
  }, []);

  const handleButtonClick = () => {
    if (!loading) {
      setSuccess(false);
      setData();
      setLoading(true);
      timer.current = window.setTimeout(() => {
        setSuccess(true);
        setLoading(false);
        setData(rows);
      }, 2000);
    }
  };


  /* Firestore SDK queries */
  const [dataset, setDataset] = React.useState();
  const [assets, setAssets] = useState([])

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
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ position: 'relative' }}>

        {/* Droplist */}
        <FormControl sx={{ ml: 8, minWidth: 200 }} variant= "standard">
                <Select native defaultValue="" id="grouped-native-select" label="Select Building" disableUnderline
                  style={{
                    borderRadius: 25,
                    backgroundColor: "#031c4a",
                    padding: "6px 15px",
                  }}
                  value={dataset}
                  onChange={(e) => {setDataset(e.target.value)}}
                >
                  <option aria-label="None" value="">Select Portfolio</option>
                  {assets?.map((row) => (
                    <option value={row.data.building}>{row.data.building}</option>
                  ))}
                </Select>
        </FormControl>

        <Button
          variant="contained"
          sx={buttonSx}
          disabled={loading}
          onClick={handleButtonClick}
          sx={{ ml: 3, mt: 0.5 }}
        >
          Read Data
        </Button>
        {loading && (
          <CircularProgress
            size={24}
            sx={{
              color: green[500],
              position: 'absolute',
              top: '50%',
              left: '50%',
              marginTop: '-12px',
              marginLeft: '-12px',
            }}
          />
        )}

        {/* Hidden table */}
        <Box>
          <TableContainer component={Paper} sx={{ mt: 2, ml: 8 }}>
            <Table
              sx={{ minWidth: 650 }}
              size="small"
              aria-label="a dense table"
            >
              <TableHead>
                <TableRow>
                  <TableCell>Date/Time</TableCell>
                  <TableCell align="right">Electricity:Facility [kW](Hourly)</TableCell>
                  <TableCell align="right">Fans:Electricity [kW](Hourly)</TableCell>
                  <TableCell align="right">Cooling:Electricity [kW](Hourly)</TableCell>
                  <TableCell align="right">Heating:Electricity [kW](Hourly)</TableCell>
                  <TableCell align="right">InteriorLights:Electricity [kW](Hourly)</TableCell>
                  <TableCell align="right">InteriorEquipment:Electricity [kW](Hourly)</TableCell>
                  <TableCell align="right">Gas:Facility [kW](Hourly)</TableCell>
                  <TableCell align="right">Heating:Gas [kW](Hourly)</TableCell>
                  <TableCell align="right">InteriorEquipment:Gas [kW](Hourly)</TableCell>
                  <TableCell align="right">Water Heater:WaterSystems:Gas [kW](Hourly)</TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {data?.map((row) => (
                  <TableRow
                    key={row.Date}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.Date}
                    </TableCell>
                    <TableCell align="right">{row.Electricity}</TableCell>
                    <TableCell align="right">{row.Fans}</TableCell>
                    <TableCell align="right">{row.Cooling}</TableCell>
                    <TableCell align="right">{row.HeatingE}</TableCell>
                    <TableCell align="right">{row.InteriorLightsE}</TableCell>
                    <TableCell align="right">{row.InteriorEquipmentE}</TableCell>
                    <TableCell align="right">{row.Gas}</TableCell>
                    <TableCell align="right">{row.HeatingG}</TableCell>
                    <TableCell align="right">{row.InteriorEquipmentG}</TableCell>
                    <TableCell align="right">{row.WaterHeater}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </Box>
  );
}
