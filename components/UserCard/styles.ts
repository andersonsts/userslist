import { makeStyles } from '@material-ui/core/styles' 

export const useStyles = makeStyles(({ palette }) => ({
  paper: {
    background: `${palette.primary.main}`,
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
      background: `linear-gradient(175deg, ${palette.terciary.main} 4%, ${palette.secondary.main} 30%, ${palette.textColor.main} 71%);`
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
      background: `linear-gradient(175deg, ${palette.terciary.main} 4%, ${palette.secondary.main} 30%, ${palette.textColor.main} 71%);`
    }
  },
  button: {
    color: `${palette.textColor.main}`,
    border: `1px solid ${palette.textColor.main}`,
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
    marginLeft: '28px', 
    lineHeight: '24px'
  },
  titleGroup: {
    fontWeight: 'bold'
  },
  headerGroup: {
    marginLeft: '8px'
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
    paddingRight: '10px',
    marginLeft: '-4px'
  }
}))