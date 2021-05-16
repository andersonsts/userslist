import { useEffect, useState } from "react";
import { Grid, Container, Typography } from "@material-ui/core";

import { createFakeUserAvatarByFullName } from "../utils/createFakeUserAvatar";
import { UserCard, UserCardSkeleton } from "../components/UserCard";
import ErrorContainer from "../components/UserCard/ErrorContainer";
import { getAllUsers } from "../services/users/users.service";

import { useStyles } from '../styles/Home'

interface UserProps {
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

export default function Home() {
  const classes = useStyles()

  const [users, setUsers] = useState<UserProps[]>([])
  const [loading, setLoading] = useState(false)
  const [err, setErr] = useState(false)

  useEffect(() => {
    const getUsers = async () => {
      try {
        setErr(false)
        setLoading(true)
        const usersData = await getAllUsers()
        const formattedUsers = usersData.map((user: UserProps) => ({ 
          ...user, 
          photo: createFakeUserAvatarByFullName(user.name) 
        }))
        setUsers(formattedUsers)
      } catch (e) {
        setErr(true)
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
        {err 
          ? <ErrorContainer />
          : loading 
            ? <UserCardSkeleton quantity={10} /> 
            : users.map(user => (
                <UserCard 
                  key={user.id} 
                  user={user} 
                />
              ))
        }              
      </Grid>
    </Container>
  )
}
