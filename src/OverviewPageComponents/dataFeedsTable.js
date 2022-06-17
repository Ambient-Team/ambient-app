import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import CloudCircleIcon from '@mui/icons-material/CloudCircle';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Divider from '@mui/material/Divider';
import FormDialog from './Dialog'
import { useState, useEffect } from "react";
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, onSnapshot, query, limit } from 'firebase/firestore'

// Connect to current firebase project
const firebaseApp = initializeApp({
  apiKey: "AIzaSyBamRPS6NxxPg7lplFrxZd36fLWg9ZUTDY",
  authDomain: "ambient-systems.firebaseapp.com",
  databaseURL: "https://ambient-systems-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "ambient-systems",
  storageBucket: "ambient-systems.appspot.com",
  messagingSenderId: "1001740093061",
  appId: "1:1001740093061:web:b516ca06c0e80199b90bec"
});
const firestore = getFirestore(firebaseApp);

const Demo = styled('div')(({ theme }) => ({
  backgroundColor: "rgba(158,159,173,0.13)",
}));



// Main function of this page
export default function DataFeedsTable() {
  const [connectors, setConnectors] = useState([])

  /* Firestore SDK queries */
  useEffect(() => {
    const connectorQuery = query(
      collection(firestore, 'connectors'),
      limit(5)
    );

    const unsubscribe = onSnapshot(connectorQuery, snapshot => {
      setConnectors(snapshot.docs.map(doc => ({id: doc.id, data: doc.data() })))
    })

    return () => {
      unsubscribe()
    }
  }, [])

  return (
    <Box sx={{ flexGrow: 1, maxWidth: 752 }}>

        {/* Title */}
        <ListItem>
            <CloudCircleIcon color="primary" sx={{ fontSize: 40, mr: 1 }} />
            <Typography
                component="h1"
                variant="h6"
                color="inherit"
                noWrap
                sx={{ mr: 5, fontWeight: 'bold' }}
            >
              Data Feeds
            </Typography>
            <FormControlLabel
                value="end"
                control={<Checkbox icon={<CheckCircleIcon />} checkedIcon={<CheckCircleIcon color="primary" />} />}
                label="Connected"
                labelPlacement="Connected"
            />
        </ListItem>

        {/* Divider */}
        <Typography
            component="subtitle2"
            noWrap
            sx={{ ml: 7, fontWeight: 'light', fontSize: 10, textAlign: 'left' }}
        >
            NAME
        </Typography>
        <Typography
            component="subtitle2"
            noWrap
            sx={{ ml: 20, fontWeight: 'light', fontSize: 10, textAlign: 'right' }}
        >
            PROGRESS
        </Typography>
        <Divider sx={{ my: 1 }} />

        <Demo sx= {{ mt: 1, ml: 1, mr: 1, height: 230, borderRadius: 5 }}>
        {/* List of feeds shown by SDKs */}
        <Box sx={{ minHeight: 240 }}>
            <List>
                {connectors?.map((row) => (
                    <ListItem sx={{ mt: -1, mb: -1 }}
                        secondaryAction={
                            <IconButton edge="end" aria-label="delete">
                                <CheckCircleIcon color="warning" />
                            </IconButton>
                        }
                    >
                        <ListItemText
                            primary={row.data.name}
                        />
                    </ListItem>
                ))}
            </List>
        </Box>

        {/* Dialog for users to add their request */}
        <FormDialog />

        </Demo>
    </Box>
  );
}