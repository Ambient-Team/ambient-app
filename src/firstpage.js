import InfoTable1 from './InfoTable';
import InfoTable2 from './InfoTable2';
import InfoTable3 from './InfoTable3';
import Chart from './Chart';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
// import { forOverview } from './Selects';
import Select from '@mui/material/Select';
import InputAdornment from '@mui/material/InputAdornment';
import LabelIcon from '@mui/icons-material/Label';
import FormControl, { useFormControl } from "@mui/material/FormControl";
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

export default function OverviewPage() {
  const [examples, setExamples] = useState([])

  useEffect(() => {
    const testQuery = query(
      collection(firestore, 'Test'),
      where('id', '==', 1)
    );
      const unsubscribe = onSnapshot(testQuery, snapshot => {
        setExamples(snapshot.docs.map(doc => ({id: doc.id, data: doc.data() })))
      })

      return () => {
        unsubscribe()
      }
    }, [])

    return (   
        <div> 
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
            <FormControl sx={{ ml: 8, minWidth: 200 }} variant= "standard">
              {examples?.map((row) => (
              <Select native defaultValue="" id="grouped-native-select" label="Select feature1" disableUnderline startAdornment={
                  <InputAdornment position="start">
                    <LabelIcon style={{ color: "#00bcd4"}}/>
                  </InputAdornment>
                }
                style={{
                  borderRadius: 25,
                  backgroundColor: "#031c4a",
                  padding: "6px 15px",
              }}
              // value={value1}
              // onChange={(e) => {setValue1(e.target.value)}}
              >
                <option aria-label="None" value="">Select feature1</option>
                  <option value={row.data.id}>{row.data.id}</option>
                  <option value={row.data.name}>{row.data.name}</option>
                  <option value={row.data.request}>{row.data.request}</option>
                  <option value={row.data.token}>{row.data.token}</option>
                  {/* <option value={row.data.name}>{row.data.name}</option>
                  <option value={row.data.request}>{row.data.request}</option>
                  <option value={row.data.token}>{row.data.token}</option> */}
              </Select>
              ))}
            </FormControl>
            <FormControl sx={{ ml: 3, minWidth: 200 }} variant= "standard">
            {examples?.map((row) => (
              <Select native defaultValue="" id="grouped-native-select" label="Select feature1" disableUnderline startAdornment={
                  <InputAdornment position="start">
                    <LabelIcon style={{ color: "#00bcd4"}}/>
                  </InputAdornment>
                }
                style={{
                  borderRadius: 25,
                  backgroundColor: "#031c4a",
                  padding: "6px 15px",
              }}
              // value={value2}
              // onChange={(e) => {setValue2(e.target.value)}}
              >
                <option aria-label="None" value="">Select feature2</option>
                  <option value={row.data.id}>{row.data.id}</option>
                  <option value={row.data.name}>{row.data.name}</option>
                  <option value={row.data.request}>{row.data.request}</option>
                  <option value={row.data.token}>{row.data.token}</option>
                  {/* <option value={row.data.name}>{row.data.name}</option>
                  <option value={row.data.request}>{row.data.request}</option>
                  <option value={row.data.token}>{row.data.token}</option> */}
              </Select>
              ))}
            </FormControl>
            <FormControl sx={{ ml: 3, minWidth: 200 }} variant= "standard">
              {examples?.map((row) => (
                <Select native defaultValue="" id="grouped-native-select" label="Select feature1" disableUnderline startAdornment={
                    <InputAdornment position="start">
                      <LabelIcon style={{ color: "#00bcd4"}}/>
                    </InputAdornment>
                  }
                  style={{
                    borderRadius: 25,
                    backgroundColor: "#031c4a",
                    padding: "6px 15px",
                }}
                // value={value3}
                // onChange={(e) => {setValue3(e.target.value)}}
                >
                  <option aria-label="None" value="">Select feature3</option>
                    <option value={row.data.id}>{row.data.id}</option>
                    <option value={row.data.name}>{row.data.name}</option>
                    <option value={row.data.request}>{row.data.request}</option>
                    <option value={row.data.token}>{row.data.token}</option>
                    {/* <option value={row.data.name}>{row.data.name}</option>
                    <option value={row.data.request}>{row.data.request}</option>
                    <option value={row.data.token}>{row.data.token}</option> */}
                </Select>
                ))}
            </FormControl>
          </Box>
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
              {/* Chart */}
              <Grid item xs={12} md={8} lg={15}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,
                  }}
                >
                  <Chart />
                </Paper>
              </Grid>

              {/* Recent Deposits */}
              {/* <Grid item xs={12} md={4} lg={3}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,
                  }}
                >
                  <Deposits />
                </Paper>
              </Grid> */}

              {/* Recent Orders */}
              {/* <Grid item xs={12}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                  <Orders />
                </Paper>
              </Grid> */}

              <Grid item xs={12} md={8} lg={4}>
                <Paper
                  sx={{
                    p: 0.5,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 400,
                  }}
                >
                  <InfoTable1 />
                </Paper>
              </Grid>
              <Grid item xs={12} md={8} lg={4}>
                <Paper
                  sx={{
                    p: 0.5,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 400,
                  }}
                >
                  <InfoTable2 />
                </Paper>
              </Grid>
              <Grid item xs={12} md={8} lg={4}>
                <Paper
                  sx={{
                    p: 0.5,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 400,
                  }}
                >
                  <InfoTable3 />
                </Paper>
              </Grid>
            </Grid>
            {/* <Copyright sx={{ pt: 4 }} /> */}
          </Container>
          </div> 
    );
}