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
import { fourthListItems } from "./listItems";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl, { useFormControl } from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import Button from "@mui/material/Button";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Select from '@mui/material/Select';
import InputAdornment from '@mui/material/InputAdornment';
import LabelIcon from '@mui/icons-material/Label';
import CircularProgress from '@mui/material/CircularProgress';
import TextField from '@mui/material/TextField';
import { green } from '@mui/material/colors';
import Fab from '@mui/material/Fab';
// import { Link } from 'react-router-dom'
import Link from '@mui/material/Link';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from "recharts";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis
} from "recharts";

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
    "12/29 15:00:00",
    33.904707,
    3.586220833,
    0,
    0,
    9.179850659,
    19.4245,
    136.6371292,
    100.5907822,
    25.0491,
    10.99724705
  ),
  createData(
    "12/29 16:00:00",
    36.00694752,
    3.586220833,
    0,
    0,
    9.179850659,
    19.4245,
    149.3854362,
    104.9886783,
    33.3988,
    10.99795781
  ),
  createData(
    "12/29 17:00:00",
    45.55532902,
    3.586220833,
    0.00766026511,
    0,
    9.179850659,
    26.9147,
    163.6547351,
    102.5575177,
    50.0982,
    10.9990174
  ),
  createData(
    "12/29 18:00:00",
    45.56300932,
    3.586220833,
    0.002421050972,
    0,
    9.179850659,
    26.9147,
    160.0988638,
    95.48689867,
    50.0982,
    14.51376513
  ),
  createData(
    "12/29 19:00:00",
    45.57359577,
    3.586220833,
    0.002799838295,
    0,
    9.179850659,
    26.9147,
    156.4556747,
    86.52579721,
    50.0982,
    19.83167747
  ),
];

export default function MachineLearningPage() {
  const [open, setOpen] = React.useState(false);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  const [show, setShow] = useState(false);

  const data = [
    {
      name: "P11",  
      score: 4.7,      
      
      amt: 50
   },
   {
     name: "P15",
     score: 4.7,
  
     amt: 50
   },
   {
    name: "P33",
    score:4.3,
     
     amt: 50
   },
   {
     name: "P45",
     score: 4.3,
     
     amt: 50
   },
   {
     name: "P65",
     score:3.9,
     
     amt: 50
  
   },
   {
     name: "P4",
     score: 3.6,
     
     amt: 50
   },
   {
     name: "P14",
     score: 3.3,
     
     amt: 50
   },
  {
     name: "P78",
     score: 3.0,
     
     amt: 50
   },
  {
     name: "P34",
     score: 2.5,
     
     amt: 50
  },
  {
     name: "P17",
     score: 2.0,
     
     amt: 50
   }
  ];
  
  const data1 = [
    {
       subject: "Product11",  
       A: 47,      
       B: 24,
       fullMark: 50
    },
    {
      subject: "Product15",
      A: 47,
      B: 220,
      fullMark: 50
    },
    {
      subject: "Product33",
      A:43,
      B: 2290,
      fullMark: 50
    },
    {
      subject: "Product45",
      A: 43,
      B: 2000,
      fullMark: 50
    },
    {
      subject: "Product65",
      A:39,
      B: 2181,
      fullMark: 50
  
    },
    {
      subject: "Product4",
      A:36,
      B: 2500,
      fullMark: 50
    },
    {
      subject: "Product14",
      A: 33,
      B: 2100,
      fullMark: 50
    },
  {
      subject: "Product78",
      A: 30,
      B: 2100,
      fullMark: 50
    },
  {
      subject: "Product34",
      A: 25,
      B: 2100,
      fullMark: 50
  },
  {
      subject: "Product17",
      A: 20,
      B: 2100,
      fullMark: 50
    }
  ];
  
  return (
    <Box sx={{ display: "flex", height: "100%" }}>
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
        <List component="nav">{fourthListItems}</List>
      </Drawer>
      <Box>
        <Box sx={{ width: "100%" }}>
          <Typography
            component="h1"
            variant="subtitle1"
            color="inherit"
            noWrap
            sx={{ flexGrow: 1, mt: 3, ml: 8 }}
          >
            Ambient / Machine Learning / Recommendation
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
        <Box sx={{ mt: 1, ml: 8, mb: 2, display: "flex" }}>
          <FormControl sx={{ minWidth: 200 }} variant= "standard">
            <Select native defaultValue="" id="property type" disableUnderline
              style={{
                borderRadius: 25,
                backgroundColor: "#031c4a",
                padding: "6px 15px",
            }}>
                <option value={"office"}>Office</option>
                <option value={"business"}>Business</option>
                <option value={"science park"}>Science park</option>
            </Select>
          </FormControl>
          <TextField id="location" label="Location" variant="standard" defaultValue="D03 Alexandra/Commonwealth, D04 city hall/Clarke Quay" sx={{ minWidth: 400, ml: 2, mt: -1 }}/>
          <TextField id="size" label="Size" variant="standard" defaultValue="3000 sqrt" sx={{ ml: 2, mt: -1 }}/>
        </Box>
        <ShowFiles />
        <Box>
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
            <Box sx={{ mt: 3, ml: 8,}}>
              <Typography
                component="h1"
                variant="subtitle1"
                color="inherit"
                noWrap
                sx={{ flexGrow: 1 }}
              >
                Analysis results:
              </Typography>
              <Box sx={{ display: "flex" }}>
                <AreaChart
                  width={600}
                  height={400}
                  data={data}
                  margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis type="number" domain={[0, 5]}/>
                  <Tooltip />
                  <Area type="monotone" dataKey="score" stroke="#8884d8" fill="#82ca9d" />
                </AreaChart>

                <RadarChart
                  cx={250}
                  cy={200}
                  outerRadius={150}
                  width={500}
                  height={400}
                  data={data1}
                >
                  <PolarGrid />
                  <PolarAngleAxis dataKey="subject" tick={{ fill: 'grey' }}/>
                  <PolarRadiusAxis type="number" domain={[0, 50]} />
                  <Radar
                    name="Mike"
                    dataKey="A"
                    stroke="#8884d8"
                    fill="#8884d8"
                    fillOpacity={0.6}
                  />
                </RadarChart>
              </Box>
              <Box sx={{ minHeight: 50 }}>
                <Link href="/Dashboard/Output/Recommendation" underline="hover">
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

  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ position: 'relative' }}>
        <Button
          variant="contained"
          sx={buttonSx}
          disabled={loading}
          onClick={handleButtonClick}
          sx={{ ml: 8 }}
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
