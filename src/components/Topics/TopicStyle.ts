import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  root: {
    position: 'relative',
    width: '91px',
    height: '91px',
    borderRadius: '10px',
    marginLeft: '5px',
    backgroundColor: '#DEDEDE'
  },
  image: {
    width: '91px',
    height: '91px',
    borderRadius: '10px'
  },
  topic: {
    position: 'absolute',
    width: '79px',
    height: '13px',
    paddingTop: '70px',
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    fontSize: '12px',
    lineHeight: '14px',
    textAlign: 'center',
    color: '#FFFFFF'
  }
});
