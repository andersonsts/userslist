import { makeStyles } from '@material-ui/core/styles' 

export const useStyles = makeStyles(({ palette }) => ({
  container: {
    paddingTop: '48px'
  },
  title: {
    fontSize: '54px',
    color: `${palette.textColor.main}`,
    textAlign: 'center',
    marginBottom: '16px'
  }
}))