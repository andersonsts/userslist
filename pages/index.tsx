import { useEffect, useState } from "react";
import { Grid, Container, Typography } from "@material-ui/core";

import UserCard from "../components/UserCard";
import { createFakeUserAvatarByFullName } from "../utils/createFakeUserAvatar";

import { useStyles } from '../styles/Home'

export default function Home() {
  const classes = useStyles()

  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        const formattedUsers = data.map(user => ({ 
          ...user, 
          photo: createFakeUserAvatarByFullName(user.name) 
        }))
        setUsers(formattedUsers)
      })
  }, [])

  return (
    <Container maxWidth='xl' className={classes.container}>
      <Typography variant='h1' className={classes.title}>
        User list.
      </Typography>
      <Grid container justify='center' spacing={4}>
        {users.map(user => (
          <UserCard 
            key={user.id} 
            user={user} 
          />
        ))}
      </Grid>
    </Container>
  )
}
