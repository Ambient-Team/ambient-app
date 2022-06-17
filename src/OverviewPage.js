import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import DataFeedsTable from './OverviewPageComponents/dataFeedsTable';
import ModelTable from './OverviewPageComponents/modelTable';
import RecommendationTable from './OverviewPageComponents/recommendationTable';
import { LineChart, Line, XAxis, ResponsiveContainer } from 'recharts';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { CalendarPicker, DATE_RANGE } from "mui-calendar-picker";
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Select from '@mui/material/Select';
import InputAdornment from '@mui/material/InputAdornment';
import LabelIcon from '@mui/icons-material/Label';
import FormControl from "@mui/material/FormControl";
import { useState, useEffect } from "react";
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, onSnapshot, query } from 'firebase/firestore'

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

// Data for linechart in the middle of the page
function createData(time, amount, a) {
    return { time, amount, a };
}
  
const data = [
    createData('SEP', 0, 100),
    createData('OCT', 600, 700),
    createData('NOV', 1500, 1600),
    createData('DEC', 2400, 2000),
    createData('JAN', 2400, 2000),
    createData('FEB', undefined),
];



// Main function of this page
export default function OverviewPage() {
    const theme = useTheme();
    const [dateRange, setDateRange] = useState(DATE_RANGE);
    const [assets, setAssets] = useState([])

    /* Firestore SDK queries */
    useEffect(() => {
        const assetQuery = query(
        collection(firestore, 'assets'),
        );
        const unsubscribe = onSnapshot(assetQuery, snapshot => {
            setAssets(snapshot.docs.map(doc => ({id: doc.id, data: doc.data() })))
        })

        return () => {
            unsubscribe()
        }
        }, [])

    return (   
        <div> 
        {/* Title */}
        <Typography
            component="h1"
            variant="subtitle1"
            color="inherit"
            noWrap
            sx={{ flexGrow: 1, mt: 3, ml: 8 }}
        >
            Pages / Overview
        </Typography>
        <Typography
            component="h1"
            variant="h4"
            color="inherit"
            noWrap
            sx={{ flexGrow: 1, ml: 8, mb: 2 }}
        >
            Overview
        </Typography>

        <Box>
            {/* Select Portfolio */}
            <FormControl sx={{ ml: 8, minWidth: 200 }} variant= "standard">
                <Select native defaultValue="" id="grouped-native-select" label="Select Portfolio" disableUnderline startAdornment={
                    <InputAdornment position="start">
                        <LabelIcon style={{ color: "#00bcd4"}}/>
                    </InputAdornment>
                    }
                    style={{
                    borderRadius: 25,
                    backgroundColor: "#031c4a",
                    padding: "6px 15px",
                }}
                >
                    <option aria-label="None" value="">Select Portfolio</option>
                    {assets?.map((row) => (
                    <option value={row.data.portfolio}>{row.data.portfolio}</option>
                    ))}
              </Select>
            </FormControl>

            {/* Select Building */}
            <FormControl sx={{ ml: 3, minWidth: 200 }} variant= "standard">
                <Select native defaultValue="" id="grouped-native-select" label="Select Building" disableUnderline startAdornment={
                    <InputAdornment position="start">
                        <LabelIcon style={{ color: "#00bcd4"}}/>
                    </InputAdornment>
                    }
                    style={{
                    borderRadius: 25,
                    backgroundColor: "#031c4a",
                    padding: "6px 15px",
                }}
                >
                    <option aria-label="None" value="">Select Building</option>
                    {assets?.map((row) => (
                    <option value={row.data.building}>{row.data.building}</option>
                    ))}
                </Select>
            </FormControl>

            {/* Select Strata */}
            <FormControl sx={{ ml: 3, minWidth: 200 }} variant= "standard">
                <Select native defaultValue="" id="grouped-native-select" label="Select Strata" disableUnderline startAdornment={
                        <InputAdornment position="start">
                        <LabelIcon style={{ color: "#00bcd4"}}/>
                        </InputAdornment>
                    }
                    style={{
                        borderRadius: 25,
                        backgroundColor: "#031c4a",
                        padding: "6px 15px",
                    }}
                    >
                    <option aria-label="None" value="">Select Strata</option>
                    {assets?.map((row) => (
                        <option value={row.data.strata}>{row.data.strata}</option>
                    ))}
                </Select>
            </FormControl>
        </Box>

        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>

                {/* First area to show carbon score and linechart */}
                <Grid item xs={12} md={8} lg={15}>
                    <Paper
                    sx={{
                        p: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        height: 240,
                    }}
                    >
                        <Grid container spacing={3}>
                            {/* Carbon score area */}
                            <Grid item xs={12} md={8} lg={3}>
                                <Paper
                                    sx={{
                                    p: 1,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    height: 200,
                                    }}
                                >
                                    <Stack direction="row" spacing={2}>
                                        <CalendarPicker
                                            setDateRange={setDateRange}
                                            theme={theme}
                                            openBtnText={"This month"}   // optional
                                            todayBtnText={"Back to Today"}      // optional
                                            confirmBtnText={"Submit"}           // optional
                                        />
                                        <Button variant="outlined" startIcon={<MoreHorizIcon />} style={{ color: "#fff"}}></Button>
                                    </Stack>
                                    <Typography
                                        component="h1"
                                        variant="h3"
                                        color="inherit"
                                        noWrap
                                        sx={{ flexGrow: 1, mt: 3, ml: 1, mb: -8 }}
                                    >
                                        94.6
                                    </Typography>
                                    <Typography
                                        component="h1"
                                        variant="subtitle1"
                                        color="inherit"
                                        noWrap
                                        sx={{ flexGrow: 1, ml: 1, mb: -6 }}
                                    >
                                        carbon score
                                    </Typography>
                                    <FormControlLabel
                                        value="end"
                                        control={<Checkbox icon={<CheckCircleOutlineIcon />} checkedIcon={<CheckCircleOutlineIcon color="primary" />} />}
                                        label="On track"
                                        labelPlacement="On track"
                                        sx={{ ml: 0 }}
                                    />
                                </Paper>
                            </Grid>

                            {/* Linechart area */}
                            <Grid item xs={12} md={8} lg={8}>
                                <Paper
                                    sx={{
                                    p: 1,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    height: 200,
                                    }}
                                >
                                    <ResponsiveContainer>
                                        <LineChart
                                            data={data}
                                            margin={{
                                            top: 16,
                                            right: 16,
                                            bottom: 0,
                                            left: 24,
                                            }}
                                        >
                                            <XAxis
                                                dataKey="time"
                                                stroke={theme.palette.text.secondary}
                                                style={theme.typography.body2}
                                                axisLine={ false }
                                                tickLine={ false }
                                            />
                                            <Line
                                                isAnimationActive={false}
                                                type="monotone"
                                                dataKey="amount"
                                                stroke={theme.palette.primary.main}
                                                dot={false}
                                            />
                                            <Line
                                                isAnimationActive={false}
                                                type="monotone"
                                                dataKey="a"
                                                stroke={theme.palette.primary.main}
                                                dot={false}
                                            />
                                        </LineChart>
                                    </ResponsiveContainer>
                                </Paper>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>

                {/* Data Feeds table */}
                <Grid item xs={12} md={8} lg={4}>
                    <Paper
                    sx={{
                        p: 0.5,
                        display: 'flex',
                        flexDirection: 'column',
                        height: 400,
                    }}
                    >
                        <DataFeedsTable />
                    </Paper>
                </Grid>

                {/* Models table */}
                <Grid item xs={12} md={8} lg={4}>
                    <Paper
                    sx={{
                        p: 0.5,
                        display: 'flex',
                        flexDirection: 'column',
                        height: 400,
                    }}
                    >
                        <ModelTable />
                    </Paper>
                </Grid>

                {/* Recommendations table */}
                <Grid item xs={12} md={8} lg={4}>
                    <Paper
                    sx={{
                        p: 0.5,
                        display: 'flex',
                        flexDirection: 'column',
                        height: 400,
                    }}
                    >
                        <RecommendationTable />
                    </Paper>
                </Grid>
            </Grid>
        </Container>
        </div> 
    );
}