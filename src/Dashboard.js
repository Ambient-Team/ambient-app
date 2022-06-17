import * as React from 'react';
import { styled, alpha, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import ListItemButton from '@mui/material/ListItemButton';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import StorageIcon from '@mui/icons-material/Storage';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import FolderIcon from '@mui/icons-material/Folder';
import BarChartIcon from '@mui/icons-material/BarChart';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import NotificationsIcon from '@mui/icons-material/Notifications';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import ButtonBase from '@mui/material/ButtonBase';
import Logo from './pics/Logo_White-01.svg'; 
import {
  useNavigate,
   Outlet
} from "react-router-dom";
import { useEffect } from 'react';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.error.main,
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(110),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

const drawerWidth = 220;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

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

const mdTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#031c4a',
      paper: '#031c4a',
    },
    error: {
      main: '#060c43',
    },
    warning: {
      main: '#00e676',
    },
    success: {
      main: '#ffb74d',
    },
  },
});


// Main function of this page
function DashboardContent() {
  const [open, setOpen] = React.useState(true);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorEl2, setAnchorEl2] = React.useState(null);
  const [anchorEl3, setAnchorEl3] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMenuOpen2 = Boolean(anchorEl2);
  const isMenuOpen3 = Boolean(anchorEl3);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleInfoMenuOpen = (event) => {
    setAnchorEl2(event.currentTarget);
  };
  const handleMessageMenuOpen = (event) => {
    setAnchorEl3(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const handleMenuClose2 = () => {
    setAnchorEl2(null);
  };
  const handleMenuClose3 = () => {
    setAnchorEl3(null);
  };
  const handleSignOut = () => {
    window.localStorage.removeItem('access_token');
    window.location.reload();
  }
  
  /* Droplists of head bar buttons */
  /* Droplist of Message/First button */
  const renderMessageMenu = (
    <Menu
      anchorEl={anchorEl3}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen3}
      onClose={handleMenuClose3}
    >
      <MenuItem onClick={handleMenuClose3}>
        <ListItemIcon>
          <NotificationsIcon fontSize="small"/>
        </ListItemIcon>
        <ListItemText>
          Placeholder ... 
        </ListItemText>
      </MenuItem>
      <MenuItem onClick={handleMenuClose3}>
        <ListItemIcon>
          <NotificationsIcon fontSize="small"/>
        </ListItemIcon>
        <ListItemText>
          Placeholder ... 
        </ListItemText>
      </MenuItem>
    </Menu>
  );

  /* Droplist of Information/Second button */
  const renderInfoMenu = (
    <Menu
      anchorEl={anchorEl2}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen2}
      onClose={handleMenuClose2}
    >
      <MenuItem onClick={handleMenuClose2}>
        <ListItemIcon>
          <CheckIcon fontSize="small"/>
        </ListItemIcon>
        <ListItemText>
          Your project is running well. 
        </ListItemText>
      </MenuItem>
      <MenuItem onClick={handleMenuClose2}>
        <ListItemIcon>
          <CheckIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText>
          All services are ready. 
        </ListItemText>
      </MenuItem>
      <MenuItem onClick={handleMenuClose2}>
        <ListItemIcon>
          <CloseIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText>
          Some information missed. 
        </ListItemText>
      </MenuItem>
    </Menu>
  );
  
  /* Droplist of Profile/Third button */
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}><ButtonBase href='Profile'>Profile</ButtonBase></MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
      <MenuItem onClick={handleSignOut}>Sign out</MenuItem>
    </Menu>
  );



  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />

        {/* Head bar layout */}
        <AppBar position="absolute" open={open}>
          <Toolbar
            sx={{
              pr: '24px', // keep right padding when drawer closed
              backgroundColor: '#031c4a',
            }}
          >

            {/* Search bar */}
            <Search sx={{flexGrow: 0, borderRadius: 25 }}>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>

            {/* Placeholder */}
            <Box sx={{ flexGrow: 1 }} />

            {/* Three functional buttons */}
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              {/* Message/First button */}
              <IconButton size="large" aria-label="show 2 new mails" color="inherit" onClick={handleMessageMenuOpen}>
                <Badge badgeContent={2} color="info">
                  <NotificationsOutlinedIcon />
                </Badge>
              </IconButton>
              {/* Information/Second button */}
              <IconButton
                size="large"
                aria-label="show 3 new notifications"
                onClick={handleInfoMenuOpen}
                color="inherit"
              >
                <Badge badgeContent={3} color="info">
                  <InfoOutlinedIcon />
                </Badge>
              </IconButton>
              {/* Profile/Third button */}
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircleOutlinedIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
        {renderInfoMenu}
        {renderMessageMenu}
        {renderMenu}

        {/* Side bar layout */}
        <Drawer variant="permanent" open={open}>
          {/* Logo at the top left cornor */}
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              px: [1],
              height: 130
            }}
          >
            <ButtonBase href='/' fullWidth>
              <img src={Logo} alt="Logo" width={180} height={75}/>
            </ButtonBase>
          </Toolbar>
          <Divider />

          {/* Navigations to different pages */}
          <List component="nav">
            {/* Overview */}
            <ListItemButton>
              <ButtonBase href="/Dashboard/Overview" fullWidth>
                <ListItemIcon>
                  <DashboardIcon />
                </ListItemIcon>
                <ListItemText primary="Overview" />
              </ButtonBase>
            </ListItemButton>

            {/* Goals */}
            <ListItemButton>
              <ButtonBase  href="/Dashboard/Goal" fullWidth>
                <ListItemIcon>
                  <TrackChangesIcon />
                </ListItemIcon>
                <ListItemText primary="Goals" />
              </ButtonBase>
            </ListItemButton>

            {/* Data Engineering */}
            <ListItemButton>
              <ButtonBase href="/Dashboard/Engineering" fullWidth>
                <ListItemIcon>
                  <StorageIcon />
                </ListItemIcon>
                <ListItemText primary="Data Engineering" />
              </ButtonBase>
            </ListItemButton>

            {/* Data Visualization */}
            <ListItemButton>
              <ButtonBase href="/Dashboard/Visualization" fullWidth>
                <ListItemIcon>
                  <BarChartIcon />
                </ListItemIcon>
                <ListItemText primary="Data Visualization" />
              </ButtonBase>
            </ListItemButton>

            {/* Machine Learning */}
            <ListItemButton>
              <ButtonBase href="/Dashboard/ML" fullWidth>
                <ListItemIcon>
                  <AccountTreeIcon />
                </ListItemIcon>
                <ListItemText primary="Machine Learning" />
              </ButtonBase>
            </ListItemButton>
            
            {/* Output */}
            <ListItemButton>
              <ButtonBase href="/Dashboard/Output" fullWidth>
                <ListItemIcon>
                  <FolderIcon />
                </ListItemIcon>
                <ListItemText primary="Output" />
              </ButtonBase>
            </ListItemButton>

            {/* Profile */}
            <ListItemButton>
              <ButtonBase href="/Dashboard/Profile" fullWidth>
                <ListItemIcon>
                  <PersonIcon />
                </ListItemIcon>
                <ListItemText primary="Profile" />
              </ButtonBase>
            </ListItemButton>
          </List>

        </Drawer>

        {/* Main space of page, which is blank in this page */}
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.error.main,
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />
          <Outlet />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default function Dashboard() {
 const navigate = useNavigate()
  useEffect(() => {
  const token =  window.localStorage.getItem('access_token');
  if(!token) navigate("/");
  },[])

  return <DashboardContent />;
}