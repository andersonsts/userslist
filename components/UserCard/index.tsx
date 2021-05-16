import React, { useCallback, useState } from 'react';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import MailIcon from '@material-ui/icons/Mail';
import { Avatar, Button, Grid, Paper, Typography } from '@material-ui/core';
import RoomIcon from '@material-ui/icons/Room';
import BusinessIcon from '@material-ui/icons/Business';

import { useStyles } from './styles'

interface UserProps {
  user: {
    id: number;
    name: string;
    email: string;
    username: string;  
    photo: string;
  }
}

export default function UserCard ({ user }: UserProps) {
  const classes = useStyles()
 
  const [showMoreInfo, setShowMoreInfo] = useState(false)

  const handleClick = useCallback(() => {
    setShowMoreInfo(prevState => !prevState)
  }, [])

  return (
    <Grid item className={classes.card}>
      <Paper className={classes.paper}>
        <Grid container className={classes.headerInfo}>
          <Avatar>
            {user?.photo}
          </Avatar>
          <Typography variant='h4' className={classes.name}>
            {user?.name}
          </Typography>
        </Grid>
        <Grid container alignItems='center' spacing={1}>
          <MailIcon fontSize='small' />
          <Grid item className={classes.firstInfo}>
            <Typography variant='subtitle1'>
              <strong>
                Email
              </strong> &nbsp;
               • &nbsp; {user?.email}
            </Typography>  
          </Grid>
        </Grid>
        <Grid container alignItems='center' spacing={1}>
          <PersonAddIcon fontSize='small' />
          <Grid item className={classes.firstInfo}>
            <Typography variant='subtitle1'>
              <strong>
                User 
              </strong> &nbsp;
                • &nbsp; {user?.username}
            </Typography>  
          </Grid>
        </Grid>

        {showMoreInfo && (
          <Grid container justify='space-between' className={classes.moreContent}>
            <Grid item className={classes.group}>
              <Grid container alignItems='center'>
                <RoomIcon fontSize='small' />
                <Grid item  className={classes.headerGroup}>
                  <Typography variant='subtitle1' className={classes.titleGroup}>
                    Address
                  </Typography>  
                </Grid>
              </Grid>
              <Grid container className={classes.infoGroup}>
                <Grid item xs={12}>
                  <strong>Street: </strong> <span>Kulas Light</span>
                </Grid>
                <Grid item xs={12}>
                  <strong>Suíte: </strong> <span>Apt. 555</span>
                </Grid>
                <Grid item xs={12}>
                  <strong>City: </strong> <span>Gwenborough</span>
                </Grid>
                <Grid item xs={12}>
                  <strong>Zipcode: </strong> <span>92998-987</span>
                </Grid>
              </Grid>
            </Grid>

            <Grid item className={classes.group}>
              <Grid container alignItems='center'>
                <BusinessIcon fontSize='small' />
                <Grid item className={classes.headerGroup}>
                  <Typography variant='subtitle1' className={classes.titleGroup}>
                    Company
                  </Typography>  
                </Grid>
              </Grid>
              <Grid container className={classes.infoGroup}>
                <Grid item md={12}>
                  <strong>Name: </strong> <span>Komaguera-Crona</span>
                </Grid>
                <Grid item md={12}>
                  <strong>Catch Phrase: </strong> <span>ulti-layered client-server neural-net</span>
                </Grid>
                <Grid item md={12}>
                  <strong>BS: </strong> <span>harness real-time e-markets</span>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        )}

        <Grid container justify='center'>
          <Button className={classes.button} onClick={handleClick}>
            {!showMoreInfo ? 'MORE INFO': 'HIDE INFO'}
          </Button>
        </Grid>
      </Paper>
    </Grid>
  )
}