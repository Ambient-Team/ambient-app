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
import { fourthListItems } from './listItems';
import { forML } from './Selects';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl, { useFormControl } from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

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

function createData(Date, Electricity, Fans, Cooling, HeatingE, InteriorLightsE, InteriorEquipmentE, Gas, HeatingG, InteriorEquipmentG, WaterHeater) {
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
    WaterHeater
  };
}

const rows = [
  createData('12/29 1:00:00', 22.06190349, 3.586220833, 0, 0, 4.58992533, 8.1892, 132.9773352, 122.1321, 3.33988, 7.505355191, ),
  createData('12/29 2:00:00', 14.62914322, 0, 0, 0, 1.52997511, 7.4902, 3.35988, 0, 3.33988, 0.02, ),
  createData('12/29 3:00:00', 14.65008521, 0, 0, 0, 1.52997511, 7.4902, 3.931972039, 0, 3.33988, 0.5920920389, ),
  createData('12/29 4:00:00', 14.66351449, 0, 0, 0, 1.52997511, 7.4902, 3.35988, 0, 3.33988, 0.02, ),
  createData('12/29 5:00:00', 15.32984038, 0, 0, 0, 1.52997511, 7.4902, 3.931926179, 0, 3.33988, 0.5920461794, ),
  createData('12/29 6:00:00', 22.68904746, 3.586220833, 0.006434058438, 0, 4.58992533, 8.1892, 133.3060368, 124.9363368, 8.3497, 0.02, ),
  createData('12/29 7:00:00', 38.36144457, 3.586220833, 0.007452121881, 0, 9.179850659, 19.4245, 139.1675673, 116.7002765, 16.6994, 5.767890713, ),
  createData('12/29 8:00:00', 45.60649679, 3.586220833, 0.01134535711, 0, 9.179850659, 26.9147, 152.7301514, 106.0651914, 25.0491, 21.61586002, ),
  createData('12/29 9:00:00', 45.61333227, 3.586220833, 0.002276280614, 0, 9.179850659, 26.9147, 160.4578865, 106.6412075, 33.3988, 20.41787897, ),
  createData('12/29 10:00:00', 38.12418039, 3.586220833, 0, 0, 9.179850659, 19.4245, 149.9123047, 108.5866214, 25.0491, 16.27658336, ),
  createData('12/29 11:00:00', 42.43764988, 3.586220833, 0.004180990232, 0, 9.179850659, 26.9147, 166.080028, 109.8178583, 41.7485, 14.51366969, ),
  createData('12/29 12:00:00', 42.14814635, 3.586220833, 0, 0, 9.179850659, 26.9147, 159.0155719, 100.9853301, 41.7485, 16.28174184, ),
  createData('12/29 13:00:00', 41.42875832, 3.586220833, 0, 0, 9.179850659, 26.9147, 148.2126997, 91.95140497, 41.7485, 14.51279469, ),
  createData('12/29 14:00:00', 33.90631816, 3.586220833, 0, 0, 9.179850659, 19.4245, 141.083797, 94.35261253, 33.3988, 13.33238444, ),
  createData('12/29 15:00:00', 33.904707, 3.586220833, 0, 0, 9.179850659, 19.4245, 136.6371292, 100.5907822, 25.0491, 10.99724705, ),
  createData('12/29 16:00:00', 36.00694752, 3.586220833, 0, 0, 9.179850659, 19.4245, 149.3854362, 104.9886783, 33.3988, 10.99795781, ),
  createData('12/29 17:00:00', 45.55532902, 3.586220833, 0.00766026511, 0, 9.179850659, 26.9147, 163.6547351, 102.5575177, 50.0982, 10.9990174, ),
  createData('12/29 18:00:00', 45.56300932, 3.586220833, 0.002421050972, 0, 9.179850659, 26.9147, 160.0988638, 95.48689867, 50.0982, 14.51376513, ),
  createData('12/29 19:00:00', 45.57359577, 3.586220833, 0.002799838295, 0, 9.179850659, 26.9147, 156.4556747, 86.52579721, 50.0982, 19.83167747, ),
  createData('12/29 20:00:00', 38.07381126, 3.586220833, 0, 0, 9.179850659, 19.4245, 143.8003621, 88.19794574, 33.3988, 22.20361635, ),
  createData('12/29 21:00:00', 38.06500163, 3.586220833, 0, 0, 9.179850659, 19.4245, 139.000659, 87.54574768, 33.3988, 18.05611129, ),
  createData('12/29 22:00:00', 38.02508985, 3.586220833, 0, 0, 9.179850659, 19.4245, 136.3737216, 91.49051406, 25.0491, 19.83410757, ),
  createData('12/29 23:00:00', 38.01805862, 3.586220833, 0, 0, 9.179850659, 19.4245, 125.357708, 92.37326294, 16.6994, 16.28504507, ),
  createData('12/30 1078200:00:00', 38.82724096, 3.586220833, 0, 0, 9.179850659, 19.4245, 111.1181713, 93.51674824, 8.3497, 9.251723095, ),
  createData('12/30 1:00:00', 22.06735077, 3.586220833, 0, 0, 4.58992533, 8.1892, 111.3820297, 100.5374128, 3.33988, 7.504736938, ),
  createData('12/30 2:00:00', 14.64123911, 0, 0, 0, 1.52997511, 7.4902, 3.931969031, 0, 3.33988, 0.592089031, ),
  createData('12/30 3:00:00', 14.66458751, 0, 0, 0, 1.52997511, 7.4902, 3.35988, 0, 3.33988, 0.02, ),
  createData('12/30 4:00:00', 14.67871671, 0, 0, 0, 1.52997511, 7.4902, 3.931974934, 0, 3.33988, 0.5920949342, ),
  createData('12/30 5:00:00', 14.8303736, 0, 0, 0, 1.52997511, 7.4902, 3.35988, 0, 3.33988, 0.02, ),
  createData('12/30 6:00:00', 22.18838399, 3.586220833, 0.01007662763, 0, 4.58992533, 8.1892, 110.8837372, 101.9419881, 8.3497, 0.5920490879, ),
  createData('12/30 7:00:00', 38.14111701, 3.586220833, 0.007926607867, 0, 9.179850659, 19.4245, 118.3425678, 96.45005589, 16.6994, 5.193111877, ),
  createData('12/30 8:00:00', 45.60850018, 3.586220833, 0.007761543559, 0, 9.179850659, 26.9147, 116.9500855, 86.13261817, 25.0491, 5.768367278, ),
  createData('12/30 9:00:00', 45.61511444, 3.586220833, 0, 0, 9.179850659, 26.9147, 123.9630991, 84.7964587, 33.3988, 5.767840356, ),
  createData('12/30 10:00:00', 38.13601618, 3.586220833, 0.003952462811, 0, 9.179850659, 19.4245, 130.1510643, 87.05096187, 25.0491, 18.0510024, ),
  createData('12/30 11:00:00', 42.45132166, 3.586220833, 0.004545879558, 0, 9.179850659, 26.9147, 148.2565919, 89.6443871, 41.7485, 16.86370477, ),
  createData('12/30 12:00:00', 42.16038638, 3.586220833, 0, 0, 9.179850659, 26.9147, 143.9361418, 84.13207979, 41.7485, 18.05556199, ),
  createData('12/30 13:00:00', 41.44042687, 3.586220833, 0, 0, 9.179850659, 26.9147, 142.4495657, 82.64882733, 41.7485, 18.05223838, ),
  createData('12/30 14:00:00', 33.91705102, 3.586220833, 0, 0, 9.179850659, 19.4245, 132.2633891, 82.58096205, 33.3988, 16.28362704, ),
];

function MyFormHelperText() {
  const { focused } = useFormControl() || {};

  const helperText = React.useMemo(() => {
    if (focused) {
      return 'The format for this is : TBD';
    }

    return 'Or please enter the features you want manully here';
  }, [focused]);

  return <FormHelperText>{helperText}</FormHelperText>;
}

export default function MachineLearningPage() {
    const [open, setOpen] = React.useState(false);
    const toggleDrawer = () => {
        setOpen(!open);
    };

    const [table, setTable] = React.useState(false);
    const handleClickOpen = () => {
      setTable(true);
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
                    {fourthListItems}
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
                </Box>
                <Box sx={{ width: '100%', display: 'flex' }}>
                    { forML }
                </Box>
                <Box component="form" noValidate autoComplete="off" sx={{ mt: 3, ml: 8 }}>
                  <FormControl sx={{ width: '100ch' }}>
                    <OutlinedInput placeholder="Other features" />
                    <MyFormHelperText />
                  </FormControl>
                </Box>
                <Box>
                  <Button variant="contained" color="primary" sx={{ mt: 3, ml: 8, borderRadius: 5 }} position="absolute" onClick={handleClickOpen}>
                      Generate result
                  </Button>
                </Box>
                <Box>
                  <TableContainer component={Paper} sx={{ mt: 3, ml: 8 }}>
                    <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                      <TableHead>
                        <TableRow>
                          <TableCell>Date/Time</TableCell>
                          <TableCell align="right">Electricity:Facility [kW](Hourly)</TableCell>
                          <TableCell align="right">Fans:Electricity [kW](Hourly)</TableCell>
                          <TableCell align="right">Cooling:Electricity [kW](Hourly)</TableCell>
                          <TableCell align="right">Heating:Electricity [kW](Hourly)</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {rows.map((row) => (
                          <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                          >
                            <TableCell component="th" scope="row">
                              {row.Date}
                            </TableCell>
                            <TableCell align="right">{row.Electricity}</TableCell>
                            <TableCell align="right">{row.Fans}</TableCell>
                            <TableCell align="right">{row.Cooling}</TableCell>
                            <TableCell align="right">{row.HeatingE}</TableCell>
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