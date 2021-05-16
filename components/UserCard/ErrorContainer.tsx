import { Grid, Typography } from "@material-ui/core";
import WarningIcon from '@material-ui/icons/Warning';

export default function ErrorContainer () {
  return (
    <Grid container direction='column' alignItems='center' justify='center' spacing={2} style={{ marginTop: '42px' }}>
      <WarningIcon fontSize='large' color='secondary'/>
      <Grid item>
        <Typography variant='h4'>
          Ops! algo deu errado. Tente novamente mais tarde.
        </Typography>
      </Grid>
    </Grid>
  )
}