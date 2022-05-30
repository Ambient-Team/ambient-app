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
import { useEffect, useState } from 'react';
import { assertExpressionStatement } from '@babel/types';
import axios from 'axios';
import { SettingsInputAntenna } from '@mui/icons-material';


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

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}



const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
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


  useEffect(() => {
    axios.get('https://us-central1-ambient-systems.cloudfunctions.net/api/connectors')
    .then(res => {
      setConnectors(res.data);
    })

  },[]);

  const [connectors,setConnectors] = useState();
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
                          <TableCell>name</TableCell>
                          <TableCell align="right">status</TableCell>
                          <TableCell align="right">dataType</TableCell>
                          {/* <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                          <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {connectors?.map((row) => (
                          <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                          >
                            <TableCell component="th" scope="row">
                              {row.name}
                            </TableCell>
                            <TableCell align="right">{row.status}</TableCell>
                            <TableCell align="right">{row.dataType}</TableCell>
                            {/* <TableCell align="right">{row.carbs}</TableCell>
                            <TableCell align="right">{row.protein}</TableCell> */}
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