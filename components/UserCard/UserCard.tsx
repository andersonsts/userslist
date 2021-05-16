import React, { useCallback, useState } from 'react';
import MailIcon from '@material-ui/icons/Mail';
import { Avatar, Button, Grid, Paper, Typography } from '@material-ui/core';
import RoomIcon from '@material-ui/icons/Room';
import BusinessIcon from '@material-ui/icons/Business';
import PersonIcon from '@material-ui/icons/Person';

import { useStyles } from './styles'

interface UserProps {
  user: {
    id: number;
    name: string;
    email: string;
    username: string;  
    photo: string;
    address: {
      street: string;
      suite:  string;
      city: string;
      zipcode: string;
    }
    company: {
      name: string;
      catchPhrase: string;
      bs: string;
    }
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
            {user.photo}
          </Avatar>
          <Typography variant='h4' className={classes.name}>
            {user.name}
          </Typography>
        </Grid>
        <Grid container alignItems='center' spacing={1}>
          <MailIcon fontSize='small' />
          <Grid item className={classes.firstInfo}>
            <Typography variant='subtitle1'>
              <strong>
                Email
              </strong> 
              &nbsp;
              • &nbsp; {user.email}
            </Typography>  
          </Grid>
        </Grid>
        <Grid container alignItems='center' spacing={1}>
          <PersonIcon fontSize='small' />
          <Grid item className={classes.firstInfo}>
            <Typography variant='subtitle1'>
              <strong>
                User 
              </strong> &nbsp;
                • &nbsp; {user.username}
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
                  <strong>Street: </strong> <span>{user.address.street}</span>
                </Grid>
                <Grid item xs={12}>
                  <strong>Suíte: </strong> <span>{user.address.suite}</span>
                </Grid>
                <Grid item xs={12}>
                  <strong>City: </strong> <span>{user.address.city}</span>
                </Grid>
                <Grid item xs={12}>
                  <strong>Zipcode: </strong> <span>{user.address.zipcode}</span>
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
                  <strong>Name: </strong> <span>{user.company.name}</span>
                </Grid>
                <Grid item md={12}>
                  <strong>Catch Phrase: </strong> <span>{user.company.catchPhrase}</span>
                </Grid>
                <Grid item md={12}>
                  <strong>BS: </strong> <span>{user.company.bs}</span>
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