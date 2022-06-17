import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import ButtonBase from '@mui/material/ButtonBase';
import { useState, useEffect } from "react";
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, onSnapshot, query, limit, orderBy } from 'firebase/firestore'

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
export default function RecommendationTable() {
    const [outputs, setOutputs] = useState([])

    /* Firestore SDK queries */
    useEffect(() => {
        const outputQuery = query(
        collection(firestore, 'outputs'),
        limit(5),
        orderBy('rank')
        );

        const unsubscribe = onSnapshot(outputQuery, snapshot => {
        setOutputs(snapshot.docs.map(doc => ({id: doc.id, data: doc.data() })))
        })

        return () => {
        unsubscribe()
        }
    }, [])

    return (
        <Box sx={{ flexGrow: 1, maxWidth: 752 }}>
            {/* Title */}
            <ListItem>
                <InsertPhotoIcon color="primary" sx={{ fontSize: 40, mr: 1 }} />
                <Typography
                    component="h1"
                    variant="subtitle1"
                    color="inherit"
                    noWrap
                    sx={{ fontWeight: 'bold', mr: 3 }}
                >
                    Recommendations
                </Typography>
                <FormControlLabel
                    value="end"
                    control={<Checkbox icon={<CheckCircleIcon />} checkedIcon={<CheckCircleIcon color="primary" />} />}
                    label="Updated"
                    labelPlacement="Updated"
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
                sx={{ ml: 25, fontWeight: 'light', fontSize: 10, textAlign: 'right' }}
            >
                ORDER
            </Typography>
            <Divider sx={{ my: 1 }} />

            <Demo sx= {{ mt: 1, ml: 1, mr: 1, height: 230, borderRadius: 5 }}>
            
            {/* List of recommendations shown by SDKs */}
            <Box sx={{ minHeight: 240 }}>
                <List>
                    {outputs?.map((row) => (
                        <ListItem sx={{ mt: -1, mb: -1 }}
                        secondaryAction={
                            <ListItemText
                            primary={row.data.rank}
                            sx={{ minWidth: 20}}
                            primaryTypographyProps={{ style: { color: "yellow" } }}
                        />
                        }
                        >
                            <ListItemText
                                primary={row.data.product}
                                sx={{ maxWidth: 200 }}
                            />
                        </ListItem>
                    ))}
                </List>
            </Box>
            </Demo>
            
            {/* Button for jumping to Output page */}
            <Box sx={{ ml: 15, mt: 2 }}>
                <Button variant="contained" color="primary" sx={{ borderRadius: 5 }} position="absolute">
                    <ButtonBase href='/Dashboard/Output/Recommendation' fullWidth>
                        See more
                    </ButtonBase>
                </Button>
            </Box>
        </Box>
    );
}