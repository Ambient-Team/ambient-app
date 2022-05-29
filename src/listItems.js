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

// const handleGoalsClick = () => {
//   alert('Hello!');
// };

export const mainListItems = (
  <React.Fragment>
    <ListItemButton>
    <ButtonBase href='/Overview' fullWidth>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Overview" />
    </ButtonBase>
    </ListItemButton>
    <ListItemButton>
    <ButtonBase href='/Goal' fullWidth>
      <ListItemIcon>
        <TrackChangesIcon />
      </ListItemIcon>
      <ListItemText primary="Goals" />
    </ButtonBase>
    </ListItemButton>
    <ListItemButton>
    <ButtonBase href='/Engineering' fullWidth>
      <ListItemIcon>
        <StorageIcon />
      </ListItemIcon>
      <ListItemText primary="Data Engineering" />
      </ButtonBase>
    </ListItemButton>
    <ListItemButton>
    <ButtonBase href='/Visualization' fullWidth>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Data Visualization" />
    </ButtonBase>
    </ListItemButton>
    <ListItemButton>
    <ButtonBase href='/ML' fullWidth>
      <ListItemIcon>
        <AccountTreeIcon />
      </ListItemIcon>
      <ListItemText primary="Machine Learning" />
      </ButtonBase>
    </ListItemButton>
    <ListItemButton>
    <ButtonBase href='/Output' fullWidth>
      <ListItemIcon>
        <FolderIcon />
      </ListItemIcon>
      <ListItemText primary="Output" />
      </ButtonBase>
    </ListItemButton>
    <ListItemButton>
    <ButtonBase href='/Profile' fullWidth>
      <ListItemIcon>
        <PersonIcon />
      </ListItemIcon>
      <ListItemText primary="Profile" />
      </ButtonBase>
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
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Relation Discovery" />
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