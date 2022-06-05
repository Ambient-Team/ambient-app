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
import { thirdListItems } from './listItems';
import { AreaChart, CartesianGrid, XAxis, YAxis, Tooltip, Area, PieChart, Pie, BarChart, Bar, Legend } from 'recharts';
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';
import { Sankey, RadialBarChart, RadialBar } from 'recharts';
import Paper from '@mui/material/Paper';
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

function createData(id, name, request, token) {
  return {
    id, 
    name, 
    request, 
    token
  };
}

export default function VisualizationPage() {
    const [open, setOpen] = React.useState(false);
    const toggleDrawer = () => {
        setOpen(!open);
    };

    const [examples, setExamples] = useState([])

    useEffect(() => {
      const exampleCollectionRef = collection(firestore, 'Test')
      const unsubscribe = onSnapshot(exampleCollectionRef, snapshot => {
        setExamples(snapshot.docs.map(doc => ({id: doc.id, data: doc.data() })))
      })

      return () => {
        unsubscribe()
      }
    }, [])

    var rows = []
    const test = examples.map((row) => {
          rows.push(createData(row.data.id, row.data.name, row.data.request, row.data.token))
    })

    const data0 = {
        "nodes": [
          {
            "name": "Electricity:Facility [kW](Hourly)"
          },
          {
            "name": "Fans:Electricity [kW](Hourly)"
          },
          {
            "name": "Cooling:Electricity [kW](Hourly)"
          },
          {
            "name": "Heating:Electricity [kW](Hourly)"
          },
          {
            "name": "InteriorEquipment:Electricity [kW](Hourly)"
          }
        ],
        "links": [
          {
            "source": 0,
            "target": 1,
            "value": 3728.3
          },
          {
            "source": 0,
            "target": 2,
            "value": 354170
          },
          {
            "source": 2,
            "target": 3,
            "value": 62429
          },
          {
            "source": 2,
            "target": 4,
            "value": 291741
          }
        ]
      };

    const data1 = [
        {
          "name": "1/1/2022 1:00:00",
          "Electricity:Facility": 22.0359773211,
          "Fans:Electricity": 3.58622083312,
          "amt": 2400
        },
        {
          "name": "1/1/2022 2:00:00",
          "Electricity:Facility": 14.6497574756,
          "Fans:Electricity": 0,
          "amt": 2210
        },
        {
          "name": "1/1/2022 3:00:00",
          "Electricity:Facility": 14.6695666583,
          "Fans:Electricity": 0,
          "amt": 2290
        },
        {
          "name": "1/1/2022 4:00:00",
          "Electricity:Facility": 14.6778080063,
          "Fans:Electricity": 0,
          "amt": 2000
        },
        {
          "name": "1/1/2022 5:00:00",
          "Electricity:Facility": 14.8247939046,
          "Fans:Electricity": 0,
          "amt": 2181
        },
        {
          "name": "1/1/2022 6:00:00",
          "Electricity:Facility": 22.1826486691,
          "Fans:Electricity": 3.58622083312,
          "amt": 2500
        },
        {
          "name": "1/1/2022 7:00:00",
          "Electricity:Facility": 38.1318450946,
          "Fans:Electricity": 3.58622083312,
          "amt": 2100
        }
      ]

      const data2 = [
        {
          "name": "1/1/2022 1:00:00",
          "Electricity:Facility": 22.0359773211,
          "Fans:Electricity": 3.58622083312,
        },
        {
          "name": "1/1/2022 2:00:00",
          "Electricity:Facility": 14.6497574756,
          "Fans:Electricity": 0,
        },
        {
          "name": "1/1/2022 3:00:00",
          "Electricity:Facility": 14.6695666583,
          "Fans:Electricity": 0,
        },
        {
          "name": "1/1/2022 4:00:00",
          "Electricity:Facility": 14.6778080063,
          "Fans:Electricity": 0,
        },
        {
          "name": "1/1/2022 5:00:00",
          "Electricity:Facility": 14.8247939046,
          "Fans:Electricity": 0,
        },
        {
          "name": "1/1/2022 6:00:00",
          "Electricity:Facility": 22.1826486691,
          "Fans:Electricity": 3.58622083312,
        },
        {
          "name": "1/1/2022 7:00:00",
          "Electricity:Facility": 38.1318450946,
          "Fans:Electricity": 3.58622083312,
        }
      ]

      const data3 = [
        {
          "subject": "1/2/2022 10:00:00",
          "gas": 195.316130277,
          "heating": 126.323276903,
          "fullMark": 200
        },
        {
          "subject": "1/2/2022 11:00:00",
          "gas": 185.990106876,
          "heating": 127.962255011,
          "fullMark": 200
        },
        {
          "subject": "1/2/2022 12:00:00",
          "gas": 173.953198247,
          "heating": 117.690928261,
          "fullMark": 200
        },
        {
          "subject": "1/2/2022 13:00:00",
          "gas": 168.977284855,
          "heating": 122.827207538,
          "fullMark": 200
        },
        {
          "subject": "1/2/2022 14:00:00",
          "gas": 162.368930155,
          "heating": 126.323276903,
          "fullMark": 200
        },
        {
          "subject": "1/2/2022 15:00:00",
          "gas": 174.31754351,
          "heating": 129.920541843,
          "fullMark": 200
        }
      ]

      const data4 = [
        {
          "name": "1/1/2022 1:00:00",
          "InteriorLights:Electricity": 4.58992532963,
          "InteriorEquipment:Electricity": 8.1892,
          "fill": "#8884d8"
        },
        {
          "name": "1/1/2022 2:00:00",
          "InteriorLights:Electricity": 1.52997510988,
          "InteriorEquipment:Electricity": 7.4902,
          "fill": "#83a6ed"
        },
        {
          "name": "1/1/2022 3:00:00",
          "InteriorLights:Electricity": 1.52997510988,
          "InteriorEquipment:Electricity": 7.4902,
          "fill": "#8dd1e1"
        },
        {
          "name": "1/1/2022 4:00:00",
          "InteriorLights:Electricity": 1.52997510988,
          "InteriorEquipment:Electricity": 7.4902,
          "fill": "#82ca9d"
        },
        {
          "name": "1/1/2022 5:00:00",
          "InteriorLights:Electricity": 1.52997510988,
          "InteriorEquipment:Electricity": 7.4902,
          "fill": "#a4de6c"
        },
        {
          "name": "1/1/2022 6:00:00",
          "InteriorLights:Electricity": 4.58992532963,
          "InteriorEquipment:Electricity": 8.1892,
          "fill": "#d0ed57"
        },
        {
          "name": "1/1/2022 7:00:00",
          "InteriorLights:Electricity": 9.17985065927,
          "InteriorEquipment:Electricity": 19.4245,
          "fill": "#ffc658"
        }
      ]

      const data01 = [
        {
          "name": "1/2/2022 1:00:00",
          "value": 4.58992533
        },
        {
          "name": "1/2/2022 2:00:00",
          "value": 1.52997511
        },
        {
          "name": "1/2/2022 3:00:00",
          "value": 1.52997511
        },
        {
          "name": "1/2/2022 4:00:00",
          "value": 1.52997511
        },
        {
          "name": "1/2/2022 5:00:00",
          "value": 1.52997511
        },
        {
          "name": "1/2/2022 6:00:00",
          "value": 4.58992533
        }
      ];
      const data02 = [
        {
          "name": "1/2/2022 1:00:00",
          "value": 158.0636608
        },
        {
          "name": "1/2/2022 2:00:00",
          "value": 3.931972005
        },
        {
          "name": "1/2/2022 3:00:00",
          "value": 3.35988
        },
        {
          "name": "1/2/2022 4:00:00",
          "value": 3.931926177
        },
        {
          "name": "1/2/2022 5:00:00",
          "value": 3.35988
        },
        {
          "name": "1/2/2022 6:00:00",
          "value": 165.2225549
        }
      ];

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
                    {thirdListItems}
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
                        Ambient / Data Visualization / Dashboard
                    </Typography>
                    <Typography
                        component="h1"
                        variant="h4"
                        color="inherit"
                        noWrap
                        sx={{ flexGrow: 1, ml: 8, mb: 2 }}
                        >
                        Dashboard
                    </Typography>
                </Box>
                <Box sx={{ width: '100%', display: 'flex' }}>
                    <AreaChart width={800} height={250} data={data1}
                        margin={{ top: 10, right: 30, left: 50, bottom: 10 }}>
                        <defs>
                            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                            <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                            </linearGradient>
                            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
                            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
                            </linearGradient>
                        </defs>
                        <XAxis dataKey="name" />
                        <YAxis />
                        {/* <CartesianGrid strokeDasharray="3 3" /> */}
                        <Tooltip />
                        <Area type="monotone" dataKey="Electricity:Facility" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
                        <Area type="monotone" dataKey="Fans:Electricity" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
                    </AreaChart>

                    <PieChart width={400} height={250}>
                        <Pie data={data01} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
                        <Pie data={data02} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
                    </PieChart>
                </Box>
                <Box sx={{ width: '100%', display: 'flex' }}>
                    <BarChart width={800} height={250} data={data2}
                        margin={{ top: 10, right: 30, left: 50, bottom: 10 }}>
                        {/* <CartesianGrid strokeDasharray="3 3" /> */}
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="Electricity:Facility" fill="#8884d8" />
                        <Bar dataKey="Fans:Electricity" fill="#82ca9d" />
                    </BarChart>
                    
                    <RadarChart outerRadius={90} width={400} height={250} data={data3}>
                        <PolarGrid />
                        <PolarAngleAxis dataKey="subject" />
                        <PolarRadiusAxis angle={30} domain={[0, 150]} />
                        <Radar name="Gas:Facility [kW](Hourly)" dataKey="gas" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                        <Radar name="Heating:Gas [kW](Hourly)" dataKey="heating" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
                        <Legend />
                    </RadarChart>
                </Box>
                <Box sx={{ width: '100%', display: 'flex' }}>
                    <Sankey
                        width={800}
                        height={250}
                        data={data0}
                        node={{stroke: '#77c878', strokeWidth: 2}}
                        nodePadding={50}
                        margin={{
                        left: 80,
                            right: 30,
                            top: 50,
                            bottom: 10,
                        }}
                        link={{ stroke: '#fff' }}
                        >
                        <Tooltip />
                    </Sankey>

                    <RadialBarChart 
                        width={400} 
                        height={250} 
                        innerRadius="10%" 
                        outerRadius="80%" 
                        data={data4} 
                        startAngle={180} 
                        endAngle={-180}
                        >
                        <RadialBar minAngle={15} label={{ fill: '#666', position: 'insideStart' }} background clockWise={true} dataKey='InteriorLights:Electricity' />
                        <Legend iconSize={10} width={120} height={140} layout='vertical' verticalAlign='middle' align="right" />
                        <Tooltip />
                    </RadialBarChart>
                </Box>
            </Box>
        </Box>
    );
}