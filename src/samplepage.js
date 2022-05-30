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
import Tooltip from '@mui/material/Tooltip';
import Switch from '@mui/material/Switch';
import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';
import { visuallyHidden } from '@mui/utils';
import PropTypes from 'prop-types';
import { alpha } from '@mui/material/styles';
import TablePagination from '@mui/material/TablePagination';
import TableSortLabel from '@mui/material/TableSortLabel';

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

<<<<<<< HEAD
function createData(name, calories, fat, carbs, protein) {
  return {
    name,
    calories,
    fat,
    carbs,
    protein,
=======
function createData(ID, Type, Name, Added, Status) {
  return {
    ID, 
    Type, 
    Name, 
    Added, 
    Status
>>>>>>> master
  };
}

const rows = [
<<<<<<< HEAD
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Donut', 452, 25.0, 51, 4.9),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
  createData('Honeycomb', 408, 3.2, 87, 6.5),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Jelly Bean', 375, 0.0, 94, 0.0),
  createData('KitKat', 518, 26.0, 65, 7.0),
  createData('Lollipop', 392, 0.2, 98, 0.0),
  createData('Marshmallow', 318, 0, 81, 2.0),
  createData('Nougat', 360, 19.0, 9, 37.0),
  createData('Oreo', 437, 18.0, 63, 4.0),
];
=======
  createData(5940107005302230, 'ST', 'Building Management System', '2022-5-12 11:36 AM', '100%'),
  createData(5940107005302231, 'SS', 'Enterprise Resourse Planning', '2022-5-24 18:22 PM', '85%'),
  createData(5940107005302232, 'ST', 'CMMS', '2022-5-24 20:22 PM', '65%'),
  createData(5940107005302233, 'US', 'Climate risks - Transition', '2022-5-25 13:55 AM', 'PENDING'),
  createData(5940107005302234, 'US', 'Climate risks - Physical', '2022-5-25 13:55 AM', 'PENDING'),
  createData(5940107005302235, 'US', 'Relation discovery', '2022-5-25 13:55 AM', 'PENDING'),
  createData(5940107005302236, 'US', 'Scenario modelling', '2022-5-25 13:55 AM', 'PENDING'),
  createData(5940107005302237, 'US', 'Add carbon sequestration filters to AC system', '2022-5-25 13:55 AM', 'PENDING'),
  createData(5940107005302237, 'US', 'Modify operating schedule', '2022-5-25 13:55 AM', 'PENDING'),
  createData(5940107005302236, 'US', 'TBD', 'TBD', 'PENDING'),
  createData(5940107005302237, 'US', 'TBD', 'TBD', 'PENDING'),
  createData(5940107005302237, 'US', 'TBD', 'TBD', 'PENDING'),
  createData(5940107005302230, 'ST', 'Building Management System', '2022-5-12 11:36 AM', '100%'),
  createData(5940107005302231, 'SS', 'Enterprise Resourse Planning', '2022-5-24 18:22 PM', '85%'),
  createData(5940107005302232, 'ST', 'CMMS', '2022-5-24 20:22 PM', '65%'),
  createData(5940107005302233, 'US', 'Climate risks - Transition', '2022-5-25 13:55 AM', 'PENDING'),
  createData(5940107005302234, 'US', 'Climate risks - Physical', '2022-5-25 13:55 AM', 'PENDING'),
  createData(5940107005302235, 'US', 'Relation discovery', '2022-5-25 13:55 AM', 'PENDING'),
  createData(5940107005302236, 'US', 'Scenario modelling', '2022-5-25 13:55 AM', 'PENDING'),
  createData(5940107005302237, 'US', 'Add carbon sequestration filters to AC system', '2022-5-25 13:55 AM', 'PENDING'),
  createData(5940107005302237, 'US', 'Modify operating schedule', '2022-5-25 13:55 AM', 'PENDING'),
  createData(5940107005302230, 'ST', 'Building Management System', '2022-5-12 11:36 AM', '100%'),
  createData(5940107005302231, 'SS', 'Enterprise Resourse Planning', '2022-5-24 18:22 PM', '85%'),
  createData(5940107005302232, 'ST', 'CMMS', '2022-5-24 20:22 PM', '65%'),
  createData(5940107005302233, 'US', 'Climate risks - Transition', '2022-5-25 13:55 AM', 'PENDING'),
  createData(5940107005302234, 'US', 'Climate risks - Physical', '2022-5-25 13:55 AM', 'PENDING'),
  createData(5940107005302235, 'US', 'Relation discovery', '2022-5-25 13:55 AM', 'PENDING'),
  createData(5940107005302236, 'US', 'Scenario modelling', '2022-5-25 13:55 AM', 'PENDING'),
  createData(5940107005302237, 'US', 'Add carbon sequestration filters to AC system', '2022-5-25 13:55 AM', 'PENDING'),
  createData(5940107005302237, 'US', 'Modify operating schedule', '2022-5-25 13:55 AM', 'PENDING'),
]
>>>>>>> master

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// This method is created for cross-browser compatibility, if you don't
// need to support IE11, you can use Array.prototype.sort() directly
function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {
<<<<<<< HEAD
    id: 'name',
    numeric: false,
    disablePadding: true,
    label: 'Dessert (100g serving)',
  },
  {
    id: 'calories',
    numeric: true,
    disablePadding: false,
    label: 'Calories',
  },
  {
    id: 'fat',
    numeric: true,
    disablePadding: false,
    label: 'Fat (g)',
  },
  {
    id: 'carbs',
    numeric: true,
    disablePadding: false,
    label: 'Carbs (g)',
  },
  {
    id: 'protein',
    numeric: true,
    disablePadding: false,
    label: 'Protein (g)',
=======
    id: 'ID',
    numeric: false,
    disablePadding: true,
    label: 'ID',
  },
  {
    id: 'Tyep',
    numeric: true,
    disablePadding: false,
    label: 'Data Type',
  },
  {
    id: 'Name',
    numeric: true,
    disablePadding: false,
    label: 'Name',
  },
  {
    id: 'Added',
    numeric: true,
    disablePadding: false,
    label: 'Data Added',
  },
  {
    id: 'Status',
    numeric: true,
    disablePadding: false,
    label: 'Data Engineering Status',
>>>>>>> master
  },
];

function EnhancedTableHead(props) {
  const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } =
    props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              'aria-label': 'select all desserts',
            }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const EnhancedTableToolbar = (props) => {
  const { numSelected } = props;

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
        }),
      }}
    >
      {numSelected > 0 ? (
        <Typography
          sx={{ flex: '1 1 100%' }}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
        </Typography>
      ) : (
        <Typography
          sx={{ flex: '1 1 100%' }}
          variant="h6"
          id="tableTitle"
          component="div"
        >
<<<<<<< HEAD
          Nutrition
=======
          Sample
>>>>>>> master
        </Typography>
      )}

      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Filter list">
          <IconButton>
            <FilterListIcon />
          </IconButton>
        </Tooltip>
      )}
    </Toolbar>
  );
};

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

export default function EngineeringPage() {
    const [open, setOpen] = React.useState(false);
    const toggleDrawer = () => {
        setOpen(!open);
    };

    // const [checked, setChecked] = React.useState([true, false]);
    // const handleChange1 = (event) => {
    //     setChecked([event.target.checked, event.target.checked]);
    // };
    // const handleChange2 = (event) => {
    //     setChecked([event.target.checked, checked[1]]);
    // };
    // const handleChange3 = (event) => {
    //     setChecked([checked[0], event.target.checked]);
    // };

    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState('calories');
    const [selected, setSelected] = React.useState([]);
    const [page, setPage] = React.useState(0);
    const [dense, setDense] = React.useState(false);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const handleRequestSort = (event, property) => {
      const isAsc = orderBy === property && order === 'asc';
      setOrder(isAsc ? 'desc' : 'asc');
      setOrderBy(property);
    };

    const handleSelectAllClick = (event) => {
      if (event.target.checked) {
        const newSelecteds = rows.map((n) => n.name);
        setSelected(newSelecteds);
        return;
      }
      setSelected([]);
    };

    const handleClick = (event, name) => {
      const selectedIndex = selected.indexOf(name);
      let newSelected = [];

      if (selectedIndex === -1) {
        newSelected = newSelected.concat(selected, name);
      } else if (selectedIndex === 0) {
        newSelected = newSelected.concat(selected.slice(1));
      } else if (selectedIndex === selected.length - 1) {
        newSelected = newSelected.concat(selected.slice(0, -1));
      } else if (selectedIndex > 0) {
        newSelected = newSelected.concat(
          selected.slice(0, selectedIndex),
          selected.slice(selectedIndex + 1),
        );
      }

      setSelected(newSelected);
    };

    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(parseInt(event.target.value, 10));
      setPage(0);
    };

    const handleChangeDense = (event) => {
      setDense(event.target.checked);
    };

    const isSelected = (name) => selected.indexOf(name) !== -1;

    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows =
      page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

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
<<<<<<< HEAD
        <Box sx={{ width: '75%' }}>
=======
        <Box sx={{ width: '90%' }}>
>>>>>>> master
        <Typography
              component="h1"
              variant="subtitle1"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1, mt: 3, ml: 8 }}
            >
              Ambient / Data Engineering / Data Connectors
          </Typography>
          <Typography
              component="h1"
              variant="h4"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1, ml: 8, mb: 2 }}
            >
              Data Connectors
          </Typography>
          <Box sx={{ display: 'flex', ml: 15, mt: 5 }}>
            {/* <Box>
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
            </Box> */}
            {/* <Box>
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
            </Box> */}
            </Box>
        <Box sx={{ p: 3 }}>
        <Paper sx={{ width: '100%', mb: 2 }}>
        <EnhancedTableToolbar numSelected={selected.length} />
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={dense ? 'small' : 'medium'}
          >
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {/* if you don't need to support IE11, you can replace the `stableSort` call with:
                 rows.slice().sort(getComparator(order, orderBy)) */}
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
<<<<<<< HEAD
                  const isItemSelected = isSelected(row.name);
=======
                  const isItemSelected = isSelected(row.Date);
>>>>>>> master
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
<<<<<<< HEAD
                      onClick={(event) => handleClick(event, row.name)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.name}
=======
                      onClick={(event) => handleClick(event, row.Date)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.Date}
>>>>>>> master
                      selected={isItemSelected}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          color="primary"
                          checked={isItemSelected}
                          inputProps={{
                            'aria-labelledby': labelId,
                          }}
                        />
                      </TableCell>
                      <TableCell
                        component="th"
                        id={labelId}
                        scope="row"
                        padding="none"
                      >
<<<<<<< HEAD
                        {row.name}
                      </TableCell>
                      <TableCell align="right">{row.calories}</TableCell>
                      <TableCell align="right">{row.fat}</TableCell>
                      <TableCell align="right">{row.carbs}</TableCell>
                      <TableCell align="right">{row.protein}</TableCell>
=======
                        {row.ID}
                      </TableCell>
                      <TableCell align="right">{row.Type}</TableCell>
                      <TableCell align="right">{row.Name}</TableCell>
                      <TableCell align="right">{row.Added}</TableCell>
                      <TableCell align="right">{row.Status}</TableCell>
>>>>>>> master
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: (dense ? 33 : 53) * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
        <FormControlLabel
          control={<Switch checked={dense} onChange={handleChangeDense} />}
          label="Dense padding"
        />
        </Box>
        </Box>
    </Box>
    );
}