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
    <ButtonBase href='/' fullWidth>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Overview" />
    </ButtonBase>
    </ListItemButton>
    <ListItemButton>
    <ButtonBase href='/sample' fullWidth>
      <ListItemIcon>
        <TrackChangesIcon />
      </ListItemIcon>
      <ListItemText primary="Goals" />
    </ButtonBase>
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <StorageIcon />
      </ListItemIcon>
      <ListItemText primary="Data Feeds" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Analytics" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AccountTreeIcon />
      </ListItemIcon>
      <ListItemText primary="Models" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <FolderIcon />
      </ListItemIcon>
      <ListItemText primary="Output" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <PersonIcon />
      </ListItemIcon>
      <ListItemText primary="Profile" />
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
      <ListItemText primary="Current month" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItemButton>
  </React.Fragment>
);