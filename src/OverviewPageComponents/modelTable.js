import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import SpeedIcon from '@mui/icons-material/Speed';
import ButtonBase from '@mui/material/ButtonBase';
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
export default function ModelTable() {
  const [models, setModels] = useState([])

  /* Firestore SDK queries */
  useEffect(() => {
    const modelQuery = query(
      collection(firestore, 'models'),
      limit(5)
    );

    const unsubscribe = onSnapshot(modelQuery, snapshot => {
      setModels(snapshot.docs.map(doc => ({id: doc.id, data: doc.data() })))
    })

    return () => {
      unsubscribe()
    }
  }, [])

  return (
    <Box sx={{ flexGrow: 1, maxWidth: 752 }}>
        {/* Title */}
        <ListItem>
            <SpeedIcon color="primary" sx={{ fontSize: 40, mr: 1 }} />
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ mr: 5, fontWeight: 'bold' }}
            >
              Models
            </Typography>
            <FormControlLabel
                value="end"
                control={<Checkbox icon={<CheckCircleIcon />} checkedIcon={<CheckCircleIcon color="primary" />} />}
                label="Running"
                labelPlacement="Running"
                sx={{ ml: 6 }}
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

        {/* List of models shown by SDKs */}
        <Box sx={{ minHeight: 240 }}>
            <List>
                {models?.map((row) => (
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
        
        {/* Button for jumping to Model page */}
        <Box sx={{ ml: 14, mt: 1 }}>
            <Button variant="contained" color="primary" position="absolute" sx={{ borderRadius: 5 }}>
              <ButtonBase href='/Dashboard/ML' fullWidth>
                See more
              </ButtonBase>
            </Button>
        </Box>
        </Demo>
    </Box>
  );
}