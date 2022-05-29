import InfoTable1 from './InfoTable';
import InfoTable2 from './InfoTable2';
import InfoTable3 from './InfoTable3';
import Chart from './Chart';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { forOverview } from './Selects';

export default function OverviewPage() {
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
          { forOverview }
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