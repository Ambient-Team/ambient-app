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
import Typography from '@mui/material/Typography';
import { sixthListItems } from './listItems';
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

function createData(rank, product, param
) {
  return {
    rank, product, param
  };
}

const rows = [
  createData("rank1", "Led bulkhead - 20W - 1100 lm - 4000K - IP54 body - rectangle", "PDLE385C-AW"),
  createData("rank2", "Batten Lampholder, Lighting, 230/240VAC, 150W", "PDL29LWH"),
  createData("rank3", "Unswitched Cordgrip Lampholder- 1 phase - 3A - 250V - 150W", "PDL26WH"),
  createData("rank4", "PDL Iconic, cover frame, 6 switches, vertical", "PDLE386C-AW"),
  createData("rank5", "PDL Iconic, knob for cover frame, Iconic Essence", "PDLE300KBC-AG"),
  createData("rank6", "PDL Iconic Essence Single Power Point Skin with 1 extra switch, Horizontal Mount, 250V, 10A", "PDLE395H4C-AW"),
  createData("rank7", "PDL Iconic, cover frame, 5 switches, vertical", "PDLE385C-AW"),
  createData("rank8", "PDL Iconic - Skin Connected Socket Double", "PDLE395CSC-AW"),
  createData("rank9", "Led Flood Light, 20 W, 1800 lm, 4000 K, IP65", "CLITPFLS20LED"),
  createData("rank10", "Led DownLight - 9W - 3000K - IP44", "PDLE300KBC-AG"),
]

export default function RecommendationOutput() {
    const [open, setOpen] = React.useState(false);
    const toggleDrawer = () => {
        setOpen(!open);
    };

    return (
        <Box sx={{ display: 'flex', height: '100%' }}>
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
                    {/* <KeyboardDoubleArrowLeftIcon /> */}
                    </IconButton>
                </Toolbar>
                <Divider />
                <List component="nav">
                    {sixthListItems}
                </List>
            </Drawer>
            <Box>
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
                <Box sx={{ mt: 1, ml: 8 }}>
                  <Table
                    sx={{ minWidth: 650 }}
                    size="small"
                    aria-label="a dense table"
                  >
                    <TableHead>
                      <TableRow>
                        <TableCell>Rank Level</TableCell>
                        <TableCell align="right">Product</TableCell>
                        <TableCell align="right">Number</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows?.map((row) => (
                        <TableRow
                          key={row.Date}
                          sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                        >
                          <TableCell component="th" scope="row">
                            {row.rank}
                          </TableCell>
                          <TableCell align="right">{row.product}</TableCell>
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