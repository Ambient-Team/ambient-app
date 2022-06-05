import { styled } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import * as React from 'react';
import { useState, useEffect } from "react";
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import { fifthListItems } from './listItems';
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import TableHead from "@mui/material/TableHead";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';




// Import firebase functions to use
import { initializeApp } from 'firebase/app';
import { getFirestore, doc, addDoc, getDoc, setDoc, collection, onSnapshot, query, where, getDocs } from 'firebase/firestore'

// These parameters let us connect to our project
const firebaseApp = initializeApp({
  apiKey: "AIzaSyBamRPS6NxxPg7lplFrxZd36fLWg9ZUTDY",
  authDomain: "ambient-systems.firebaseapp.com",
  databaseURL: "https://ambient-systems-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "ambient-systems",
  storageBucket: "ambient-systems.appspot.com",
  messagingSenderId: "1001740093061",
  appId: "1:1001740093061:web:b516ca06c0e80199b90bec"
});
// Connect to the related firestore
const firestore = getFirestore(firebaseApp);
// Specify your Collection and Document
const Test = doc(firestore, 'Test/Frey_test')
const TestCollection = collection(firestore, 'Test')

// Create a new Collection and Document and write some data
function writeTest() {
  const docData = {
    id: 0,
    name: 'Frey',
    token: '123',
    request: 'Building management system',
  };

  // write to this document, if not exist, create one
  setDoc(Test, docData, { merge: true });
  // Done, check the firestore console
}

// Write some new data
function addTest() {
  const newDoc = addDoc(TestCollection, {
    id: 1,
    name: 'TBD',
    token: '1234',
    request: 'Enterprise resouce planning',
  });
}

// Read an existing Document from firestore 
async function readTest() {
  const snapShot = await getDoc(Test);
  if (snapShot.exists()) {
    const docData = snapShot.data();
    console.log(docData);
  }
  else {
    console.log('No data found');
  }
}

// Keep updating the data when modifying the document
function listenToTest() {
  onSnapshot(Test, (docSnapshot) => {
    if (docSnapshot.exists()) {
      const docData = docSnapshot.data();
      console.log(docData);
    }
    else {
      console.log('No data found');
    }
  })
}

// Query documents to get the data you want
function queryForTest() {
  const testQuery = query(
    collection(firestore, 'Test'),
    where('id', '==', 1)
  );

  onSnapshot(testQuery, (querySnapshot) => {
    querySnapshot.forEach((snap) => {
      console.log(snap.data())
    });
  });
}


// Call this functions
// writeTest()
// addTest()
// readTest()
// listenToTest()
// queryForTest()







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

export default function ProfilePage() {
    const [open, setOpen] = React.useState(false);
    const toggleDrawer = () => {
        setOpen(!open);
    };

    const [examples, setExamples] = useState([])

    useEffect(() => {
      // const testQuery = query(
      //   collection(firestore, 'Test'),
      //   where('id', '==', 1)
      // );
      const exampleCollectionRef = collection(firestore, 'Test')
      const unsubscribe = onSnapshot(exampleCollectionRef, snapshot => {
        setExamples(snapshot.docs.map(doc => ({id: doc.id, data: doc.data() })))
      })

      return () => {
        unsubscribe()
      }
    }, [])

    // useEffect(() => {
    //   getExamples()
    // }, [])

    // useEffect(() => {
    //   console.log(examples)
    // }, [examples])

    // function getExamples() {
    //   const exampleCollectionRef = collection(firestore, 'Test')
    //   getDocs(exampleCollectionRef)
    //     .then(response => {
    //       const example = response.docs.map(doc => ({
    //         data: doc.data(), 
    //         id: doc.id,
    //       }))
    //       setExamples(example)
    //     })
    //     .catch(error => console.log(error.message))
    // }

    const [input, setInput] = useState([])
    const [name, setValue1] = useState();
    const [request, setValue2] = useState();

    function handleInput(e) {
      e.preventDefault()
      if (name === '' || request === '') {
        return 
      }
      
      const exampleCollectionRef = collection(firestore, 'Test')
      addDoc(exampleCollectionRef, {name, request})
        .then(response => {
          console.log(response.id)
        })
        .catch(error => {
          console.log(error.message)
        })
    }

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
                    {fifthListItems}
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
                        Ambient / Profile / Personal Info
                    </Typography>
                    <Typography
                        component="h1"
                        variant="h4"
                        color="inherit"
                        noWrap
                        sx={{ flexGrow: 1, ml: 8, mb: 2 }}
                        >
                        Personal Info
                    </Typography>
                </Box>
                <Box>
                <TableContainer component={Paper} sx={{ mt: 3, ml: 8 }}>
                  <Table sx={{ minWidth: 650 }} size="small">
                    <TableHead>
                      <TableRow>
                        <TableCell>1</TableCell>
                        <TableCell align="right">2</TableCell>
                        <TableCell align="right">3</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {examples?.map((row) => (
                        <TableRow
                          key={row.data.id}
                          sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                        >
                          <TableCell component="th" scope="row">
                            {row.data.token}
                          </TableCell>
                          <TableCell align="right">{row.data.name}</TableCell>
                          <TableCell align="right">{row.data.request}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                  </TableContainer>
                </Box>
                <Box sx={{ mt: 3, ml: 8 }}>
                  <TextField id="name" label="name" variant="filled" value={name} onChange={(e) => setValue1(e.target.value)}/>
                  <TextField id="request" label="request" variant="filled" sx={{ ml: 3 }} value={request} onChange={(e) => setValue2(e.target.value)}/>
                  <Button variant="contained" sx={{ ml: 3, mt: 2 }} onClick={handleInput}>Input</Button>
                </Box>
              </Box>
        </Box>
    );
}
