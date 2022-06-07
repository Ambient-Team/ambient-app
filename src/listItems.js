import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import PersonIcon from '@mui/icons-material/Person';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import StorageIcon from '@mui/icons-material/Storage';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import FolderIcon from '@mui/icons-material/Folder';
import ButtonBase from '@mui/material/ButtonBase';
import { Link } from 'react-router-dom'

// const handleGoalsClick = () => {
//   alert('Hello!');
// };

export const mainListItems = (
  <React.Fragment>
    <ListItemButton>
    {/* <Link to = "/Dashboard/Overview" > */}
    <ButtonBase href="/Dashboard/Overview" fullWidth>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Overview" />
    </ButtonBase>
    {/* </Link> */}
    </ListItemButton>
    <ListItemButton>
    {/* <Link to = "/Dashboard/Goal" > */}
    <ButtonBase  href="/Dashboard/Goal" fullWidth>
      <ListItemIcon>
      <TrackChangesIcon />
      </ListItemIcon>
      <ListItemText primary="Goals"></ListItemText>
    </ButtonBase>
    {/* </Link> */}
    </ListItemButton>
    <ListItemButton>
    {/* <Link to = "/Dashboard/Engineering" > */}
    <ButtonBase href="/Dashboard/Engineering" fullWidth>
      <ListItemIcon>
        <StorageIcon />
      </ListItemIcon>
      <ListItemText primary="Data Engineering" />
      </ButtonBase>
      {/* </Link> */}
    </ListItemButton>
    <ListItemButton>
    {/* <Link to = "/Dashboard/Visualization" > */}
    <ButtonBase href="/Dashboard/Visualization" fullWidth>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Data Visualization" />
    </ButtonBase>
    {/* </Link> */}
    </ListItemButton>
    <ListItemButton>
    {/* <Link to = "/Dashboard/ML" > */}
    <ButtonBase href="/Dashboard/ML" fullWidth>
      <ListItemIcon>
        <AccountTreeIcon />
      </ListItemIcon>
      <ListItemText primary="Machine Learning" />
      </ButtonBase>
      {/* </Link> */}
    </ListItemButton>
    <ListItemButton>
    {/* <Link to = "/Dashboard/Output" > */}
    <ButtonBase href="/Dashboard/Output" fullWidth>
      <ListItemIcon>
        <FolderIcon />
      </ListItemIcon>
      <ListItemText primary="Output" />
      </ButtonBase>
      {/* </Link> */}
    </ListItemButton>
    <ListItemButton>
    {/* <Link to = "/Dashboard/Profile" > */}
    <ButtonBase href="/Dashboard/Profile" fullWidth>
      <ListItemIcon>
        <PersonIcon />
      </ListItemIcon>
      <ListItemText primary="Profile" />
      </ButtonBase>
      {/* </Link> */}
    </ListItemButton>
  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    {/* <ListSubheader component="div" inset>
      Sub-bar
    </ListSubheader> */}
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Data Connectors" />
    </ListItemButton>
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
  </React.Fragment>
);

export const thirdListItems = (
  <React.Fragment>
    {/* <ListSubheader component="div" inset>
      Sub-bar
    </ListSubheader> */}
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItemButton>
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
  </React.Fragment>
);

export const fourthListItems = (
  <React.Fragment>
    {/* <ListSubheader component="div" inset>
      Sub-bar
    </ListSubheader> */}
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
  </React.Fragment>
);

export const fifthListItems = (
  <React.Fragment>
    {/* <ListSubheader component="div" inset>
      Sub-bar
    </ListSubheader> */}
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Personal Info" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Settings" />
    </ListItemButton>
  </React.Fragment>
);

export const sixthListItems = (
  <React.Fragment>
    {/* <ListSubheader component="div" inset>
      Sub-bar
    </ListSubheader> */}
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
  </React.Fragment>
);

export const defaultItems = (
  <React.Fragment>
    {/* <ListSubheader component="div" inset>
      Sub-bar
    </ListSubheader> */}
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
  </React.Fragment>
);