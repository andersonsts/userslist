import { useEffect, useState } from "react";
import { Grid, Container, Typography } from "@material-ui/core";

import { createFakeUserAvatarByFullName } from "../utils/createFakeUserAvatar";
import UserCard from "../components/UserCard";
import { getAllUsers } from "../services/users/users.service";

import { useStyles } from '../styles/Home'

export default function Home() {
  const classes = useStyles()

  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [err, setErr] = useState(null)

  useEffect(() => {
    const getUsers = async () => {
      try {
        const usersData = await getAllUsers()
        const formattedUsers = usersData.map(user => ({ ...user, photo: createFakeUserAvatarByFullName(user.name) }))
        setUsers(formattedUsers)
      } catch (e) {
        setErr('Err')
      } finally {
        setLoading(false)
      }
    }

    getUsers()
  }, [])

  return (
    <Container maxWidth='xl' className={classes.container}>
      <Typography variant='h1' className={classes.title}>
        User list.
      </Typography>
      <Grid container justify='center' spacing={4}>
        {users.map(user => (
          <UserCard key={user.id} user={user} />
        ))} 
      </Grid>
    </Container>
  )
}
