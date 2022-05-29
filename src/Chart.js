import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
import Title from './Title';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { memo, useState } from "react";
import dayjs from "dayjs";
import { Box } from "@mui/material";
import { CalendarPicker, DATE_RANGE } from "mui-calendar-picker";

// Generate Sales Data
function createData(time, amount, a) {
  return { time, amount, a };
}

const data = [
  createData('SEP', 0, 100),
  // createData('03:00', 300),
  createData('OCT', 600, 700),
  // createData('09:00', 800),
  createData('NOV', 1500, 1600),
  // createData('15:00', 2000),
  createData('DEC', 2400, 2000),
  createData('JAN', 2400, 2000),
  createData('FEB', undefined),
];

export default function Chart() {
  const theme = useTheme();
  const [dateRange, setDateRange] = useState(DATE_RANGE);

  return (
    <React.Fragment>
      <Grid container spacing={3}>
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
              {/* <Button variant="outlined" startIcon={<CalendarTodayIcon />} style={{ color: "#fff"}}>
                This Month
              </Button> */}
              <CalendarPicker
                setDateRange={setDateRange}
                theme={theme}
                openBtnText={"This month"}   // optional
                todayBtnText={"Back to Today"}      // optional
                confirmBtnText={"Submit"}           // optional
              />
              <Button variant="outlined" startIcon={<MoreHorizIcon />} style={{ color: "#fff"}}>
              </Button>
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
                {/* <YAxis
                  stroke={theme.palette.text.secondary}
                  style={theme.typography.body2}
                >
                  <Label
                    angle={270}
                    position="left"
                    style={{
                      textAnchor: 'middle',
                      fill: theme.palette.text.primary,
                      ...theme.typography.body1,
                    }}
                  >
                    Sales ($)
                  </Label>
                </YAxis> */}
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

    </React.Fragment>
  );
}