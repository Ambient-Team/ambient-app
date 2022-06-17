import { styled } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AssignmentIcon from '@mui/icons-material/Assignment';
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import ButtonBase from '@mui/material/ButtonBase';
import Select from '@mui/material/Select';
import Link from '@mui/material/Link';
import InputLabel from '@mui/material/InputLabel';
import { ScatterChart, XAxis, YAxis, Tooltip, Scatter, Legend, CartesianGrid } from 'recharts';

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


// Main function of this page
export default function GraphModelPage() {
  const [open, setOpen] = React.useState(false);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);  
  
  const data01 = [
    { x: 10, y: 30., name: "g"  },
    { x: 20, y: 150, name: "e" },
    { x: 40, y: 130, name: "h" },
    { x: 60, y: 200, name: "b" },
    { x: 80, y: 370, name: "c" }
  ];
  const data02 = [
    { x: 20, y: 150, name: "e" },
    { x: 60, y: 200, name: "b" },
    {x: 100, y: 250, name: "a" },
    { x: 110, y: 400, name: "f" }
  ];
  const data03 = [
    { x: 60, y: 200, name: "b" },
    { x: 80, y: 150, name: "d" }
  ];
  const data04 = [
    {x: 10, y: 30, name: "g"},
    {x: 40, y: 130, name: "h"},
    {x: 80, y: 150, name: "d"},
    {x: 100, y: 250, name: "a"},
    {x: 80, y: 370, name: "c"},
    {x: 110, y: 400, name: "f"}
  ];
  const CustomizedLabel = ({
    x, y, name
  }) => {
    return (
      <text x={x} y={y} fill="green" textAnchor="end" dominantBaseline="central">
        {name}
      </text>
    );
  };
  

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
            Ambient / Machine Learning / Graph Model
          </Typography>
          <Typography
            component="h1"
            variant="h4"
            color="inherit"
            noWrap
            sx={{ flexGrow: 1, ml: 8, mb: 2 }}
          >
            Graph Model
          </Typography>
        </Box>

        {/* Droplists */}
        <Box sx={{ mt: 1, ml: 8, mb: 2, display: "flex" }}>
          <FormControl sx={{ minWidth: 100 }} variant= "standard">
            <InputLabel htmlFor="source">Source</InputLabel>
            <Select native defaultValue="" id="source" disableUnderline
              style={{
                borderRadius: 25,
                backgroundColor: "#031c4a",
                padding: "6px 15px",
              }}>
                <option value={"g"}>g</option>
                <option value={"f"}>f</option>
            </Select>
          </FormControl>
          <FormControl sx={{ minWidth: 100, ml: 2 }} variant= "standard">
            <InputLabel htmlFor="destination">Destination</InputLabel>
            <Select native defaultValue="" id="destination" disableUnderline
              style={{
                borderRadius: 25,
                backgroundColor: "#031c4a",
                padding: "6px 15px",
              }}>
                <option value={"f"}>f</option>
                <option value={"g"}>g</option>
            </Select>
          </FormControl>
        </Box>

        {/* Read button and hidden chart */}
        <Box>
            <Button
                variant="contained"
                color="primary"
                sx={{ ml: 8, borderRadius: 5 }}
                position="absolute"
                onClick={() => setShow2(prev => !prev)}
            >
                Read Data
            </Button>
            {show2 && 
            <Box sx={{ mt: 2, ml: 7 }}>
                <ScatterChart
                    width={500}
                    height={400}
                    margin={{
                        top: 20,
                        right: 20,
                        bottom: 20,
                        left: 20
                    }}
                >
                  <XAxis type="number" dataKey="x" name="x coordinate" />
                  <YAxis type="number" dataKey="y" name="y coordinate" />
                  <Tooltip cursor={{ strokeDasharray: "3 3" }} />
                  <Scatter
                      name=" "
                      data={data04}
                      fill="#8884d8"
                      shape="cross"
                      label={<CustomizedLabel />}
                  />
                  <Scatter
                      name=" "
                      data={data02}
                      fill="#82ca9d"
                      shape="diamond"
                      label={<CustomizedLabel />}
                  />
                  <Scatter
                      name=" "
                      data={data03}
                      fill="#82ca9d"
                      shape="diamond"
                      label={<CustomizedLabel />}
                  />
                  <Scatter
                      name=" "
                      data={data01}
                      fill="#82ca9d"
                      shape="diamond"
                      label={<CustomizedLabel />}
                  />
                </ScatterChart>
            </Box>
            }
        </Box>

        {/* Confirm button and hidden chart */}
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

                <ScatterChart
                    width={500}
                    height={400}
                    margin={{
                        top: 20,
                        right: 20,
                        bottom: 20,
                        left: 20
                    }}
                >
                    <CartesianGrid />
                    <XAxis type="number" dataKey="x" name="x coordinate" />
                    <YAxis type="number" dataKey="y" name="y coordinate" />
                    <Tooltip cursor={{ strokeDasharray: "3 3" }} />
                    <Legend />
                    <Scatter
                        name="min time cost path, cost=7"
                        data={data04}
                        fill="#8884d8"
                        line
                        shape="cross"
                        label={<CustomizedLabel />}
                    />
                    <Scatter
                        name=" "
                        data={data02}
                        fill="#82ca9d"
                        line
                        shape="diamond"
                        label={<CustomizedLabel />}
                    />
                    <Scatter
                        name=" "
                        data={data03}
                        fill="#82ca9d"
                        line
                        shape="diamond"
                        label={<CustomizedLabel />}
                    />
                    <Scatter
                        name=" "
                        data={data01}
                        fill="#82ca9d"
                        line
                        shape="diamond"
                        label={<CustomizedLabel />}
                    />
                    
                </ScatterChart>

              {/* Navigation button */}
              <Box sx={{ minHeight: 50 }}>
                <Link href="/Dashboard/Output/GraphModel" underline="hover">
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
