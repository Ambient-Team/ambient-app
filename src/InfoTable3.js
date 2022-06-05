import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import FolderIcon from '@mui/icons-material/Folder';
import DeleteIcon from '@mui/icons-material/Delete';
import CloudCircleTwoToneIcon from '@mui/icons-material/CloudCircleTwoTone';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Divider from '@mui/material/Divider';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Button from '@mui/material/Button';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import ButtonBase from '@mui/material/ButtonBase';
import { useState, useEffect } from "react";
import { initializeApp } from 'firebase/app';
import { getFirestore, doc, addDoc, getDoc, setDoc, collection, onSnapshot, query, where, getDocs } from 'firebase/firestore'

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

export default function InfoTable1() {
  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);

  const [examples, setExamples] = useState([])

  useEffect(() => {
    const testQuery = query(
      collection(firestore, 'Test'),
    );

    const unsubscribe = onSnapshot(testQuery, snapshot => {
      setExamples(snapshot.docs.map(doc => ({id: doc.id, data: doc.data() })))
    })

    return () => {
      unsubscribe()
    }
  }, [])

  return (
    <Box sx={{ flexGrow: 1, maxWidth: 752 }}>
        <ListItem>
            <InsertPhotoIcon color="primary" sx={{ fontSize: 40, mr: 1 }} />
            <Typography
              component="h1"
              variant="subtitle1"
              color="inherit"
              noWrap
              sx={{ fontWeight: 'bold' }}
            >
              Recommandations
          </Typography>
            <FormControlLabel
                value="end"
                control={<Checkbox icon={<CheckCircleIcon />} checkedIcon={<CheckCircleIcon color="primary" />} />}
                label="Updated"
                labelPlacement="Updated"
                />
            </ListItem>
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
              SETTINGS
          </Typography>
        <Divider sx={{ my: 1 }} />
        <Demo sx= {{ mt: 1, ml: 1, mr: 1, height: 230, borderRadius: 5 }}>
        <Box sx={{ minHeight: 240 }}>
        <List dense={dense}>
          {examples?.map((row) => (
                <ListItem sx={{ mt: -1, mb: -1 }}
                  secondaryAction={
                    <IconButton edge="end" aria-label="delete">
                      <CheckCircleIcon color="warning" />
                    </IconButton>
                  }
                >
                  <ListItemText
                    primary={row.data.request}
                    secondary={secondary ? 'Secondary text' : null}
                  />
                </ListItem>
            ))}
                {/* <ListItem sx={{ mt: -1, mb: -1 }}
                  secondaryAction={
                    <IconButton edge="end" aria-label="delete">
                      <MoreHorizIcon />
                    </IconButton>
                  }
                >
                  <ListItemText
                    primary="Add carbon sequestration filters to AC system"
                    secondary={secondary ? 'Secondary text' : null}
                  />
                </ListItem>
               <ListItem sx={{ mt: -1, mb: -1 }}
                  secondaryAction={
                    <IconButton edge="end" aria-label="delete">
                      <MoreHorizIcon />
                    </IconButton>
                  }
                >
                  <ListItemText
                    primary="Modify operating schedule"
                    secondary={secondary ? 'Secondary text' : null}
                  />
                </ListItem> */}
            </List>
          </Box>
          </Demo>
          <Box sx={{ ml: 15, mt: 2 }}>
            <Button variant="contained" color="primary" sx={{ borderRadius: 5 }} position="absolute">
            <ButtonBase href='/Dashboard/Output' fullWidth>
              See more
            </ButtonBase>
            </Button>
          </Box>
    </Box>
  );
}