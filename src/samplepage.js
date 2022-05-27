import * as React from 'react';
import MuiDrawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import { secondaryListItems } from './listItems';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

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

const drawerWidth = 200;

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

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

export default function SamplePage() {
    const [open, setOpen] = React.useState(true);
    const toggleDrawer = () => {
        setOpen(!open);
    };

    const [checked, setChecked] = React.useState([true, false]);
    const handleChange1 = (event) => {
        setChecked([event.target.checked, event.target.checked]);
    };
    const handleChange2 = (event) => {
        setChecked([event.target.checked, checked[1]]);
    };
    const handleChange3 = (event) => {
        setChecked([checked[0], event.target.checked]);
    };

    return (  
    <Box sx={{ display: 'flex', height: '100%'}}>
        <Drawer variant="permanent" open={open} sx={{ height: '100%' }}>
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
            {secondaryListItems}
          </List>
        </Drawer>
        <Box sx={{ width: '75%' }}>
        <Typography
              component="h1"
              variant="subtitle1"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1, mt: 3, ml: 8 }}
            >
              Pages / Sample
          </Typography>
          <Typography
              component="h1"
              variant="h4"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1, ml: 8, mb: 2 }}
            >
              Sample
          </Typography>
          <Box sx={{ display: 'flex', ml: 15, mt: 5 }}>
            <Box>
                <FormControlLabel
                    label="Info1"
                    control={
                    <Checkbox
                        checked={checked[0] && checked[1]}
                        indeterminate={checked[0] !== checked[1]}
                        onChange={handleChange1}
                    />
                    }
                />
                <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
                    <FormControlLabel
                        label="Child 1"
                        control={<Checkbox checked={checked[0]} onChange={handleChange2} />}
                    />
                    <FormControlLabel
                        label="Child 2"
                        control={<Checkbox checked={checked[1]} onChange={handleChange3} />}
                    />
                </Box>
            </Box>
            <Box>
                <FormControlLabel
                    label="Info2"
                    control={
                    <Checkbox
                        checked={checked[0] && checked[1]}
                        indeterminate={checked[0] !== checked[1]}
                        onChange={handleChange1}
                    />
                    }
                />
                <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
                    <FormControlLabel
                        label="Child 1"
                        control={<Checkbox checked={checked[0]} onChange={handleChange2} />}
                    />
                    <FormControlLabel
                        label="Child 2"
                        control={<Checkbox checked={checked[1]} onChange={handleChange3} />}
                    />
                </Box>
            </Box>
            <Box>
                <FormControlLabel
                    label="Info3"
                    control={
                    <Checkbox
                        checked={checked[0] && checked[1]}
                        indeterminate={checked[0] !== checked[1]}
                        onChange={handleChange1}
                    />
                    }
                />
                <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
                    <FormControlLabel
                        label="Child 1"
                        control={<Checkbox checked={checked[0]} onChange={handleChange2} />}
                    />
                    <FormControlLabel
                        label="Child 2"
                        control={<Checkbox checked={checked[1]} onChange={handleChange3} />}
                    />
                </Box>
            </Box>
            <Box>
                <FormControlLabel
                    label="Info4"
                    control={
                    <Checkbox
                        checked={checked[0] && checked[1]}
                        indeterminate={checked[0] !== checked[1]}
                        onChange={handleChange1}
                    />
                    }
                />
                <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
                    <FormControlLabel
                        label="Child 1"
                        control={<Checkbox checked={checked[0]} onChange={handleChange2} />}
                    />
                    <FormControlLabel
                        label="Child 2"
                        control={<Checkbox checked={checked[1]} onChange={handleChange3} />}
                    />
                </Box>
            </Box>
            </Box>
        <TableContainer component={Paper} sx={{ ml: 7, mt: 4 }}>
        <Table sx={{ minWidth: 400 }} aria-label="customized table">
            <TableHead>
                <TableRow>
                <StyledTableCell>Dessert (100g serving)</StyledTableCell>
                <StyledTableCell align="right">Calories</StyledTableCell>
                <StyledTableCell align="right">Fat&nbsp;(g)</StyledTableCell>
                <StyledTableCell align="right">Carbs&nbsp;(g)</StyledTableCell>
                <StyledTableCell align="right">Protein&nbsp;(g)</StyledTableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {rows.map((row) => (
                <StyledTableRow key={row.name}>
                    <StyledTableCell component="th" scope="row">
                    {row.name}
                    </StyledTableCell>
                    <StyledTableCell align="right">{row.calories}</StyledTableCell>
                    <StyledTableCell align="right">{row.fat}</StyledTableCell>
                    <StyledTableCell align="right">{row.carbs}</StyledTableCell>
                    <StyledTableCell align="right">{row.protein}</StyledTableCell>
                </StyledTableRow>
                ))}
            </TableBody>
        </Table>
        </TableContainer>
        </Box>
    </Box>
    );
}