import React from 'react';
import { Grid, Paper, Typography } from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';

import { useStyles } from './styles'

type UserCardSkeletonProps = {
  quantity?: number;
}

export default function UserCardSkeleton ({ quantity = 8 }: UserCardSkeletonProps) {
  const classes = useStyles()
 
  return (
    <>
      {Array.from(Array(quantity).keys()).map(item => (
        <Grid key={item} item className={classes.card}>
          <Paper className={classes.paper}>
            <Grid container className={classes.headerInfo}>
              <Skeleton variant="circle" width={40} height={40} />
              <Typography variant='h4' className={classes.name}>
                <Skeleton variant="rect" width={210} height={40} />
              </Typography>
            </Grid>
            <Grid container alignItems='center' spacing={1}>
              <Skeleton 
                variant="rect" 
                width={200}
                height={30} 
                style={{ marginTop: '4px' }}
              />
            </Grid>
            <Grid container alignItems='center' spacing={1}>
              <Skeleton 
                variant="rect" 
                width={200}
                height={30} 
                style={{ marginTop: '12px' }}
              />
            </Grid>
    
            <Grid container justify='center'>
              <Skeleton variant="rect" width={170} height={30} style={{ marginTop: '25px' }} /> 
            </Grid>
          </Paper>
        </Grid>
      ))}
    </>
  )
}