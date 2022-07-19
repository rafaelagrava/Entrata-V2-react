import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import {TotalAmount,TotalTransaction,TotalPostedTransaction,TotalFailedTransaction} from '../components/Cards';
import {RecentTransactionTable} from '../tables/recentTransactionTable'


//const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  title: {
    flexGrow: 1,
  },
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
}));

export default function Homepage() {
  const classes = useStyles();

  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);


  return (
          <Grid container spacing={3}>
          <Grid item xs={12} md={4} lg={3}>
              <Paper className={fixedHeightPaper}>
                <TotalAmount />
              </Paper>
            </Grid>
            <Grid item xs={12} md={4} lg={3}>
              <Paper className={fixedHeightPaper}>
                <TotalTransaction />
              </Paper>
            </Grid>
            <Grid item xs={12} md={4} lg={3}>
              <Paper className={fixedHeightPaper}>
                <TotalPostedTransaction />
              </Paper>
            </Grid>
            <Grid item xs={12} md={4} lg={3}>
              <Paper className={fixedHeightPaper}>
                <TotalFailedTransaction />
              </Paper>
            </Grid> 
            {/* Recent Orders */}
            <Grid item xs={12}>
            <RecentTransactionTable/>
              {/* <Paper className={classes.paper}>
               
              </Paper> */}
            </Grid>
          </Grid>
  );
}






