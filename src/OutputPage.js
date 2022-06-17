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

function createData(feature1, feature2, score
) {
  return {
    feature1, feature2, score
  };
}

const rows = [
  createData("Gas:Facility", "Heating:Gas", "High(0.98)"),
  createData("Electricity:Facility", "InteriorLights:Electricity", "High(0.97)"),
  createData("Electricity:Facility", "InteriorLights:Electricity", "High(0.95)"),
  createData("InteriorEquipment:Electricity", "InteriorLights:Electricity", "High(0.92)"),
  createData("Gas:Facility", "InteriorLights:Electricity", "Low(0.13)"),
  createData("Gas:Facility", "InteriorEquipment:Electricity", "Low(0.12)"),
  createData("Gas:Facility", "Electricity:Facility", "Low(0.081)"),
  createData("Electricity:Facility", "Cooling:Electricity", "Low(0.045)"),
]


// Main function of this page
export default function OutputPage() {
    const [open, setOpen] = React.useState(false);
    const toggleDrawer = () => {
        setOpen(!open);
    };

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
                      Ambient / Output / Relation Discovery
                    </Typography>

                    <Typography
                        component="h1"
                        variant="h4"
                        color="inherit"
                        noWrap
                        sx={{ flexGrow: 1, ml: 8, mb: 2 }}
                    >
                      Relations
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
                </Box>

                {/* Rank table */}
                <Box sx={{ mt: 1, ml: 8 }}>
                  <Table
                    sx={{ minWidth: 650 }}
                    size="small"
                    aria-label="a dense table"
                  >
                    <TableHead>
                      <TableRow>
                        <TableCell>Feature1</TableCell>
                        <TableCell align="right">Feature2</TableCell>
                        <TableCell align="right">Level/Score</TableCell>
                      </TableRow>
                    </TableHead>

                    <TableBody>
                      {rows?.map((row) => (
                        <TableRow
                          key={row.Date}
                          sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                        >
                          <TableCell component="th" scope="row">
                            {row.feature1}
                          </TableCell>
                          <TableCell align="right">{row.feature2}</TableCell>
                          <TableCell align="right">{row.score}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </Box>
            </Box>
        </Box>
    );
}