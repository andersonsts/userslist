import { makeStyles } from '@material-ui/core/styles' 

export const useStyles = makeStyles(() => ({
  paper: {
    background: '#323232',
    color: '#fff',
    borderRadius: 8,
    boxShadow: '2px 2px 10px rgba(0, 0, 0, 0.1)',
    padding: '20px 24px',
    position: 'relative',
    '&:before': {
      content: "''",
      position: 'absolute',
      left: 0,
      width: '6px',
      height: '80%',
      display: 'block',
      borderRadius: '0px 10px 10px 0px',
      overflow: 'hidden',
      background: 'linear-gradient(175deg, rgba(213,150,31,1) 4%, rgba(254,82,0,1.0) 30%, rgba(255,184,0,1) 71%);'
    },
    '&:after': {
      content: "''",
      position: 'absolute',
      right: 0,
      top: 20,
      width: '6px',
      height: '80%',
      display: 'block',
      borderRadius: '10px 0px 0px 10px',
      overflow: 'hidden',
      background: 'linear-gradient(175deg, rgba(213,150,31,1) 4%, rgba(254,82,0,1.0) 30%, rgba(255,184,0,1) 71%);'
    }
  },
  button: {
    color: 'rgba(255,184,0,1)',
    border: '1px solid  rgba(255,184,0,1)',
    borderRadius: '12px',
    fontSize: '12px',
    width: '164px',
    marginTop: '24px'
  },
  name: {
    marginBottom: '12px',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    marginLeft: '6px'
  },
  infoGroup: {
    marginLeft: '24px', 
    lineHeight: '24px'
  },
  titleGroup: {
    fontWeight: 'bold'
  },
  headerGroup: {
    marginLeft: '4px'
  },
  group: {
    marginTop: '5px'
  },
  card: {
    maxWidth: '400px', 
    width: '100%'
  },
  headerInfo: {
    flexWrap: 'nowrap', 
    marginLeft: '-4px'
  },
  firstInfo: {
    marginLeft: '4px'
  },
  moreContent: {
    paddingRight: '10px'
  }
}))